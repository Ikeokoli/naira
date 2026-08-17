import { describe, expect, it } from "vitest";
import { paymentRequests } from "../data/paymentRequests";
import { summarisePayments } from "./summarisePayments";

describe("summarisePayments", () => {
  it("counts operational states and total value", () => {
    expect(summarisePayments(paymentRequests)).toEqual({
      total: 6,
      pending: 2,
      protected: 2,
      ready: 1,
      valueKobo: 293100000,
    });
  });

  it("returns zero values for an empty queue", () => {
    expect(summarisePayments([])).toEqual({ total: 0, pending: 0, protected: 0, ready: 0, valueKobo: 0 });
  });
});
