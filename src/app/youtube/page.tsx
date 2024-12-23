import Link from "next/link";

export default function YouTube() {
  const link = "duration-500 hover:opacity-50";
  // const link =
  //   "flex flex-col duration-500 h-24 justify-around rounded-xl border-neutral-300 border shadow-md hover:shadow-lg hover:border-neutral-400 p-5";
  const title = "text-lg font-medium flex";
  const subtitle = "text-neutral-600";

  return (
    <>
      <div className="max-w-2xl mx-auto">
        <div className="pt-20">
          <h1 className="font-bold text-2xl text-neutral-200 bg-red-700 px-2">
            YouTube
          </h1>
          <p className="font-medium text-neutral-700 pt-2">
            Best platform to gain knowledge
          </p>
        </div>

        <div className="max-w-2xl mx-auto py-5 pt-10">
          <h1 className="font-medium text-2xl py-3">Channels</h1>

          <div className="flex flex-col gap-5">
            <Link
              href={"https://www.youtube.com/@ritvikmath"}
              className={link}
              target="_blank"
            >
              <h1 className={title}>ritvikmath</h1>
              <h2 className={subtitle}>Teaches mathematics in a simple way</h2>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
