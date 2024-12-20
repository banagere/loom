import Link from "next/link";

export default function Liquidity() {
  const required =
    "bg-neutral-800 text-neutral-200 px-3 py-1.5 rounded-full font-medium shadow-md text-sm";
  const download =
    "bg-blue-700 text-neutral-200 px-3 py-1.5 rounded-full font-medium shadow-md text-sm";

  return (
    <>
      <div className="flex flex-col max-w-2xl mx-auto">
        <div className="pt-20">
          <h1 className="font-semibold text-2xl pb-2">Value at Risk</h1>
          <p className="font-medium text-neutral-700 max-w-xl">
            Quantify the amount of money you could lose in a given day/year.
            This number helps you understand your risk exposure, and guides you
            to take necessary decision on whether to change your position size.
          </p>
        </div>

        <div>
          <div className="flex gap-3 items-center pt-3">
            <p className={required}>Python</p>
            <p className={required}>Numpy</p>
            <p className={required}>Scipy</p>
            <p className={required}>Matplotlib</p>
          </div>
          <div className="pt-3">
            <div className="flex gap-5">
              <Link
                href={"/code/risk/var/code.py"}
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
          <code className="font-mono text-pink-400 pb-2">
            Code includes calculating:
          </code>
          <code className="font-mono">
            1. Portfolio VaR at 95% confidence (Statistical & Monte Carlo
            methods){" "}
          </code>
          <code className="font-mono">
            2. Conditional VaR (when the VaR gets breached)
          </code>
          <code className="font-mono">3. Maximum drawdown</code>
        </div>

        <div className="pt-2">
          <p className="text-sm font-medium text-neutral-700">
            Last updated: 12th December 2024
          </p>
        </div>
      </div>
    </>
  );
}
