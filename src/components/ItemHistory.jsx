export default function ItemHistory() {
  return (
    <div className="menu bg-base-200 w-56 rounded-box">
    <h1 className="text-center text-xl font-semibold">Item History</h1>
    <div className="menu">
      <li className="grid grid-cols-[1fr_auto]">
        <a>Shark</a>
        <span className="material-symbols-outlined self-center p-1.5 hover:bg-red-500">delete</span>
      </li>
      <li className="grid grid-cols-[1fr_auto]">
        <a>Raw shark</a>
        <span className="material-symbols-outlined self-center p-1.5 hover:bg-red-500">delete</span>
      </li>
      <li className="grid grid-cols-[1fr_auto]">
        <a>Rune arrow</a>
        <span className="material-symbols-outlined self-center p-1.5 hover:bg-red-500">delete</span>
      </li>
      <li className="grid grid-cols-[1fr_auto]">
        <a>Rune platebody</a>
        <span className="material-symbols-outlined self-center p-1.5 hover:bg-red-500">delete</span>
      </li>
      <li className="grid grid-cols-[1fr_auto]">
        <a>Gilded scimitar</a>
        <span className="material-symbols-outlined self-center p-1.5 hover:bg-red-500">delete</span>
      </li>
      <li className="grid grid-cols-[1fr_auto]">
        <a>Abyssal whip</a>
        <span className="material-symbols-outlined self-center p-1.5 hover:bg-red-500">delete</span>
      </li>
      <li className="grid grid-cols-[1fr_auto]">
        <a>Coal</a>
        <span className="material-symbols-outlined self-center p-1.5 hover:bg-red-500">delete</span>
      </li>
      <li className="grid grid-cols-[1fr_auto]">
        <a>Fire rune</a>
        <span className="material-symbols-outlined self-center p-1.5 hover:bg-red-500">delete</span>
      </li>
      <li className="grid grid-cols-[1fr_auto]">
        <a>Nature rune</a>
        <span className="material-symbols-outlined self-center p-1.5 hover:bg-red-500">delete</span>
      </li>
      <li className="grid grid-cols-[1fr_auto]">
        <a>Zulrah&apos;s scales</a>
        <span className="material-symbols-outlined self-center p-1.5 hover:bg-red-500">delete</span>
      </li>
      <button className="btn btn-ghost mt-2 bg-black hover:bg-red-500 hover:text-black hover:font-bold">Clear History</button>
    </div>
    </div>
  );
}
