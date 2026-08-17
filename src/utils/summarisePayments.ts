import type { PaymentRequest } from "../types/payment";

export interface PaymentSummary {
  total: number;
  pending: number;
  protected: number;
  ready: number;
  valueKobo: number;
}

export function summarisePayments(requests: PaymentRequest[]): PaymentSummary {
  return requests.reduce<PaymentSummary>(
    (summary, request) => ({
      total: summary.total + 1,
      pending: summary.pending + Number(request.status === "Pending"),
      protected: summary.protected + Number(request.status === "Locked"),
      ready: summary.ready + Number(request.status === "Ready"),
      valueKobo: summary.valueKobo + request.amountKobo,
    }),
    { total: 0, pending: 0, protected: 0, ready: 0, valueKobo: 0 },
  );
}
