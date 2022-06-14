import { useState } from "react";
import "./entry.css";
import { updateFav, deleteEntry } from "../utils/services";

import ShareIcon from "@mui/icons-material/Share";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";

import Backdrop from "@mui/material/Backdrop";

const Entry = ({
  entry,
  entries,
  setEntries,
  setSideView,
  setSideViewEntry,
  setSideViewFav,
  sideViewFavEntry,
  setSideViewFavEntry,
}) => {
  // const [open, setOpen] = useState(false);

  let id = entry._id;
  let date = entry.date.slice(8, 10);
  let month = Number(entry.date.slice(5, 7));
  let year = entry.date.slice(0, 4);
  let time = entry.date.slice(11, 16);
  let hour = Number(time.slice(0, 2));

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

  function updateEntries(promise) {
    promise
      .then((data) => {
        setEntries(data);
        let favEntries=data.filter((entry) => entry.favourite === true);
        if( favEntries.includes(sideViewFavEntry)===false) {
          if(sideViewFavEntry===entry||favEntries.length===0) {
          setSideViewFav(false);
        }
  }})
      .catch((err) => {
        console.log("Update or delete error", err);
      });
  }
  // const handleClose = () => {
  //   setOpen(false);
  // };
  // const handleToggle = () => {
  //   setOpen(!open);
  // };

  function sideViewHandler(e) {
    e.preventDefault();

    if (typeof setSideViewFav === "function") {
      setSideViewFav(true);
      setSideViewFavEntry(entry);
    } else {
      setSideView(true);
      setSideViewEntry(entry);
    }
  }

  return (
    <div className="entry-box">
      <div>
        <div className="title-time-box" onClick={sideViewHandler}>
          <div>{entry.title}</div>
          <div>
            {date} {Months[month - 1]}
          </div>
        </div>
        <div className="entry-body">{entry.entry.substring(0, 35)} </div>
      </div>

      {/* <div>
        <Backdrop
          sx={{ bgcolor:'black',padding:50,color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          children={date + " " + Months[month - 1] + " " + year+" "+entry.entry}
          transitionDuration={500}
          open={open}
          onClick={handleClose}

        >
          <FullEntry entry={entry}/>
        </Backdrop>
      </div> */}

      <div className="icons-outerbox">
        <div className="icons-box">
          {!entry.favourite && (
            <div>
              <FavoriteBorderSharpIcon
                onClick={(e) => {
                  updateEntries(updateFav(id));
                }}
                cursor="pointer"
              />
            </div>
          )}
          {entry.favourite && (
            <div>
              <FavoriteSharpIcon
                onClick={(e) => {
                  updateEntries(updateFav(id));
                }}
                cursor="pointer"
              />
            </div>
          )}
          <div>
            <DeleteIcon
              onClick={(e) => {
                updateEntries(deleteEntry(id));
              }}
              cursor="pointer"
            />
          </div>
          <div>{/* <ShareIcon /> */}</div>
        </div>
      </div>
    </div>
  );
};

export default Entry;
