export default function ItemData({data}) {

  function toggleInfo(e) {
    if (e.target.id === "moreInfoBtn") {
      document.getElementById("moreInfoBtn").className = "hidden";
      document.getElementById("lessInfoBtn").className = "btn btn-ghost max-w-fit justify-self-center mt-2 col-span-4";
      document.getElementById("examineTitle").className = "text-right mr-4";
      document.getElementById("examineText").className = "col-span-3";
      document.getElementById("membersTitle").className = "text-right mr-4";
      document.getElementById("membersText").className = "col-span-3";
    } else {
      document.getElementById("moreInfoBtn").className = "btn btn-ghost max-w-fit justify-self-center mt-2 col-span-4";
      document.getElementById("lessInfoBtn").className = "hidden";
      document.getElementById("examineTitle").className = "hidden";
      document.getElementById("examineText").className = "hidden";
      document.getElementById("membersTitle").className = "hidden";
      document.getElementById("membersText").className = "hidden";
    }
  }

  return (
    <div className="bg-base-200 rounded-box px-8 py-4">
      <div className="flex gap-4">
        <img className="w-12" src="https://oldschool.runescape.wiki/images/thumb/Shark_detail.png/1280px-Shark_detail.png?bd940" />
        <div className="px-4 sm:px-0">
          <h3 className="font-semibold leading-7 text-2xl">Shark</h3>
          <p className="mt-1 max-w-2xl text-sm leading-6">Item ID: 385</p>
        </div>
      </div>
      <div className="grid grid-cols-[1.5fr_2fr] mt-6 pt-6 border-t border-gray-100">
        <div className="grid grid-cols-4 gap-2 auto-rows-min">
          <p className="text-right mr-4">Buy Price:</p>
          <p>439gp</p>
          <p className="text-right mr-4">Buy Limit:</p>
          <p>10,000</p>
          <p className="text-right mr-4">Sell Price:</p>
          <p>428gp</p>
          <p className="text-right mr-4">Daily Volume:</p>
          <p>17,444,776</p>
          <p className="text-right mr-4">Margin:</p>
          <p className="text-lime-500">11gp</p>
          <p className="text-right mr-4">High Alch:</p>
          <p>102gp (<span className="text-red-500">-326gp</span>)</p>
          <p className="text-right mr-4">ROI:</p>
          <p className="text-red-500">2.57%</p>
          <p className="text-right mr-4">Low Alch:</p>
          <p>68gp (<span className="text-red-500">-360gp</span>)</p>
          <p id="examineTitle" className="text-right mr-4 hidden">Examine Text:</p>
          <p id="examineText" className="col-span-3 hidden">I&apos;d better be careful eating this.</p>
          <p id="membersTitle" className="text-right mr-4 hidden">Members:</p>
          <p id="membersText" className="col-span-3 hidden">Yes</p>
          <button id="moreInfoBtn" className="btn btn-ghost max-w-fit justify-self-center mt-2 col-span-4" onClick={toggleInfo}>More Info</button>
          <button id="lessInfoBtn" className="hidden" onClick={toggleInfo}>Less Info</button>
        </div>
        <div className="text-black bg-gray-100 text-lg font-bold text-center mx-8 mb-8 h-80">Some chart in the future</div>
      </div>
    </div>
  )
}
