import { BrandMark } from "./BrandMark";

export function AppHeader() {
  return (
    <header className="app-header">
      <div className="brand-lockup">
        <BrandMark />
        <div>
          <p className="eyebrow">Payment operations</p>
          <h1>RunNaira</h1>
        </div>
      </div>
      <nav aria-label="Primary navigation">
        <a href="#workspace" aria-current="page">Requests</a>
        <a href="#signals">Signals</a>
      </nav>
      <div className="operator-chip" aria-label="Signed in as Operations team">
        <span aria-hidden="true">OP</span>
        <div><strong>Operations</strong><small>North hub</small></div>
      </div>
    </header>
  );
}
