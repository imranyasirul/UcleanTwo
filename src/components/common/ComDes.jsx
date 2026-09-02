const ComDes = ({ className = "", text }) => {
  return (
    <p
      className={`text-[16px] font-normal font-open-sans leading-7 ${className}`}
    >
      {text}
    </p>
  );
};

export default ComDes;
