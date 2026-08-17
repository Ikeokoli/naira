import { useMemo, useState } from "react";
import { AppHeader } from "./components/AppHeader";
import { FilterBar } from "./components/FilterBar";
import { FooterNote } from "./components/FooterNote";
import { RequestDetails } from "./components/RequestDetails";
import { RequestList } from "./components/RequestList";
import { SummaryStrip } from "./components/SummaryStrip";
import { paymentRequests } from "./data/paymentRequests";
import type { PaymentFilters, SortOrder } from "./types/payment";
import { filterAndSortPayments } from "./utils/filterPayments";
import { summarisePayments } from "./utils/summarisePayments";

const defaultFilters: PaymentFilters = { query: "", status: "All", channel: "All" };

export function App() {
  const [filters, setFilters] = useState(defaultFilters);
  const [sortOrder, setSortOrder] = useState<SortOrder>("recent");
  const [selectedId, setSelectedId] = useState(paymentRequests[0].id);

  const visibleRequests = useMemo(
    () => filterAndSortPayments(paymentRequests, filters, sortOrder),
    [filters, sortOrder],
  );
  const summary = useMemo(() => summarisePayments(visibleRequests), [visibleRequests]);
  const selectedRequest =
    visibleRequests.find((request) => request.id === selectedId) ?? visibleRequests[0];
  const visibleSelectedId = selectedRequest?.id ?? "";

  return (
    <div className="app-shell">
      <AppHeader />
      <main id="workspace">
        <section className="hero-copy">
          <div>
            <p className="eyebrow">Sunday, 17 August · Payment desk</p>
            <h2>Move money with clarity.</h2>
          </div>
          <p>Review requests, follow RunLock protection, and keep every release aligned with the visible approval queue.</p>
        </section>
        <SummaryStrip summary={summary} />
        <FilterBar filters={filters} sortOrder={sortOrder} onFiltersChange={setFilters} onSortChange={setSortOrder} />
        <div className="workspace-grid">
          <RequestList
            requests={visibleRequests}
            selectedId={visibleSelectedId}
            onSelect={setSelectedId}
          />
          <RequestDetails request={selectedRequest} />
        </div>
      </main>
      <FooterNote />
    </div>
  );
}
