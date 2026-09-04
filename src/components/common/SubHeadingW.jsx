const SubHeadingW = ({ className,text }) => {
  return (
    <h4
      className={` py-1 px-4 rounded-[30px] w-fit text-[14px] font-semibold leading-4.5 font-open-sans tracking-[1px] text-[#48B1FB] bg-[#48B1FB]/15 ${className}`}
    >{text}</h4>
  );
};

export default SubHeadingW;