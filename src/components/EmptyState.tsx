export function EmptyState() {
  return (
    <section className="empty-state" aria-live="polite">
      <span aria-hidden="true">⌕</span>
      <h2>No requests match</h2>
      <p>Adjust the search, status, or channel filters to restore payment requests.</p>
    </section>
  );
}
