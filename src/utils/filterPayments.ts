import type { PaymentFilters, PaymentRequest, SortOrder } from "../types/payment";

export function filterAndSortPayments(
  requests: PaymentRequest[],
  filters: PaymentFilters,
  sortOrder: SortOrder,
): PaymentRequest[] {
  const query = filters.query.trim().toLocaleLowerCase();

  return requests
    .filter((request) => filters.status === "All" || request.status === filters.status)
    .filter((request) => filters.channel === "All" || request.channel === filters.channel)
    .filter((request) => {
      if (!query) return true;
      return [request.recipient, request.runTag, request.purpose, request.reference]
        .join(" ")
        .toLocaleLowerCase()
        .includes(query);
    })
    .sort((left, right) =>
      sortOrder === "amount"
        ? right.amountKobo - left.amountKobo
        : right.createdAt.localeCompare(left.createdAt),
    );
}
