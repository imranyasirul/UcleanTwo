import BtnCom from "../../common/BtnCom";
import ComDes from "../../common/ComDes";
import HeadingClone from "../../common/HeadingClone";
import SubHeadingW from "../../common/SubHeadingW";
import Container from "../../ui/Container";
import Image from "../../ui/Image";
import joinPic from "../../../assets/joinPic.png";

const Invite = () => {
  return (
    <section className="pt-4">
      <Container>
        <div className="inviteWrap flex justify-between">
          <div className="inviteContent pt-35.75">
            <SubHeadingW text="Join Our Team" />
            <HeadingClone
              className="text-[#161C2D] max-w-124.5 pt-4.5 pb-8"
              text="Join Our Team of
Professionals Cleaners"
            />
            <ComDes
              className="max-w-153.5 text-[#707070]"
              text="Join our team and be part of a dynamic, professional, and supportive
environment! Enjoy flexible schedules, competitive pay, and growth opportunities
while helping create spotless, welcoming spaces for our valued clients."
            />
            <div>
              <BtnCom className="text-white" text="Join Now" />
            </div>
          </div>
          <div className="invitePic">
            <Image source={joinPic} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Invite;
