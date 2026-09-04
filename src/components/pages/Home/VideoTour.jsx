import videoPic from "../../../assets/videoPic.png";
import BtnCom from "../../common/BtnCom";
import ComDes from "../../common/ComDes";
import HeadingTwo from "../../common/HeadingTwo";
import SubHeading from "../../common/SubHeading";
import Image from "../../ui/Image";

const VideoTour = () => {
  return (
    <section>
      <div className="videoWrap">
        <div className="video flex">
          <div className="w-1/2 mx-auto">
            <Image className="w-full mx-auto" source={videoPic} />
          </div>
          <div className="w-1/2 mx-auto bg-[#48B1FB] pl-15 pt-23">
            <div className="">
              <SubHeading text="Video Tour" />
              <HeadingTwo
                className="max-w-127.5 pt-3.5 pb-8.5"
                text="Shine Brighter with Our
Expert Touch"
              />
              <ComDes
                className="text-white/75 max-w-146.25 pb-13.25"
                text="We are a team of passionate cleaning experts who take pride in delivering the
highest standard of service. With years of experience in the industry, we’ve
perfected our cleaning methods to ensure every job is done right."
              />
              <div className="pb-27.5">
                <BtnCom className="text-white" text="Book Service Now" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTour;
