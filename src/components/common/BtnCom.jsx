const BtnCom = ({ className="", text }) => {
  return (
    <button
      className={` font-quicksand cursor-pointer font-bold text-3.75 leading-7.5 mt-8.75 mb-14.25 py-2 px-6 bg-[#48B1FB] rounded-[30px] ${className}`}
    >
      {text}
    </button>
  );
};

export default BtnCom;
