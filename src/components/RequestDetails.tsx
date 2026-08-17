import type { PaymentRequest } from "../types/payment";
import { formatNaira } from "../utils/formatMoney";
import { StatusBadge } from "./StatusBadge";

interface RequestDetailsProps {
  request: PaymentRequest | undefined;
}

export function RequestDetails({ request }: RequestDetailsProps) {
  if (!request) {
    return (
      <aside className="details-panel details-panel--empty">
        <p>Select a visible request to review its release details.</p>
      </aside>
    );
  }

  return (
    <aside className="details-panel" aria-label={`Details for ${request.recipient}`}>
      <div className="details-panel__topline"><p className="eyebrow">Request detail</p><StatusBadge status={request.status} /></div>
      <h2>{request.recipient}</h2>
      <p className="details-panel__tag">{request.runTag} · {request.reference}</p>
      <strong className="details-panel__amount">{formatNaira(request.amountKobo)}</strong>
      <dl className="details-grid">
        <div><dt>Channel</dt><dd>{request.channel}</dd></div>
        <div><dt>Schedule</dt><dd>{request.scheduledFor}</dd></div>
        <div className="details-grid__wide"><dt>Purpose</dt><dd>{request.purpose}</dd></div>
      </dl>
      <section className="risk-callout">
        <span>Release signal</span>
        <p>{request.riskNote}</p>
      </section>
      <section className="activity-list">
        <h3>Recent activity</h3>
        <ol>{request.activity.map((entry) => <li key={`${entry.label}-${entry.at}`}><span>{entry.label}</span><time>{entry.at}</time></li>)}</ol>
      </section>
    </aside>
  );
}
