import serviceData from "../dataList/ServiceData";
import Image from "../components/ui/Image";
import ComDes from "../components/common/ComDes";
import Container from "../components/ui/Container";

const Service = () => {
  return (
    <section className=" relative top-30">
      <Container>
        <div className="serviceWrap flex flex-wrap ">
          {serviceData.map((item) => (
            <div key={item.id} className="w-102.5">
              <Image source={item.img} alt={item.title} />
              <h3 className=" my-3 text-5 font-semibold font-quicksand text-[#161C2D]">
                {item.title}
              </h3>
              <ComDes className=" text-[#707070]" text={item.description} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Service;
