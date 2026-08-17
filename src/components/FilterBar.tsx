import type {
  PaymentChannel,
  PaymentFilters,
  PaymentStatus,
  SortOrder,
} from "../types/payment";

interface FilterBarProps {
  filters: PaymentFilters;
  sortOrder: SortOrder;
  onFiltersChange: (filters: PaymentFilters) => void;
  onSortChange: (sortOrder: SortOrder) => void;
}

const statuses: Array<PaymentStatus | "All"> = ["All", "Pending", "Locked", "Ready", "Released"];
const channels: Array<PaymentChannel | "All"> = ["All", "RunTag", "Bank", "QR"];

export function FilterBar({ filters, sortOrder, onFiltersChange, onSortChange }: FilterBarProps) {
  return (
    <section className="filter-bar" aria-label="Payment request filters">
      <label className="search-field">
        <span>Search requests</span>
        <input
          type="search"
          placeholder="Recipient, RunTag, or reference"
          value={filters.query}
          onChange={(event) => onFiltersChange({ ...filters, query: event.target.value })}
        />
      </label>
      <label>
        <span>Status</span>
        <select
          value={filters.status}
          onChange={(event) =>
            onFiltersChange({ ...filters, status: event.target.value as PaymentStatus | "All" })
          }
        >
          {statuses.map((status) => <option value={status} key={status}>{status}</option>)}
        </select>
      </label>
      <label>
        <span>Channel</span>
        <select
          value={filters.channel}
          onChange={(event) =>
            onFiltersChange({ ...filters, channel: event.target.value as PaymentChannel | "All" })
          }
        >
          {channels.map((channel) => <option value={channel} key={channel}>{channel}</option>)}
        </select>
      </label>
      <button
        type="button"
        className="sort-button"
        aria-pressed={sortOrder === "amount"}
        onClick={() => onSortChange(sortOrder === "recent" ? "amount" : "recent")}
      >
        <span aria-hidden="true">↕</span>
        {sortOrder === "recent" ? "Most recent" : "Highest value"}
      </button>
    </section>
  );
}
