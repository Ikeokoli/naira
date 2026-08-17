const nairaFormatter = new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",
  maximumFractionDigits: 0,
});

export function formatNaira(amountKobo: number): string {
  return nairaFormatter.format(amountKobo / 100).replace("NGN", "₦");
}
