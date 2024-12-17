import Link from "next/link";

export default function Home() {
  const link = "duration-500 hover:opacity-50";
  // const link =
  //   "flex flex-col duration-500 h-24 justify-around rounded-xl border-neutral-300 border shadow-md hover:shadow-lg hover:border-neutral-400 p-5";
  const title = "text-lg font-medium flex";
  const subtitle = "text-neutral-600";

  return (
    <>
      <div className="max-w-2xl mx-auto">
        <div className="pt-20">
          <h1 className="font-bold text-2xl text-neutral-200 font-mono bg-neutral-700 px-2">
            finance + math + code
          </h1>
          <p className="font-medium text-neutral-700 pt-2">
            Developing this site as a digital repository for my research. My
            idea is to include code, books, PDFs, research papers and Github
            repos — that I can come back to.
          </p>
        </div>

        <div className="max-w-2xl mx-auto py-5 pt-10">
          <h1 className="font-medium text-2xl py-3">Projects</h1>

          <div className="flex flex-col gap-5">
            <Link href={"/fixed-income/liquidity"} className={link}>
              <h1 className={title}>Liquidity</h1>
              <h2 className={subtitle}>
                Find out which Indian government securities are the most liquid
              </h2>
            </Link>

            <Link href={"/risk/var"} className={link}>
              <h1 className={title}>Value at Risk</h1>
              <h2 className={subtitle}>
                Minimum amount of money you could lose
              </h2>
            </Link>

            <Link href={"/derivatives/bsm"} className={link}>
              <h1 className={title}>Black-Scholes-Merton Model</h1>
              <h2 className={subtitle}>Option pricing in continuous time</h2>
            </Link>

            <Link href={"/derivatives/binomial"} className={link}>
              <h1 className={title}>Binomial Options Pricing Model</h1>
              <h2 className={subtitle}>Option pricing through lattice model</h2>
            </Link>

            <Link href={"/equity/dw"} className={link}>
              <h1 className={title}>Durbin Watson Test</h1>
              <h2 className={subtitle}>
                Test if the price returns are serially correlated
              </h2>
            </Link>

            <Link href={"/equity/adf"} className={link}>
              <h1 className={title}>Augmented Dickey Fuller Test</h1>
              <h2 className={subtitle}>
                Test if the price returns have unit root
              </h2>
            </Link>

            <Link href={"/risk/garch"} className={link}>
              <h1 className={title}>GARCH</h1>
              <h2 className={subtitle}>
                Understand the volatility of price returns
              </h2>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const section = () => {
  const card =
    "relative flex flex-col justify-between overflow-hidden duration-500 h-32 rounded-xl w-[400px] border-neutral-300 border shadow-md hover:shadow-lg hover:border-neutral-400";
  const title = "text-3xl font-bold h-full flex items-end p-5";
  const numberStyle =
    "absolute top-4 left-3 text-neutral-400 text-5xl font-bold opacity-20 uppercase";
  // const timeStyle =
  //   "flex items-center text-gray-300 text-sm font-medium bg-white/10 mt-8 px-3 py-1 rounded-full";
  return (
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
  );
};
