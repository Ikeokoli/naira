import { describe, expect, it } from "vitest";
import { formatNaira } from "./formatMoney";

describe("formatNaira", () => {
  it("converts kobo to a whole-naira display value", () => {
    expect(formatNaira(48500000)).toContain("485,000");
    expect(formatNaira(48500000)).toContain("₦");
  });
});
