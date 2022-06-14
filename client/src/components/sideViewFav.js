import './sideViewFav.css'

const sideViewFavDiv = ({ sideViewFavEntry}) => {

  let date = sideViewFavEntry.date.slice(8, 10);
  let month = Number(sideViewFavEntry.date.slice(5, 7));
  let year = sideViewFavEntry.date.slice(0, 4);
  let time = sideViewFavEntry.date.slice(11, 16);


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
        <div>{date} {Months[month-1]} {year}</div>
        <div className="filler"></div>
      </div>
        <div className="title">{sideViewFavEntry.title}</div>

      <div className="filler"></div>
      <div>{sideViewFavEntry.entry}</div>

    </div>
  );
};

export default sideViewFavDiv;