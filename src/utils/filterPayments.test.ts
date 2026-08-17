import { describe, expect, it } from "vitest";
import { paymentRequests } from "../data/paymentRequests";
import { filterAndSortPayments } from "./filterPayments";

const defaults = { query: "", status: "All" as const, channel: "All" as const };

describe("filterAndSortPayments", () => {
  it("matches recipients, tags, and references without case sensitivity", () => {
    expect(filterAndSortPayments(paymentRequests, { ...defaults, query: "TOLA" }, "recent")[0].id).toBe("pay-7812");
    expect(filterAndSortPayments(paymentRequests, { ...defaults, query: "RN-5918" }, "recent")[0].id).toBe("pay-5918");
  });

  it("combines status and channel filters", () => {
    const result = filterAndSortPayments(
      paymentRequests,
      { ...defaults, status: "Locked", channel: "Bank" },
      "recent",
    );
    expect(result.map((request) => request.id)).toEqual(["pay-6634", "pay-3287"]);
  });

  it("orders the highest-value request first", () => {
    expect(filterAndSortPayments(paymentRequests, defaults, "amount")[0].id).toBe("pay-6634");
  });
});
