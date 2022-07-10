import "./sideView.css";
import EditSharp from "@mui/icons-material/EditSharp";

const sideViewDiv = ({ sideViewEntry,editHandler}) => {


  let date = sideViewEntry.date.slice(8, 10);
  let month = Number(sideViewEntry.date.slice(5, 7));
  let year = sideViewEntry.date.slice(0, 4);
  let time = sideViewEntry.date.slice(11, 16);


  const Months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];




  return (
    <div className="sideview-box">
      <div className="top">
        <div>{date} {Months[month-1]} {year} {time}</div>
        <div className="filler"></div>
      </div>
        <div className="title">{sideViewEntry.title}</div>

      <div className="filler"></div>
      <div>{sideViewEntry.entry}</div>
      <div className="edit-icon">


      </div>
    </div>
  );
};

export default sideViewDiv;
