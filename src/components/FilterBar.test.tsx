import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { FilterBar } from "./FilterBar";

describe("FilterBar", () => {
  it("emits the selected status", async () => {
    const user = userEvent.setup();
    const onFiltersChange = vi.fn();
    render(
      <FilterBar
        filters={{ query: "", status: "All", channel: "All" }}
        sortOrder="recent"
        onFiltersChange={onFiltersChange}
        onSortChange={() => undefined}
      />,
    );
    await user.selectOptions(screen.getByRole("combobox", { name: "Status" }), "Locked");
    expect(onFiltersChange).toHaveBeenCalledWith({ query: "", status: "Locked", channel: "All" });
  });

  it("requests amount ordering from the recent view", async () => {
    const user = userEvent.setup();
    const onSortChange = vi.fn();
    render(
      <FilterBar
        filters={{ query: "", status: "All", channel: "All" }}
        sortOrder="recent"
        onFiltersChange={() => undefined}
        onSortChange={onSortChange}
      />,
    );
    await user.click(screen.getByRole("button", { name: /most recent/i }));
    expect(onSortChange).toHaveBeenCalledWith("amount");
  });
});
