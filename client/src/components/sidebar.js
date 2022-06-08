import "./sidebar.css";
import SidebarButton from './sidebar_button';

const Sidebar = () => {

  return (
    <div className="sidebar">
      <div className="side-button-box">

      <SidebarButton name="New Entry" />
      <SidebarButton name="Calender" />
      <SidebarButton name="Favourites" />
      <SidebarButton name="Images" />
      </div>
    </div>
  );
};

export default Sidebar;
