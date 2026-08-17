import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { App } from "./App";

describe("RunNaira operations", () => {
  it("shows the complete request queue and summary", () => {
    render(<App />);
    expect(screen.getByRole("heading", { name: "6 requests" })).toBeInTheDocument();
    expect(screen.getByText("RunLock protected").nextElementSibling).toHaveTextContent("2");
  });

  it("filters requests by recipient", async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.type(screen.getByRole("searchbox", { name: "Search requests" }), "Amina");
    const queue = screen.getByRole("region", { name: "Payment requests" });
    expect(screen.getByRole("heading", { name: "1 request" })).toBeInTheDocument();
    expect(within(queue).getByRole("button", { name: /Amina Bello/i })).toBeInTheDocument();
    expect(within(queue).queryByRole("button", { name: /Tola Adebayo/i })).not.toBeInTheDocument();
  });

  it("opens the selected request detail", async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole("button", { name: /Ifeanyi Okoro/i }));
    const detail = screen.getByRole("complementary", { name: "Details for Ifeanyi Okoro" });
    expect(within(detail).getByText("All release checks are complete.")).toBeInTheDocument();
  });

  it("can order requests by highest value", async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole("button", { name: /most recent/i }));
    const queue = screen.getByRole("region", { name: "Payment requests" });
    expect(within(queue).getAllByRole("button")[0]).toHaveAccessibleName(/Kora Logistics/i);
  });

  it("keeps the detail panel aligned with the visible request queue", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.selectOptions(screen.getByRole("combobox", { name: "Status" }), "Locked");

    const queue = screen.getByRole("region", { name: "Payment requests" });
    const firstVisibleRequest = within(queue).getByRole("button", { name: /Kora Logistics/i });
    expect(firstVisibleRequest).toHaveAttribute("aria-pressed", "true");
    expect(
      screen.getByRole("complementary", { name: "Details for Kora Logistics" }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("complementary", { name: "Details for Tola Adebayo" }),
    ).not.toBeInTheDocument();

    await user.type(screen.getByRole("searchbox", { name: "Search requests" }), "no match");
    expect(screen.getByText("Select a visible request to review its release details.")).toBeInTheDocument();
  });
});
