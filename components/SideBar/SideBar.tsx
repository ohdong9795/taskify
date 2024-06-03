import Image from 'next/image';
import SideBarList from './SideBarList';
import Logo from '../../public/images/sideMenuLogo.svg';

function SideMenu() {
  return (
    <div className="flex flex-col h-screen w-[300px] border-r-[1px] border-gray-D9D9D9">
      <div className="mt-5 ml-6">
        <Image src={Logo} alt="로고" />
      </div>
      <SideBarList />
    </div>
  );
}

export default SideMenu;
