import Container from "../ui/Container";
import logo from "../../assets/mainLogo.png";
import Image from "../ui/Image";
import Anchor from "../ui/Anchor";
import listdata from "../../dataList/ListData";
import Button from "../ui/Button";
import { IoCall } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
const Navbar = () => {
  return (
    <nav className="py-7.5">
      <Container>
        <div className="navWrap flex items-center justify-between">
          <div className="navImg">
            <Image source={logo} alt="Not Found" />
          </div>
          <div className="navlist">
            <ul className="flex gap-5.5">
              {listdata.map((item) => (
                <li key={item.id}>
                  <div className="navListI flex items-center gap-2">
                    <Anchor
                      className="text-[#161C2D] font-semibold leading-7 text-3.5 font-open-sans"
                      href={item.href}
                    >
                      {item.label}
                    </Anchor>
                    <MdKeyboardArrowDown />
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="navBtn flex items-center gap-11.25">
            <div className="help flex flex-col">
              <Anchor
                href="#"
                className="text-3 font-medium leading-5 text-[#707070] font-quicksand"
              >
                Need Help?
              </Anchor>
              <div className="call flex mt-2 items-center gap-3">
                <IoCall className="text-blue-500 text-3.5" />
                <Anchor
                  href="+1 5000 6000"
                  className="text-4.5 font-semibold text-[#161C2D] leading-7 font-open-sans "
                >
                  +1 5000 6000
                </Anchor>
              </div>
            </div>
            <Button
              className="text-white font-quicksand cursor-pointer font-bold text-3.75 leading-7.5 py-2 px-6 bg-[#48B1FB] rounded-[30px]"
              text="Book Service Now"
            />
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
