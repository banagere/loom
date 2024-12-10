import Link from "next/link";
// import { DownloadIcon } from "@radix-ui/react-icons";

export default function Liquidity() {
  const required =
    "bg-neutral-800 text-neutral-200 px-3 py-1.5 rounded-full font-medium shadow-md";
  const download =
    "bg-blue-700 text-neutral-200 px-3 py-1.5 rounded-full font-medium shadow-md";

  return (
    <>
      <div className="flex flex-col max-w-5xl mx-auto">
        <h1 className="font-semibold text-3xl pt-5 py-3">Liquidity</h1>
        <p className="font-medium max-w-xl">
          Unlike equities, fixed-income securities are more prone to severe
          liquidity risk. It impacts buying as well as selling. Not considering
          liquidity when trading fixed-income securities can negatively affect
          your returns.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* <h1 className="font-medium text-xl py-3">Requirements:</h1> */}
        <div>
          <div className="flex gap-3 items-center pt-5">
            <p className={required}>Python</p>
            <p className={required}>Pandas</p>
            <p className={required}>Matplotlib</p>
            <p className={required}>CSV</p>
          </div>
          <div className="pt-5">
            {/* <h1 className="font-medium text-xl py-3">Download:</h1> */}
            <div className="flex gap-5">
              <Link href={""} className={download}>
                <p className="flex items-center gap-px font-medium">
                  Code.py
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M4.75 14.75V16.25C4.75 17.9069 6.09315 19.25 7.75 19.25H16.25C17.9069 19.25 19.25 17.9069 19.25 16.25V14.75"
                    ></path>
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M12 14.25L12 4.75"
                    ></path>
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M8.75 10.75L12 14.25L15.25 10.75"
                    ></path>
                  </svg>
                </p>
              </Link>
              <Link href={""} className={download}>
                <p className="flex items-center gap-px font-medium">
                  Data.csv
                  {/* <DownloadIcon width={30} /> */}
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M4.75 14.75V16.25C4.75 17.9069 6.09315 19.25 7.75 19.25H16.25C17.9069 19.25 19.25 17.9069 19.25 16.25V14.75"
                    ></path>
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M12 14.25L12 4.75"
                    ></path>
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M8.75 10.75L12 14.25L15.25 10.75"
                    ></path>
                  </svg>
                </p>
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-black rounded-xl p-5 text-yellow-400 mt-5 font-semibold">
          <p className="font-mono">Hello</p>
        </div>
      </div>
    </>
  );
}
