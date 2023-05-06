"use client";

const Loader = () => {
  return (
    <div>
      <h1 className='sr-only'>Loading</h1>

      {/* SecondaryNav Loading */}
      <div className="flex justify-between items-center border-b border-b-gray px-6 py-3">
        {[1, 2, 3].map(items => (
          <div key={items} className="px-8 py-4 bg-slate-500 rounded-md animate-pulse"></div>
        ))}
      </div>

      {/* Picture Loading */}
      <div className="flex justify-center items-center px-6 py-20">
        <div className="w-36 aspect-square rounded-full bg-slate-500 animate-pulse"></div>
      </div>

      {/* Description Loading */}
      <div className="flex flex-col items-center px-6 gap-6">
        <div className="px-28 py-6 bg-slate-500 rounded-md animate-pulse"></div>
        <div className="flex flex-col gap-2 items-center">
          <div className="px-44 py-3 bg-slate-500 rounded-md animate-pulse"></div>
          <div className="px-40 py-3 bg-slate-500 rounded-md animate-pulse"></div>
          <div className="px-36 py-3 bg-slate-500 rounded-md animate-pulse"></div>
        </div>
      </div>

      <div className="flex flex-col gap-4 px-6 mt-9">
        {[1, 2, 3, 4].map(item => (
          <div key={item} className="px-40 py-5 bg-slate-500 animate-pulse rounded-md"></div>
        ))}
      </div>
    </div>
  )
}

export default Loader