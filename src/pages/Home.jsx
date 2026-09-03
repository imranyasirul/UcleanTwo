import Container from "../components/ui/Container";
import Des from "../components/ui/Des";
import Button from "../components/ui/Button";
import Image from "../components/ui/Image";
import BannerImg from "../assets/bannerImg.png";
import buyLink from "../assets/buyLink.png";
import Anchor from "../components/ui/Anchor";
import ComDes from "../components/common/ComDes";
import BtnCom from "../components/common/BtnCom";
import aboutPic1 from "../assets/aboutpic1.png";
import aboutPic2 from "../assets/aboutpic2.png";
import aboutStar from "../assets/Star.png";
import SubHeading from "../components/common/SubHeading";
import HeadingTwo from "../components/common/HeadingTwo";
import serviceData from "../dataList/ServiceData";
import CompaniesData from "../dataList/CompaniesData";

const Home = () => {
  return (
    <>
      {/* ======Banner Start===== */}
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

      {/* ======Banner End===== */}

      {/* ======About Uclean Start===== */}
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
            className=" absolute bottom-0 inline-block left-120"
            source={aboutStar}
          />
        </div>
      </section>
      {/* ======About Uclean End===== */}

      {/* ======Services Start===== */}
      <section className=" relative bottom-30">
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
      {/* ======Services End===== */}

      {/* ======Companies Start===== */}
      <section className="py-20 bg-[#F8F9FA]">
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
          <div className="counter py-12 bg-[#FEE74A] px-30 mt-20">
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
      {/* ======Companies End===== */}

      {/* ====== Start===== */}
      {/* ====== End===== */}
    </>
  );
};

export default Home;
