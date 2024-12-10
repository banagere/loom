/* eslint-disable @typescript-eslint/no-unused-vars */
import Link from "next/link";

export default function FixedIncome() {
  const card =
    "flex flex-col duration-500 h-24 justify-around rounded-xl border-neutral-300 border shadow-md hover:shadow-lg hover:border-neutral-400 bg-neutral-100 p-5";
  const title = "text-2xl font-bold flex";
  const subtitle = "";
  const numberStyle =
    "absolute top-4 left-3 text-neutral-400 text-5xl font-bold opacity-20 uppercase";
  return (
    <>
      <div className="">
        {/* <Link href={"/"} className="bg-white text-black rounded-full px-3 py-1">
          &larr; Back
        </Link> */}

        <h1 className="font-medium text-2xl text-center pt-5">Fixed Income</h1>

        <div className="max-w-4xl mx-auto py-5">
          <Link href={"/fixed-income/liquidity"} className={card}>
            <h1 className={title}>Liquidity</h1>
            <h2 className="text-lg font-medium flex">
              Find out which Indian government securities are the most liquid
            </h2>
          </Link>
        </div>
      </div>
    </>
  );
}
