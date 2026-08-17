export type PaymentStatus = "Pending" | "Locked" | "Ready" | "Released";
export type PaymentChannel = "RunTag" | "Bank" | "QR";
export type SortOrder = "recent" | "amount";

export interface PaymentRequest {
  id: string;
  recipient: string;
  runTag: string;
  amountKobo: number;
  status: PaymentStatus;
  channel: PaymentChannel;
  createdAt: string;
  scheduledFor: string;
  purpose: string;
  reference: string;
  riskNote: string;
  activity: Array<{ label: string; at: string }>;
}

export interface PaymentFilters {
  query: string;
  status: PaymentStatus | "All";
  channel: PaymentChannel | "All";
}
