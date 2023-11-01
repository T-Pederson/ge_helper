import getData from "./getItemData";

export default function ItemHistory({setData, emptyData}) {
  let listItems;

  if (localStorage.getItem("itemHistory") !== null) {
    listItems = JSON.parse(localStorage.getItem("itemHistory")).map(item => 
      <li key={item.name} className="grid grid-cols-[1fr_auto]">
        <a onClick={(e) => handleItemClick(e)}>{item.name}</a>
        <span className="material-symbols-outlined self-center p-1.5 hover:bg-red-500">delete</span>
      </li>
    );
  }

  function handleItemClick(e) {
    const clicked = e.target.innerText;
    setData(emptyData);
    getData(clicked).then((result) => setData(result));
  }

  return (
    <div className="menu bg-base-200 w-56 rounded-box">
    <h1 className="text-center text-xl font-semibold">Item History</h1>
    <div className="menu">
      {listItems}
      <button className="btn btn-ghost mt-2 bg-black hover:bg-red-500 hover:text-black hover:font-bold">Clear History</button>
    </div>
    </div>
  );
}
