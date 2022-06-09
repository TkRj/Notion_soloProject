import './sidebar_button.css'

const SidebarButton = ({name,onClick}) => {

  return (
    <button className='sideButton' onClick={onClick} >{name}</button>
  );
}

export default SidebarButton;