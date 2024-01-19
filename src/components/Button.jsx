function Button({ handleClick, btnClass, content }) {
  return (
    <button className={btnClass} onClick={handleClick}>
      {content}
    </button>
  );
}

export default Button;
