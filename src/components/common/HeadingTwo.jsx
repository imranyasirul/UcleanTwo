const HeadingTwo = ({ className, text }) => {
  return (
    <h2
      className={`text-[48px] font-semibold font-quicksand text-white tracking-[-1.2px] leading-[57.6px ${className}`}
    >
      {text}
    </h2>
  );
};

export default HeadingTwo;
