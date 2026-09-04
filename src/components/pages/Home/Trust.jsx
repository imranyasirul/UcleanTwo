import Container from "../../ui/Container";
import TrustPic1 from "../../../assets/TrustPic1.png";
import TrustPic2 from "../../../assets/TrustPic2.png";
import { FaStar } from "react-icons/fa";
import Image from "../../ui/Image";
import HeadingClone from "../../common/HeadingClone";
import SubHeading from "../../common/SubHeading";
import HeadingTwo from "../../common/HeadingTwo";
import ListItemData from "../../../dataList/ListItemData";
import ListCom from "../../common/ListCom";
import TrustPic from "../../../assets/trustPic.png";
const Trust = () => {
  return (
    <>
      <Container>
        <div className="trustHeadingWrap bg-white flex items-center gap-52 px-15.5 py-55 justify-between">
          <div className="trustReviewWrap flex gap-13">
            <div className="trustReviews flex flex-col items-center">
              <h4 className="text-[22px] font-quicksand font-semibold text-[#161C2D]">
                Excellent
              </h4>
              <div className="star flex text-amber-500 text-[18px] py-2.5">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p>Based on 185 reviews</p>
              <div className="trustPic">
                <Image className="w-25 pt-2.5" source={TrustPic1} />
              </div>
            </div>
            <div className="trustReviews flex flex-col items-center">
              <h4 className="text-[22px] font-quicksand font-semibold text-[#161C2D]">
                4.8 out of 5
              </h4>
              <div className="star flex text-amber-500 text-[18px] py-2.5">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p>Based on 200 reviews</p>
              <div className="trustPic">
                <Image className="w-25 pt-3" source={TrustPic2} />
              </div>
            </div>
          </div>
          <div className="trustHeading">
            <HeadingClone
              className="text-black max-w-128.25"
              text="We Are a Trusted
                    Cleaning Company"
            />
          </div>
        </div>
      </Container>
      <section className="bg-[#0A3F87] pt-25">
        <Container>
          <div className="trustWrap flex justify-between">
            <div className="trustContent pt-11">
              <SubHeading text="Why Choose Us" />
              <HeadingTwo
                text="Top Six Reasons to Trust Us"
                className="mt-4.5 mb-7.5"
              />
              <ul>
                {ListItemData.map((item) => (
                  <li key={item.id}>
                    <div className="flex items-center gap-3">
                      <span className="text-[15px] text-[#FEE74A]">
                        {item.icon}
                      </span>
                      <ListCom className="py-1.5" text={item.label} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="trustImg w-154">
              <Image className="w-154" source={TrustPic} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Trust;
