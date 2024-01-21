function Button({ handleClick, btnClass, content, type }) {
  return (
    <button type={type} className={btnClass} onClick={handleClick}>
      {content}
    </button>
  );
}

export default Button;
