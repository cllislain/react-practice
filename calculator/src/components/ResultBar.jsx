function ResultBar({ result }) {
  function getFontSize() {
    const shouldSubtract = result.length > 5;
    const toSubtract = shouldSubtract ? 15 * (result.length / 5) : 0;
    return `${60 - toSubtract}px`;
  }

  return (
    <div className="resultBar" style={{ fontSize: getFontSize() }}>
      {result}
    </div>
  );
}

export default ResultBar;
