export default function ResultCard({ result }) {
  return (
    <div style={{ marginTop: "1rem", padding: "1rem", border: "1px solid #ddd" }}>
      <h3>{result.status}</h3>
      <ul>
        {result.reasons.length > 0 ? (
          result.reasons.map((r, i) => <li key={i}>{r}</li>)
        ) : (
          <li>No suspicious patterns found</li>
        )}
      </ul>
    </div>
  );
}
