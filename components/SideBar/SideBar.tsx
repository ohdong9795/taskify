import SideBarList from './SideBarList';
import Logo from '../../public/images/sideMenuLogo.svg';

function SideBar() {
  return (
    <div className="flex flex-col h-screen w-[300px] border-r-[1px] border-gray-D9D9D9">
      <div className="mt-5 ml-6">
        <Logo />
      </div>
      <SideBarList />
    </div>
  );
}

export default SideBar;
