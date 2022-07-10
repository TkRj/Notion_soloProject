import { useState } from "react";
import "./entry.css";
import { updateFav, deleteEntry } from "../utils/services";

import ShareIcon from "@mui/icons-material/Share";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import EditSharpIcon from "@mui/icons-material/EditSharp";

const Entry = ({
  entry,
  entries,
  setEntries,
  setSideView,
  sideViewEntry,
  setSideViewEntry,
  setSideViewFav,
  sideViewFavEntry,
  setSideViewFavEntry,
  editView,
  setEditView,
  setEditViewEntry
}) => {
  let id = entry._id;
  let date = entry.date.slice(8, 10);
  let month = Number(entry.date.slice(5, 7));
  let year = entry.date.slice(2, 4);
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
        let favEntries = data.filter((entry) => entry.favourite === true);
        if (favEntries.includes(sideViewFavEntry) === false) {
          if (sideViewFavEntry === entry || favEntries.length === 0) {
            setSideViewFav(false);
          }
        }
        if (data.includes(sideViewEntry) === false) {
          if (sideViewEntry === entry || data.length === 0) {
            setSideView(false);
          }
        }
      })
      .catch((err) => {
        console.log("Update or delete error", err);
      });
  }

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
  function editHandler(e) {
    e.preventDefault();
    const id = entry._id;
    console.log('entry',entry)
    if(typeof setSideView==='function'){setSideView(false)}
    else setSideViewFav(false)
    setEditView(true);
    setEditViewEntry(entry);
    // if (typeof setSideViewEntry === "function") {
    //   setSideViewEntry(entry);

    // } else {
    //   setSideViewFavEntry(entry);
    // }


  }

  return (
    <div className="entry-box">
      <div>
        <div className="title-time-box" onClick={sideViewHandler}>
          <div>{entry.title}</div>
          <div>
            {date} {Months[month - 1]} {year}
          </div>
        </div>
        <div className="entry-body">{entry.entry.substring(0, 35)} </div>
      </div>

      <div className="icons-outerbox">
        <div className="icons-box">
          {/* <EditSharpIcon cursor="pointer" onClick={editHandler} /> */}
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
                // eslint-disable-next-line no-restricted-globals
                let res = confirm("Are you sure you want to delete this?");
                if (res) updateEntries(deleteEntry(id));
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
