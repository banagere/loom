import Link from "next/link";

export default function Home() {
  const card =
    "relative px-5 flex flex-col justify-between overflow-hidden duration-500 h-72 rounded-2xl text-white";
  const title = "text-2xl font-bold pt-5";
  const numberStyle =
    "absolute top-0 left-0 text-neutral-300 text-6xl font-bold opacity-20 uppercase";
  // const timeStyle =
  //   "flex items-center text-gray-300 text-sm font-medium bg-white/10 mt-8 px-3 py-1 rounded-full";

  return (
    <>
      <div className="h-screen justify-between flex flex-col">
        <section className="flex gap-3 items-end justify-center my-auto">
          <Link href={"/"} className="font-medium text-2xl">
            loom
          </Link>
          <Link
            href={"https://banagere.com"}
            className="underline hover:opacity-70 duration-500"
          >
            by banagere
          </Link>
        </section>

        <div className="flex flex-col px-10 basis-11/12 bg-red-900/80">
          {/* <div>Lorem ipsum</div> */}
          <div className="grid grid-cols-4 gap-8 my-5">
            <Link href={"/"} className={card}>
              <p className={numberStyle}>Upside Potential</p>
              <h3 className={title}>Equity</h3>
              {/* <p className="mt-2 text-sm text-gray-400">Equity</p> */}
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
