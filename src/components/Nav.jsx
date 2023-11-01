import { useState, useEffect } from "react";
import getData from "./getItemData";
import logo from "../assets/logo.png";

export default function Navbar({setData, emptyData}) {

  const [time, setTime] = useState(getTime())

  function getTime() {
    let today = new Date();
    let hours = 12;
    if (today.getHours() !== 0) {
      hours = today.getHours() % 12;
    }
    let minutes = today.getMinutes();
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (today.getHours() > 11) {
      return hours + ":" + minutes + " PM";
    } else {
      return hours + ":" + minutes + " AM";
    }
  }

  function handleItemSearch(e) {
    setData(emptyData);
    getData(e.target.value).then((result) => {
      setData(result)
      if (result["name"] === "Item not found") return;
      let itemHistory = JSON.parse(localStorage.getItem("itemHistory"));
      if (itemHistory === null) {
        localStorage.setItem("itemHistory", JSON.stringify([{name: result["name"]}]));
      } else {
        let itemInHistory = false
        for (const item of itemHistory) {
          if (item.name === result["name"]) {
            itemInHistory = true;
          }
        }
        if (!itemInHistory) {
          if (itemHistory.length === 10) {
            itemHistory.pop();
          }
          itemHistory.unshift({name: result["name"]});
          localStorage.setItem("itemHistory", JSON.stringify(itemHistory));
        }
      }
    });
  }

  useEffect(() => {
    const interval = setInterval(() => setTime(getTime()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1 gap-2">
          <a className="w-56 cursor-pointer">
            <img src={logo}/>
          </a>
          <a className="btn btn-ghost normal-case text-xl">Home</a>
          <a className="btn btn-ghost normal-case text-xl">Favorites</a>
          <a className="btn btn-ghost normal-case text-xl">Top 25</a>
          <div className="form-control">
            <input id="itemSearch" type="text" placeholder="Search" className="input input-bordered w-96 mr-6" autoComplete="off" onKeyDown={(e) => e.keyCode === 13 && handleItemSearch(e)}/>
          </div>
        </div>
        <div className="flex-none gap-2">
          <div className="flex flex-row gap-2 mr-8">
            <span className="material-symbols-outlined self-center">schedule</span>
            <p className="font-semibold text-xl">{time}</p>
          </div>
          <p className="font-semibold text-xl">Welcome, Tyson</p>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost avatar px-2">
              <div className="w-10 !flex justify-around">
                <span className="material-symbols-outlined self-center">account_circle</span>
              </div>
            </label>
            <ul tabIndex={0} className="z-[1] p-2 shadow menu menu-sm dropdown-content bg-black rounded-box w-40">
              <li><a>Profile</a></li>
              <li><a>Favorites</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}