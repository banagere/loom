import Link from "next/link";

export default function YouTube() {
  const link = "duration-500 hover:opacity-50";
  // const link =
  //   "flex flex-col duration-500 h-24 justify-around rounded-xl border-neutral-300 border shadow-md hover:shadow-lg hover:border-neutral-400 p-5";
  const title = "text-lg font-medium flex";
  const subtitle = "text-neutral-600";

  const channels = [
    {
      id: 1,
      href: "https://www.youtube.com/@ritvikmath",
      title: "ritvikmath",
      subtitle: "Teaches mathematics in a simple way",
      channel: "Ritvik Math",
      type: "channel",
    },
  ];

  const videos = [
    {
      id: 1,
      href: "https://www.youtube.com/watch?v=-k-Yk4Ubhos",
      title:
        "One of the biggest wealth transfers in US history is happening RIGHT NOW. Are you aware?",
      channel: "Alexandra Fasulo",
      status: "NIL",
    },
    {
      id: 2,
      href: "https://www.youtube.com/watch?v=k81cDTgyBOQ",
      title: "Wall Street's Dangerous New Obsession With Farmland",
      channel: "How Money Works",
      status: "NIL",
    },
    {
      id: 3,
      href: "https://www.youtube.com/watch?v=vaiBZJR7ao0",
      title:
        "'Gems of Ramanujan and their Lasting Impact on Mathematics', Ken Ono",
      channel: "Mathematical Association of America",
      status: "NIL",
    },
    {
      id: 4,
      href: "https://www.youtube.com/watch?v=IRfv49wTkfw",
      title: "24 Cognitive Biases - Human Misjudgement",
      channel: "Charlie Munger",
      status: "NIL",
    },
    {
      id: 5,
      href: "https://www.youtube.com/watch?v=8uAW5FQtcvE",
      title: "Trading at light speed",
      channel: "David Gross",
      status: "NIL",
    },
    {
      id: 6,
      href: "https://www.youtube.com/watch?v=NH1Tta7purM",
      title: "When a Microsecond Is an Eternity: High Performance Trading Systems in C++",
      channel: "Carl Cook",
      status: "NIL",
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
            {channels.map((list) => (
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
            {videos.map((list) => (
              <Link
                href={list.href}
                className={link}
                target="_blank"
                key={list.id}
              >
                <h1 className={title}>{list.title}</h1>
                <h2 className={subtitle}>{list.channel}</h2>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
