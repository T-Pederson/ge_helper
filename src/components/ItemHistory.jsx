import getData from "./getItemData";

export default function ItemHistory({setData, emptyData, itemHistory, setItemHistory}) {
  let listItems;
  if (itemHistory !== null) {
    listItems = itemHistory.map(item => 
      <li key={item.name} className="grid grid-cols-[1fr_auto]">
        <a onClick={(e) => handleItemClick(e)}>{item.name}</a>
        <span className="material-symbols-outlined self-center p-1.5 hover:bg-red-500" onClick={(e) => deleteItem(e)}>delete</span>
      </li>
    );
  }

  function handleItemClick(e) {
    const clicked = e.target.innerText;
    setData(emptyData);
    getData(clicked).then((result) => setData(result));
  }

  function clearItemHistory() {
    localStorage.removeItem("itemHistory");
    setItemHistory(null);
  }

  function deleteItem(e) {
    const itemName = e.target.previousElementSibling.innerText;
    let items = JSON.parse(localStorage.getItem("itemHistory"));
    for (let i in items) {
      if (itemName === items[i].name) {
        items.splice(i, 1);
        if (items.length === 0) {
          setItemHistory(null);
          localStorage.removeItem("itemHistory");
        } else {
          setItemHistory(items);
          localStorage.setItem("itemHistory", JSON.stringify(items));
        }
        return;
      }
    }
  }

  return (
    <div className="menu bg-base-200 w-56 rounded-box">
    <h1 className="text-center text-xl font-semibold">Item History</h1>
    <div className="menu">
      {listItems}
      <button className="btn btn-ghost mt-2 bg-black hover:bg-red-500 hover:text-black hover:font-bold" onClick={()=>document.getElementById('my_modal_1').showModal()}>Clear History</button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Warning!</h3>
          <p className="py-4">Are you sure you want to clear your item history? This process cannot be undone.</p>
          <div className="modal-action justify-center">
            <form method="dialog" className="flex gap-12">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn bg-red-500 text-black hover:bg-red-600 hover:text-black" onClick={clearItemHistory}>Delete History</button>
              <button className="btn btn-ghost bg-black">Cancel</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
    </div>
  );
}
