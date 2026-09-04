import Image from "../../ui/Image";
import HeadingClone from "../../common/HeadingClone";
import SubHeadingW from "../../common/SubHeadingW";
import Container from "../../ui/Container";
import CustomerData from "../../../dataList/CustomerData";
import ComDes from "../../common/ComDes";

const Customer = () => {
  return (
    <section className="pt-60">
      <Container>
        <div className="customerHeading pt-15 flex flex-col gap-3 items-center">
          <SubHeadingW text="Testimonials" />
          <HeadingClone text="Our Happy Customers" />
        </div>
      </Container>
      <div className="customerReviewWrap flex justify-between pl-62.75 pt-6 pb-20">
        {CustomerData.map((item) => (
          <div key={item.id} className="customer">
            <div className="customerImg">
              <Image source={item.Img} />
            </div>
            <h4 className="text-[#] text-[16px] font-semibold font-open-sans mt-7">
              {item.name}
            </h4>
            <ComDes
              className="max-w-112.75 text-[#707070] mt-8"
              text={item.label}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Customer;
