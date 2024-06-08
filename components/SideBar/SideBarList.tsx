import SideBtn from '../../public/images/sideMenuButton.svg';
import SideBarPagination from './SideBarPagination';
import SideBarItem from './SideBarItem';

function SideBarList() {
  //   const handleClick = () => {
  //     {
  //       // TODO : 모달창 띄워주는 로직 추가}
  //     }

  return (
    <div className="ml-[24px] mt-[40px] w-[250px]">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold">Dashboards</span>
        <button type="button">
          <SideBtn />
          <SideBarItem />
        </button>
      </div>

      <SideBarPagination />
    </div>
  );
}

export default SideBarList;
