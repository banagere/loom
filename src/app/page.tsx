import Link from "next/link";

export default function Home() {
  const card =
    "relative flex flex-col justify-between overflow-hidden duration-500 h-32 rounded-xl w-[400px] border-neutral-300 border shadow-md hover:shadow-lg hover:border-neutral-400";
  const title = "text-3xl font-bold h-full flex items-end p-5";
  const numberStyle =
    "absolute top-4 left-3 text-neutral-400 text-5xl font-bold opacity-20 uppercase";
  // const timeStyle =
  //   "flex items-center text-gray-300 text-sm font-medium bg-white/10 mt-8 px-3 py-1 rounded-full";

  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col px-10 basis-11/12 max-w-5xl mx-auto">
          <div className="flex items-center flex-col max-w-xl mx-auto">
            <h1 className="font-bold text-2xl text-neutral-700 bg-neutral-200 font-mono my-5 px-2">
              finance + math + code
            </h1>
            {/* <p className="text-white px-5 py-2 font-medium text-center text-lg">
              Transform raw market data into actionable insights. By applying
              advanced modeling techniques in Python and Excel, it offers a
              comprehensive exploration of forecasting, valuation, and risk
              analysis methods across multiple asset classes.
            </p> */}
          </div>
          <div className="grid md:grid-cols-2 gap-8 my-5 grid-cols-1">
            <Link href={"/"} className={card}>
              <p className={numberStyle}>Upside Potential</p>
              <h3 className={title}>Equity</h3>
              {/* <p className="text-sm">Equity</p> */}
              {/* <p className="">2 minutes</p> */}
            </Link>

            <Link href={"/fixed-income"} className={card}>
              <span className={numberStyle}>Downside Protection</span>
              <h3 className={title}>Fixed Income</h3>
              {/* <p className="mt-2 text-sm text-gray-400">fixed-income</p>
              <div className={timeStyle}>
                <span>1 minute</span>
              </div> */}
            </Link>

            <Link href={"/"} className={card}>
              <span className={numberStyle}>Probability</span>
              <h3 className={title}>Derivatives</h3>
              {/* <p className="mt-2 text-sm text-gray-400">derivatives</p>
              <div className={timeStyle}>
                <span>3 minutes</span>
              </div> */}
            </Link>

            <Link href={"/"} className={card}>
              <span className={numberStyle}>Mathematics</span>
              <h3 className={title}>Portfolio Management</h3>
              {/* <p className="mt-2 text-sm text-gray-400">portfolio management</p>
              <div className={timeStyle}>
                <span>2 minutes</span>
              </div> */}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
