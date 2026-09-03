import Container from "../../ui/Container";
import TrustPic1 from "../../../assets/TrustPic1.png";
import TrustPic2 from "../../../assets/TrustPic2.png";
import { FaStar } from "react-icons/fa";
import Image from "../../ui/Image";
import HeadingTwo from "../../common/HeadingTwo";
const Trust = () => {
  return (
    <section>
      <Container>
        <div className="trustHeadingWrap flex items-center px-38.5 py-55 justify-between">
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
            <HeadingTwo className="text-black max-w-128.25"
              text="We Are a Trusted
                    Cleaning Company"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Trust;
