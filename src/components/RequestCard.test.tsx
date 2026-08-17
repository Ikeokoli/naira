import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { paymentRequests } from "../data/paymentRequests";
import { RequestCard } from "./RequestCard";

describe("RequestCard", () => {
  it("presents recipient, amount, and status in its accessible name", () => {
    render(<RequestCard request={paymentRequests[0]} selected={false} onSelect={() => undefined} />);
    expect(screen.getByRole("button", { name: /Tola Adebayo.*485,000.*Pending/i })).toBeInTheDocument();
  });

  it("reports its stable request identifier when selected", async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    render(<RequestCard request={paymentRequests[0]} selected={false} onSelect={onSelect} />);
    await user.click(screen.getByRole("button"));
    expect(onSelect).toHaveBeenCalledWith("pay-7812");
  });
});
