function LikeAndDislike({
  handleLikeAndDislike,
  isActive,
  activeColor,
  children,
}) {
  return (
    <button
      onClick={handleLikeAndDislike}
      style={{ color: isActive ? activeColor : "black" }}
    >
      {children}
    </button>
  );
}

export default LikeAndDislike;
