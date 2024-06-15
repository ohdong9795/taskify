import LogoImage from '@/public/images/LogoImage.svg';
import Taskify from '@/public/images/Taskify.svg';
import SideBarList from './SideBarList';

function SideBar() {
  return (
    <div className="flex flex-col h-auto w-[67px] t:w-[160px] p:w-[300px] border-r-[1px] border-gray-D9D9D9 overscroll-y-none">
      <div className="mt-5 ml-6 flex items-center">
        <LogoImage className="w-[29px] h-[33px] text-violet_5534DA " />
        <Taskify className="w-[80px] h-[22px] text-violet_5534DA hidden t:block" />
      </div>
      <SideBarList />
    </div>
  );
}

export default SideBar;
