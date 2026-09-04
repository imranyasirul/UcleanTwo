const HeadingClone = ({ className, text }) => {
  return (
    <h2
      className={`text-[48px] font-semibold font-quicksand text-[#161C2D] tracking-[-1.2px] leading-[57.6px ${className}`}
    >
      {text}
    </h2>
  );
};

export default HeadingClone;
