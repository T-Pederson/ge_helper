export default function ItemData() {
  return (
    <div className="bg-base-200 rounded-box px-8 py-4">
      <div className="flex gap-4">
        <img className="w-12" src="https://oldschool.runescape.wiki/images/thumb/Shark_detail.png/1280px-Shark_detail.png?bd940" />
        <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-7">Shark</h3>
          <p className="mt-1 max-w-2xl text-sm leading-6">Item ID: 385</p>
      </div>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6">Sell Price</dt>
            <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">424 gp</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6">Buy Price</dt>
            <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">434 gp</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6">Margin</dt>
            <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">2.36%</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6">Buy Limit</dt>
            <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">10,000</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6">Members</dt>
            <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">
              Yes
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
