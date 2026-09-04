import PriceData from "../../../dataList/PriceData";
import ComDes from "../../common/ComDes";
import HeadingTwo from "../../common/HeadingTwo";
import SubHeading from "../../common/SubHeading";
import Button from "../../ui/Button";
import Container from "../../ui/Container";

const Pricing = () => {
  return (
    <section className="bg-[#0A3F87] pt-25">
      <Container>
        <div className="priceHeading flex flex-col items-center">
          <SubHeading text="Complate Solutions" />
          <HeadingTwo className="pt-3.5 pb-8.5" text="Pricing Plans" />
          <ComDes
            className="text-white/75 pb-38.75 max-w-153 text-center"
            text="Choose from flexible, affordable cleaning plans designed to fit your needs, from
one-time deep cleans to regular maintenance services."
          />
        </div>
        <div className="priceWrap flex justify-between relative top-45">
          {PriceData.map((item) => (
            <div
              key={item.id}
              className="price bg-[#F8F9FA] rounded-[10px] pt-7 pr-20 pb-8 pl-32"
            >
              <h4 className="text-[#161C2D] text-[16px] font-semibold font-quicksand">
                {item.heading}
              </h4>
              <div className="flex">
                <span className="text-[#707070] text-[16px] font-open-sans font-normal mt-14">
                  {item.Icon}
                </span>
                <h3 className="text-[64px] text-[#212529] font-bold font-open-sans">
                  {item.price}
                </h3>
                <p className="text-[#707070] ml-1 text-[16px] font-open-sans font-normal mt-14">
                  {item.label}
                </p>
              </div>
              <Button className="text-white" text={item.click} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Pricing;
