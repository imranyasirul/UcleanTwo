import Container from "../../ui/Container";
import Image from "../../ui/Image";
import ComDes from "../../common/ComDes";
import CompaniesData from "../../../dataList/CompaniesData";
const Companies = () => {
  return (
    <section className="pt-20 bg-[#F8F9FA]">
      <Container>
        <div className="companiesWrap flex justify-between">
          {CompaniesData.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              <Image source={item.img} alt={item.title} />
              <h3 className=" my-3 text-5 font-semibold font-quicksand text-[#161C2D]">
                {item.title}
              </h3>
              <ComDes className=" text-center" text={item.description} />
            </div>
          ))}
        </div>
        {/* ======Counter start */}
        <div className="counter py-12 bg-[#FEE74A] px-30 mt-20 relative top-20">
          <div className="counterWrap flex justify-between">
            <div className="countUser">
              <h4 className="font-semibold font-quicksand leading-10 text-[40px] text-[#161C2D]">
                65250 +
              </h4>
              <p className="text-[15px] text-[#707070] font-normal font-open-sans">
                Houses Cleaned
              </p>
            </div>
            <div className="countUser">
              <h4 className="font-semibold font-quicksand leading-10 text-[40px] text-[#161C2D]">
                23160 +
              </h4>
              <p className="text-[15px] text-[#707070] font-normal font-open-sans">
                Happy Customers
              </p>
            </div>
            <div className="countUser">
              <h4 className="font-semibold font-quicksand leading-10 text-[40px] text-[#161C2D]">
                150 +
              </h4>
              <p className="text-[15px] text-[#707070] font-normal font-open-sans">
                Experienced Cleaners
              </p>
            </div>
            <div className="countUser">
              <h4 className="font-semibold font-quicksand leading-10 text-[40px] text-[#161C2D]">
                20 +
              </h4>
              <p className="text-[15px] text-[#707070] font-normal font-open-sans">
                Years of Exeperience
              </p>
            </div>
          </div>
        </div>
        {/* ======Counter End */}
      </Container>
    </section>
  );
};

export default Companies;
