import "./sidebar.css";
import SidebarButton from './sidebar_button';

const Sidebar = ({newEntryHandler,calenderHandler}) => {


  return (
    <div className="sidebar">
      <div className="side-button-box">

      <SidebarButton name="New Entry" onClick={newEntryHandler} />
      <SidebarButton name="Calender" onClick={calenderHandler} />
      <SidebarButton name="Favourites" />
      <SidebarButton name="Images" />
      <SidebarButton name="Scheduler" />
      </div>
    </div>
  );
};

export default Sidebar;
