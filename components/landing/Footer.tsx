import { CiMail } from 'react-icons/ci';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className=" bg-black flex flex-col lg:flex-row lg:justify-between items-center  w-full h-[300px] md:h-[100px]  text-gray_9FA6B2 px-[141px]">
      <div className="pb-[12px] md:pb-0">©codeit - 2023</div>
      <div className="flex gap-[32px] pb-[70px] md:pb-0">
        <div>Privacy Policy</div>
        <div>FAQ</div>
      </div>
      <div className="flex gap-[20px] md:gap-[14px] text-white">
        <CiMail className="w-[20px] h-[20px]" />
        <FaFacebookSquare className="w-[20px] h-[20px]" />
        <FaInstagram className="w-[20px] h-[20px]" />
      </div>
    </div>
  );
}