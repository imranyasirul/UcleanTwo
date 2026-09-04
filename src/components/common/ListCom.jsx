const ListCom = ({ text, className }) => {
  return (
    <p
      className={`text-[16px] text-[#F8F9FA] font-normal font-open-sans ${className}`}
    >
      {text}
    </p>
  );
};

export default ListCom;
