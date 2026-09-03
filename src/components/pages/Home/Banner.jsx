import Des from "../../ui/Des";
import BannerImg from "../../../assets/bannerImg.png";
import buyLink from "../../../assets/buyLink.png";
import Anchor from "../../ui/Anchor"
import Button from "../../ui/Button";
import Container from "../../ui/Container";
import Image from "../../ui/Image";

const Banner = () => {
  return (
    <section className="pt-6 bg-linear-to-tr from-blue-300 via-sky-100 to-sky-50 ">
      <Container>
        <div className="bannerHeader text-center">
          <div className="bannerHead flex flex-col items-center">
            <h4 className=" py-1 px-4 rounded-[30px] w-fit text-[12px] font-semibold font-open-sans space-[1px] text-[#48B1FB] bg-[#48B1FB]/10">
              Reliable Clean
            </h4>
            <h1 className="text-[96px] text-[#161C2D] my-5 font-semibold font-quicksand leading-27.5 tracking-[-4.8px]">
              Sparkling Spaces
            </h1>
            <Des
              className="text-[#707070] text-4.25 font-normal font-open-sans leading-8 tracking-[-0.2px] mx-100.5"
              text="Enjoy a spotless space with our expert cleaning team. Affordable,
                    eco-friendly, and tailored to your needs!"
            />
            <Anchor href="invato">
              <Image
                source={buyLink}
                className="inline-block right-250 top-100 relative"
              />
            </Anchor>
            <Button
              text="Book Cleaning Service"
              className="text-white font-quicksand cursor-pointer font-bold text-3.75 leading-7.5 mt-8.75 mb-14.25 py-2 px-6 bg-[#48B1FB] rounded-[30px]"
            />
            <div className="bannerImg flex justify-center ">
              <Image source={BannerImg} alt="not found" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
