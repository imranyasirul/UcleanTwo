const Anchor = ({ href = "#", target, className = "", onClick, children }) => {
  return (
    <a href={href} target={target} className={className} onClick={onClick}>
      {children}
    </a>
  );
};

export default Anchor;
