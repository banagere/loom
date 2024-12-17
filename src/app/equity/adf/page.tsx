import Link from "next/link";
// import { DownloadIcon } from "@radix-ui/react-icons";

export default function AugmentedDickeyFullerTest() {
  const required =
    "bg-neutral-800 text-neutral-200 px-3 py-1.5 rounded-full font-medium shadow-md text-sm";
  const download =
    "bg-blue-700 text-neutral-200 px-3 py-1.5 rounded-full font-medium shadow-md text-sm";

  return (
    <>
      <div className="flex flex-col max-w-3xl mx-auto">
        <div className="pt-20">
          <h1 className="font-semibold text-2xl pb-2">
            Augmented Dickey Fuller Test
          </h1>
          <p className="font-medium text-neutral-700 max-w-xl">
            Test for unit root in price returns. Unit root is when today&apos;s
            price is influenced by yesterday&apos;s price. Which, in the long
            run, will show a random trend. This makes it hard for prediction.
            <br />
            Mean, variance and covariance must remain constant and stable. Only
            then, can we claim that data is stationary, and can be used for
            prediction.
          </p>
        </div>

        <div>
          <div className="flex gap-3 items-center pt-3">
            <p className={required}>Python</p>
            <p className={required}>yFinance</p>
            <p className={required}>Numpy</p>
            <p className={required}>statsmodels</p>
          </div>
          <div className="pt-3">
            <div className="flex gap-5">
              <Link
                href={"/code/equity/adf/code.py"}
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

        <div className="bg-black rounded-xl p-5 text-yellow-400 mt-5 flex flex-col font-mono">
          <code className="text-pink-400 pb-2">Check for stationarity:</code>
          <code className="">
            1. If stationary (p-value is less than 0.05): The stock returns have
            consistent statistical properties
          </code>
          <code className="">
            2. If non-stationary (p-value greather than or equal to 0.05): The
            returns might have underlying trends or unpredictable variations
          </code>
        </div>

        <div className="pt-2">
          <p className="text-sm font-medium text-neutral-700">
            Last updated: 17th December 2024
          </p>
        </div>
      </div>
    </>
  );
}
