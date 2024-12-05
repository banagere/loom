import Link from "next/link";

export default function Home() {
  const card =
    "relative text-white px-5 flex flex-col justify-between overflow-hidden duration-500 h-72 rounded-2xl";
  const title = "text-2xl font-bold pt-10";
  const numberStyle =
    "absolute top-0 left-0 text-neutral-300 text-8xl font-bold opacity-10 uppercase";
  // const timeStyle =
  //   "flex items-center text-gray-300 text-sm font-medium bg-white/10 mt-8 px-3 py-1 rounded-full";

  return (
    <>
      <div className="bg-stone-900/90 h-screen text-white justify-between flex flex-col">
        <section className="flex gap-3 items-end justify-center my-auto">
          <h1 className="font-medium text-2xl">loom</h1>
          <p>by banagere</p>
        </section>

        <div className="flex flex-col px-10 bg-red-400/50 basis-11/12">
          <div className="grid grid-cols-2 gap-8 my-5">
            <Link href={"/"} className={card}>
              <p className={numberStyle}>Equity</p>
              <h3 className={title}>Upside Potential</h3>
              {/* <p className="mt-2 text-sm text-gray-400">Equity</p> */}
              {/* <p className="">2 minutes</p> */}
            </Link>

            <Link href={"/"} className={card}>
              <span className={numberStyle}>Fixed Income</span>
              <h3 className={title}>Downside Protection</h3>
              {/* <p className="mt-2 text-sm text-gray-400">fixed-income</p>
              <div className={timeStyle}>
                <span>1 minute</span>
              </div> */}
            </Link>

            <Link href={"/"} className={card}>
              <span className={numberStyle}>Derivatives</span>
              <h3 className={title}>Probabilities</h3>
              {/* <p className="mt-2 text-sm text-gray-400">derivatives</p>
              <div className={timeStyle}>
                <span>3 minutes</span>
              </div> */}
            </Link>

            <Link href={"/"} className={card}>
              <span className={numberStyle}>Portfolio Management</span>
              <h3 className={title}>Mathematics</h3>
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
