const BASE_URL = "http://localhost:3001";


function postEntry(entry) {
  return fetch(`${BASE_URL}/entries`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(entry),
  })
    .then((res) => res.json())
    .catch((error) => console.log(error));
}

function addAccount(user){
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .catch((error) => console.log(error));
}

function getAllEntries() {
  return fetch(`${BASE_URL}/entries`, {
    method: "GET",
  })
    .then((res) => res.json())
    .catch((error) => console.log(error));
}

function updateFav(id) {
  return fetch(`${BASE_URL}/entries/fav/${id}`, {
    method: "PUT",
  })
    .then((res) =>res.json())
    .catch((error) => console.log(error));
}

function deleteEntry(id) {
  return fetch(`${BASE_URL}/entries/fav/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .catch((error) => console.log(error));
}



module.exports = { postEntry, getAllEntries, updateFav, deleteEntry,addAccount };
