import Link from "next/link";

export default function Course() {
  const link = "duration-500 hover:opacity-50";
  const title = "text-lg font-medium flex";
  const subtitle = "text-neutral-600";

  const list = [
    {
      id: 1,
      href: "https://www.markmeldrum.com/courses/portfolio-construction-management/",
      title: "Portfolio Construction & Management",
      subtitle: "Mark Meldrum",
    },
    {
      id: 2,
      href: "https://www.youtube.com/playlist?list=PLLLuxp_C798FgdhHllQ8pvzUv-_D1PhF0",
      title: "Learn Finance C++",
      subtitle: "Andy Duncan",
    },
    {
      id: 3,
      href: "https://www.youtube.com/playlist?list=PLA2Lu2TlMqzVPeD043744URgdejZf1vlr",
      title: "Quantitative Trading Strategies",
      subtitle: "Liu Peng",
    },
    {
      id: 4,
      href: "https://www.youtube.com/watch?v=7S_tz1z_5bA",
      title: "SQL Course for Beginners",
      subtitle: "Programming with Mosh",
    },
    {
      id: 5,
      href: "https://www.youtube.com/playlist?list=PLhQjrBD2T380Xnv_v683p6UjiKJZe13ki",
      title: "CS50",
      subtitle: "Harvard",
    },
  ];

  return (
    <>
      <div className="max-w-2xl mx-auto">
        <div className="pt-20">
          <h1 className="font-bold text-2xl text-neutral-200 bg-pink-700 px-2">
            Courses
          </h1>
          {/* <p className="font-medium text-neutral-700 pt-2">
            Interesting channels that you should follow.
          </p> */}
        </div>

        <div className="max-w-2xl mx-auto py-5 pt-10">
          <div className="flex flex-col gap-5">
            {list.map((list) => (
              <Link
                href={list.href}
                className={link}
                target="_blank"
                key={list.id}
              >
                <h1 className={title}>{list.title}</h1>
                <h2 className={subtitle}>{list.subtitle}</h2>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
