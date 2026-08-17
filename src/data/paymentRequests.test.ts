import { describe, expect, it } from "vitest";
import { paymentRequests } from "./paymentRequests";

describe("payment request fixtures", () => {
  it("uses stable unique identifiers and references", () => {
    expect(new Set(paymentRequests.map((request) => request.id))).toHaveLength(paymentRequests.length);
    expect(new Set(paymentRequests.map((request) => request.reference))).toHaveLength(paymentRequests.length);
  });

  it("covers every operational status", () => {
    expect(new Set(paymentRequests.map((request) => request.status))).toEqual(
      new Set(["Pending", "Locked", "Ready", "Released"]),
    );
  });
});
