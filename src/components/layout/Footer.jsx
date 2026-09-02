import footerLogo from "../../assets/footerLogo.png";
import Images from "../ui/Image";
import Container from "../ui/Container";
import Des from "../ui/Des";
import { FaFacebookF } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import Anchor from "../ui/Anchor";
import listdata from "../../dataList/ListData";
import FooterData from "../../dataList/FooterData";
import { LuClock } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-[#161C2D] py-25">
      <Container>
        <div className="footerWrap flex justify-between">
          <div className="footerHeading">
            <Images source={footerLogo} alt="not found" />
            <Des
              className="text-4 font-open-sans text-white/75 leading-7 font-normal max-w-94 py-6.5"
              text="We are a team of passionate cleaning experts who
                   take pride in delivering the highest standard of
                   service. With years of experience in the industry,
                   we’ve perfected our cleaning methods to ensure
                   every job is done right."
            />
            <div className="footerI flex gap-8 text-4 text-white/75">
              <Anchor href="facebook">
                <FaFacebookF />
              </Anchor>
              <Anchor href="discord">
                <FaDiscord />
              </Anchor>
              <Anchor href="tiktok">
                <IoLogoTiktok />
              </Anchor>
              <Anchor href="youtube">
                <FaYoutube />
              </Anchor>
            </div>
          </div>
          <div className="footerListWrap flex gap-11">
            <div className="footerCompanies">
              <h4 className="text-white text-4.5 font-semibold font-quicksand mb-5">
                Company
              </h4>
              <ul>
                {listdata.map((item) => (
                  <li key={item.id}>
                    <div className="footerList flex flex-col mt-3">
                      <Anchor className="text-white/75 text-4 font-normal font-open-sans">
                        {item.label}
                      </Anchor>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footerService">
              <h4 className="text-white text-4.5 font-semibold font-quicksand mb-5">
                Our Services
              </h4>
              <ul>
                {FooterData.map((item) => (
                  <li key={item.id} className="mt-3">
                    <Anchor className="text-white/75 text-4 font-normal font-open-sans">
                      {item.label}
                    </Anchor>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="footerInfo flex flex-col gap-12">
            <div className="footerOpenM">
              <div className="footerOpen flex gap-2 items-center">
                <LuClock className="text-[#FEE74A]" />{" "}
                <h6 className="text-white font-bold font-open-sans text-4">
                  We're Open
                </h6>
              </div>
              <p className="text-white/75">Monday - Saturday 08.00 - 18.00</p>
            </div>
            <div className="footerOpenM">
              <div className="footerOpen flex gap-2 items-center">
                <FaLocationDot  className="text-[#FEE74A]" />{" "}
                <h6 className="text-white font-bold font-open-sans text-4">
                  Office Location
                </h6>
              </div>
              <p className="text-white/75">100 S Main St, New York, NY</p>
            </div>
            <div className="footerOpenM">
              <div className="footerOpen flex gap-2 items-center">
                <IoMdMail  className="text-[#FEE74A]" />{" "}
                <h6 className="text-white font-bold font-open-sans text-4">
                  Send a Message
                </h6>
              </div>
              <p className="text-white/75">contact@uclean.com</p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
