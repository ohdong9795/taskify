import SideBarList from './SideBarList';
import Image from 'next/image';
import Logo from '../../public/sideMenuLogo.svg';

function SideMenu() {
  return (
    <div className="fixed top-0 bottom-0 w-72 flex flex-col bg-slate-400">
      <div className="p-4 mt-5 ml-6">
        <Image src={Logo} alt="로고" />
      </div>
      <SideBarList></SideBarList>
    </div>
  );
}

export default SideMenu;
