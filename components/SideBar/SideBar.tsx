import LogoImage from '@/public/images/LogoImage.svg';
import Taskify from '@/public/images/Taskify.svg';
import SideBarList from './SideBarList';

function SideBar() {
  return (
    <div className="flex flex-col h-auto t:w-[300px] border-r-[1px] border-gray-D9D9D9 overscroll-y-none">
      <div className="flex items-center mt-5 ml-6">
        <LogoImage className="w-[29px] h-[33px] text-violet_5534DA " />
        <Taskify className="w-[80px] h-[22px] text-violet_5534DA hidden t:block" />
      </div>
      <SideBarList />
    </div>
  );
}

export default SideBar;
