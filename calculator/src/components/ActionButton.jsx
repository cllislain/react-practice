function ActionButton({ action, handleClick }) {
  function getBackgroundColor() {
    switch (action) {
      case '/':
      case '*':
      case '-':
      case '+':
        return 'cadetblue';
      case '=':
      case 'C':
        return 'brown';
      default:
        return 'gray';
    }
  }

  return (
    <button
      className="actionButton"
      onClick={() => handleClick(action)}
      style={{ backgroundColor: getBackgroundColor() }}
    >
      {action}
    </button>
  );
}

export default ActionButton;
