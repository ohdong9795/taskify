import { CiMail } from 'react-icons/ci';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className=" bg-black flex justify-between items-center  w-full h-[100px] text-gray_9FA6B2 px-[141px]">
      <div>©codeit - 2023</div>
      <div className="flex gap-[32px]">
        <div>Privacy Policy</div>
        <div>FAQ</div>
      </div>
      <div className="flex gap-[14px] text-white">
        <CiMail className="w-[20px] h-[20px]" />
        <FaFacebookSquare className="w-[20px] h-[20px]" />
        <FaInstagram className="w-[20px] h-[20px]" />
      </div>
    </div>
  );
}
