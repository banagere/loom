import Image from "next/image";
import Link from "next/link";
// import image from "code/fixed-income/yield-curve-mc/image.png";
import image from "../../../../public/code/fixed-income/yield-curve-mc/image.png";

export default function Liquidity() {
  const required =
    "bg-neutral-800 text-neutral-200 px-3 py-1.5 rounded-full font-medium shadow-md text-sm";
  const download =
    "bg-blue-700 text-neutral-200 px-3 py-1.5 rounded-full font-medium shadow-md text-sm";

  return (
    <>
      <div className="flex flex-col max-w-3xl mx-auto">
        <div className="pt-20">
          <h1 className="font-semibold text-2xl pb-2">Yield Curve Shifts</h1>
          <p className="font-medium text-neutral-700 max-w-xl">
            Unlike equities, fixed-income securities are more prone to severe
            liquidity risk. It impacts buying as well as selling. Not
            considering liquidity when trading fixed-income securities can
            negatively affect your returns.
          </p>
        </div>

        <div>
          <div className="flex gap-3 items-center pt-3">
            <p className={required}>Python</p>
            <p className={required}>Numpy</p>
            <p className={required}>Matplotlib</p>
          </div>
          <div className="pt-3">
            <div className="flex gap-5">
              <Link
                href={"/code/fixed-income/yield-curve-mc/code.py"}
                className={download}
                download
              >
                <p className="flex items-center gap-px font-medium">
                  Code.py
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M4.75 14.75V16.25C4.75 17.9069 6.09315 19.25 7.75 19.25H16.25C17.9069 19.25 19.25 17.9069 19.25 16.25V14.75"
                    ></path>
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M12 14.25L12 4.75"
                    ></path>
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M8.75 10.75L12 14.25L15.25 10.75"
                    ></path>
                  </svg>
                </p>
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-black rounded-xl p-5 text-yellow-400 mt-5 flex flex-col">
          <code className="font-mono text-pink-400 pb-2">Simulate:</code>
          <code className="font-mono">1. The shifting of yield curves</code>
          <code className="font-mono">
            2. Using the monte carlo simulation method
          </code>
        </div>

        <div className="mt-5 flex w-full justify-center flex-col">
          <h1 className="font-semibold text-lg pb-2">Output</h1>
          <Image src={image} alt="" width={1000} />
        </div>

        <div className="pt-2">
          <p className="text-sm font-medium text-neutral-700">
            Last updated: 23rd December 2024
          </p>
        </div>
      </div>
    </>
  );
}
