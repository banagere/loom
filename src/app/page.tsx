import Link from "next/link";

export default function Home() {
  // const card = "w-50 m-5 text-center rounded-md h-80 flex justify-center align-bottom bg-white/20";
  const card =
    "relative text-white px-5 hover:shadow-lg flex flex-col justify-between overflow-hidden hover:bg-white/10 rounded-xl duration-500";
  const numberStyle =
    "absolute top-0 left-0 text-gray-600 text-[140px] font-bold opacity-10";
  const timeStyle =
    "flex items-center text-gray-300 text-sm font-medium bg-white/10 mt-8 px-3 py-1 rounded-full";

  return (
    <>
      {/* <div className="grid grid-cols-2">
        <div className={`${card} `}>Equity</div>
        <div className={`${card} `}>Fixed Income</div>
        <div className={`${card} `}>Derivatives</div>
        <div className={`${card} `}>Portfolio Management</div>
      </div> */}
      <div className="flex flex-col justify-end min-h-screen px-4 py-20 bg-stone-800">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <Link href={"/"} className={card}>
            <span className={numberStyle}>01</span>
            <h3 className="text-xl font-bold">upside potential</h3>
            <p className="mt-2 text-sm text-gray-400">
              Equity
            </p>
            <p className={timeStyle}>2 minutes</p>
          </Link>

          <div className={card}>
            <span className={numberStyle}>02</span>
            <h3 className="text-xl font-bold">downside protection</h3>
            <p className="mt-2 text-sm text-gray-400">
              fixed-income
            </p>
            <div className={timeStyle}>
              <span>1 minute</span>
            </div>
          </div>

          <div className={card}>
            <span className={numberStyle}>03</span>
            <h3 className="text-xl font-bold">probabilities</h3>
            <p className="mt-2 text-sm text-gray-400">
              derivatives
            </p>
            <div className={timeStyle}>
              <span>3 minutes</span>
            </div>
          </div>

          <div className={card}>
            <span className={numberStyle}>04</span>
            <h3 className="text-xl font-bold">mathematics</h3>
            <p className="mt-2 text-sm text-gray-400">
              portfolio management
            </p>
            <div className={timeStyle}>
              <span>2 minutes</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
