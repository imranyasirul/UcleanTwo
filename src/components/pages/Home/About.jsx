import BtnCom from "../../../components/common/BtnCom";
import aboutPic1 from "../../../assets/aboutpic1.png";
import aboutPic2 from "../../../assets/aboutpic2.png";
import aboutStar from "../../../assets/Star.png";
import SubHeading from "../../common/SubHeading";
import HeadingTwo from "../../common/HeadingTwo";
import Container from "../../ui/Container";
import ComDes from "../../common/ComDes";
import Image from "../../ui/Image";

const About = () => {
  return (
     <section className="py-25 bg-[#0A3F87] ">
        <Container>
          <div className="aboutWrap flex justify-between">
            <div className="aboutHeading mt-28.5">
              <h4 className=" py-1 px-4 rounded-[30px] w-fit text-[12px] font-semibold font-open-sans space-[1px] text-white bg-white/15">
                About Uclean
              </h4>
              <h2 className="mt-4.5 mb-8 text-[48px] font-semibold font-quicksand text-white tracking-[-1.2px] leading-[57.6px] max-w-133">
                Bringing Clean, Comfort, and Care Together
              </h2>
              <ComDes
                className="max-w-xl text-white/75"
                text="We are a team of passionate cleaning experts who take pride in delivering the
                    highest standard of service. With years of experience in the industry, we’ve
                    perfected our cleaning methods to ensure every job is done right."
              />
              <div className="aboutBtn">
                <BtnCom
                  className=" text-[#212529] bg-[#FEE74A]"
                  text="Book Service Now"
                />
              </div>
            </div>
            <div className="aboutPhotoWrap flex">
              <div className="aboutPhoto">
                <Image source={aboutPic1} />
              </div>
              <div className="aboutPhoto">
                <Image source={aboutPic2} />
              </div>
            </div>
          </div>

          {/* =======Service Start======= */}
          <div className="serviceHeading text-center flex justify-center mt-20 flex-col items-center pb-25">
            <SubHeading text="Our Services" />
            <HeadingTwo className="mt-3.5 mb-8" text="Our Cleaning Services" />
            <ComDes
              className=" text-white/75 max-w-148"
              text="Whether it's a quick refresh or a deep clean transformation, our expert touch
                    leaves your home or office shining."
            />
          </div>
          {/* =======Service End======= */}
        </Container>
        <div className="aboutStarphoto relative">
          <Image
            className=" relative bottom-0 left-120"
            source={aboutStar}
          />
        </div>
      </section>
  )
}

export default About