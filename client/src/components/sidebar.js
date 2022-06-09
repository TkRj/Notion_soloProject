import "./sidebar.css";
import SidebarButton from './sidebar_button';

const Sidebar = ({newEntryHandler,allEntriesHandler,onSubmitHandler}) => {


  return (
    <div className="sidebar">
      <div className="side-button-box">

      <SidebarButton name="New Entry" onClick={newEntryHandler} />
      <SidebarButton name="All Entries" onClick={allEntriesHandler} />
      <SidebarButton name="Favourites" />
      <SidebarButton name="Images" />
      <SidebarButton name="Scheduler" />
      </div>
    </div>
  );
};

export default Sidebar;
