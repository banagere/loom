import Link from "next/link";

export default function YouTube() {
  const link = "duration-500 hover:opacity-50";
  // const link =
  //   "flex flex-col duration-500 h-24 justify-around rounded-xl border-neutral-300 border shadow-md hover:shadow-lg hover:border-neutral-400 p-5";
  const title = "text-lg font-medium flex";
  const subtitle = "text-neutral-600";

  const youtubeList = [
    {
      id: 1,
      href: "https://www.youtube.com/@ritvikmath",
      title: "ritvikmath",
      subtitle: "Teaches mathematics in a simple way",
      channel: "Ritvik Math",
      type: "channel",
      status: "WIP",
    },
  ];

  return (
    <>
      <div className="max-w-2xl mx-auto">
        <div className="pt-20">
          <h1 className="font-bold text-2xl text-neutral-200 bg-red-700 px-2">
            YouTube
          </h1>
          <p className="font-medium text-neutral-700 pt-2">
            Best platform to gain knowledge!
          </p>
        </div>

        <div className="max-w-2xl mx-auto py-5 pt-10">
          <h1 className="font-medium text-2xl py-3">Channels</h1>

          <div className="flex flex-col gap-5">
            {youtubeList.map((list) => (
              <Link
                href={list.href}
                className={link}
                target="_blank"
                key={list.id}
              >
                <h1 className={title}>{list.channel}</h1>
                <h2 className={subtitle}>{list.subtitle}</h2>
              </Link>
            ))}
          </div>
        </div>

        <div className="max-w-2xl mx-auto py-5 pt-10">
          <h1 className="font-medium text-2xl py-3">Videos</h1>

          <div className="flex flex-col gap-5">
            <Link
              href={"https://www.youtube.com/watch?v=-k-Yk4Ubhos"}
              className={link}
              target="_blank"
            >
              <h1 className={title}>
                One of the biggest wealth transfers in US history is happening
                RIGHT NOW. Are you aware?
              </h1>
              <h2 className={subtitle}>Alexandra Fasulo</h2>
            </Link>

            <Link
              href={"https://www.youtube.com/watch?v=k81cDTgyBOQ"}
              className={link}
              target="_blank"
            >
              <h1 className={title}>
                Wall Street&apos;s Dangerous New Obsession With Farmland
              </h1>
              <h2 className={subtitle}>How Money Works</h2>
            </Link>

            <Link
              href={"https://www.youtube.com/watch?v=vaiBZJR7ao0"}
              className={link}
              target="_blank"
            >
              <h1 className={title}>
                &quot;Gems of Ramanujan and their Lasting Impact on
                Mathematics&quot;, Ken Ono
              </h1>
              <h2 className={subtitle}>Mathematical Association of America</h2>
            </Link>

            <Link
              href={"https://www.youtube.com/watch?v=IRfv49wTkfw"}
              className={link}
              target="_blank"
            >
              <h1 className={title}>
                24 Cognitive Biases - Human Misjudgement
              </h1>
              <h2 className={subtitle}>Charlie Munger</h2>
            </Link>

            <Link
              href={"https://www.youtube.com/watch?v=8uAW5FQtcvE"}
              className={link}
              target="_blank"
            >
              <h1 className={title}>Trading at light speed</h1>
              <h2 className={subtitle}>David Gross</h2>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
