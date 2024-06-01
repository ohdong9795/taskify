import Image from 'next/image';
import SideBarList from './SideBarList';
import Logo from '../../public/images/sideMenuLogo.svg';

function SideMenu() {
  return (
    <div className="fixed top-0 bottom-0 w-72 flex flex-col bg-slate-400">
      <div className="p-4 mt-5 ml-6">
        <Image src={Logo} alt="로고" />
      </div>
      <SideBarList />
    </div>
  );
}

export default SideMenu;
