const SubHeading = ({ className,text }) => {
  return (
    <h4
      className={` py-1 px-4 rounded-[30px] w-fit text-[12px] font-semibold font-open-sans space-[1px] text-white bg-white/15 ${className}`}
    >{text}</h4>
  );
};

export default SubHeading;
