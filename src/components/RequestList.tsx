import type { PaymentRequest } from "../types/payment";
import { EmptyState } from "./EmptyState";
import { RequestCard } from "./RequestCard";

interface RequestListProps {
  requests: PaymentRequest[];
  selectedId: string;
  onSelect: (id: string) => void;
}

export function RequestList({ requests, selectedId, onSelect }: RequestListProps) {
  if (requests.length === 0) return <EmptyState />;

  return (
    <section className="request-list" aria-label="Payment requests">
      <div className="section-heading">
        <div><p className="eyebrow">Approval queue</p><h2>{requests.length} {requests.length === 1 ? "request" : "requests"}</h2></div>
        <span>Live operations view</span>
      </div>
      <div className="request-list__header" aria-hidden="true">
        <span>Recipient</span><span>Purpose</span><span>Channel</span><span>Value and status</span>
      </div>
      <div className="request-list__items">
        {requests.map((request) => (
          <RequestCard
            key={request.id}
            request={request}
            selected={request.id === selectedId}
            onSelect={onSelect}
          />
        ))}
      </div>
    </section>
  );
}
