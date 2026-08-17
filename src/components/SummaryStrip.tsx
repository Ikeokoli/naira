import { formatNaira } from "../utils/formatMoney";
import type { PaymentSummary } from "../utils/summarisePayments";

interface SummaryStripProps {
  summary: PaymentSummary;
}

export function SummaryStrip({ summary }: SummaryStripProps) {
  const metrics = [
    { label: "Requests in view", value: String(summary.total), tone: "neutral" },
    { label: "Pending review", value: String(summary.pending), tone: "watch" },
    { label: "RunLock protected", value: String(summary.protected), tone: "protected" },
    { label: "Ready to release", value: String(summary.ready), tone: "ready" },
    { label: "Total value", value: formatNaira(summary.valueKobo), tone: "neutral" },
  ];

  return (
    <section className="summary-strip" aria-label="Payment request summary" id="signals">
      {metrics.map((metric) => (
        <article className={`metric-card metric-card--${metric.tone}`} key={metric.label}>
          <span>{metric.label}</span>
          <strong>{metric.value}</strong>
        </article>
      ))}
    </section>
  );
}
