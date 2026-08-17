import type { PaymentRequest } from "../types/payment";
import { formatNaira } from "../utils/formatMoney";
import { StatusBadge } from "./StatusBadge";

interface RequestCardProps {
  request: PaymentRequest;
  selected: boolean;
  onSelect: (id: string) => void;
}

export function RequestCard({ request, selected, onSelect }: RequestCardProps) {
  return (
    <button
      className={`request-card${selected ? " request-card--selected" : ""}`}
      type="button"
      onClick={() => onSelect(request.id)}
      aria-pressed={selected}
    >
      <span className="request-card__identity">
        <span className="avatar" aria-hidden="true">{request.recipient.split(" ").map((part) => part[0]).join("").slice(0, 2)}</span>
        <span><strong>{request.recipient}</strong><small>{request.runTag}</small></span>
      </span>
      <span className="request-card__purpose">
        <small>Purpose</small>
        <span>{request.purpose}</span>
      </span>
      <span className="request-card__channel">
        <small>Channel</small>
        <span>{request.channel}</span>
      </span>
      <span className="request-card__amount">
        <strong>{formatNaira(request.amountKobo)}</strong>
        <StatusBadge status={request.status} />
      </span>
    </button>
  );
}
