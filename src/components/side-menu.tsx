import Link from "next/link";
// import { useRouter } from "next/navigation";
import * as React from "react";

export default function Sidebar() {
  const currentYear = new Date().getFullYear();

  // const router = useRouter();
  // const { data } = useViewerQuery();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const sections = [
    {
      label: null,
      items: [
        {
          href: "/",
          label: "Home",
          // icon: HomeIcon,
          trailingAccessory: null,
          // isActive: router.asPath === "/",
          trailingAction: null,
          isExternal: false,
        },

        {
          href: "/writing",
          label: "Writing",
          // icon: WritingIcon,
          trailingAccessory: null,
          // isActive: router.asPath.indexOf("/writing") >= 0,
          trailingAction: null,
          isExternal: false,
        },
      ],
    },
  ];

  const items = "hover:bg-neutral-200 px-4 py-1 rounded-lg duration-500 hover:shadow-inner";
  // const items =
  //   "flex items-center space-x-3 text-gray-800 hover:text-blue-600 font-medium";

  return (
    <>
      <div className="flex flex-col h-screen w-64 bg-neutral-100 shadow-inner border border-neutral-200">
        <div className="flex items-center px-5 py-4">
          <div className="ml-3">
            <h2 className="font-bold text-2xl">Loom</h2>
            <p className="text-sm text-gray-600">By Banagere</p>
          </div>
        </div>

        <nav className="flex flex-col gap-y-1.5 m-4 pt-5">
          <Link href="/" className={items}>
            Home
          </Link>
          <Link href="/course" className={items}>
            Courses
          </Link>
          <Link href="/code" className={items}>
            Code
          </Link>
          <Link href="/youtube" className={items}>
            YouTube
          </Link>
          <Link href="/podcast" className={items}>
            Podcast
          </Link>
          <Link href="/people" className={items}>
            People
          </Link>
        </nav>

        <nav className="flex flex-col gap-y-1.5 m-4 pt-5">
          <Link href="https://banagere.com/" className={items} target="_blank">
            Banagere
          </Link>
          <Link
            href="mailto:banagere.ravi@gmail.com"
            className={items}
            target="_blank"
          >
            Mail
          </Link>
          <Link
            href="https://github.com/banagere/loom"
            className={items}
            target="_blank"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/banagere/"
            className={items}
            target="_blank"
          >
            LinkedIn
          </Link>
        </nav>

        <nav className="flex text-sm text-neutral-500 font-medium px-5 ml-3 items-end h-screen py-5">
          © {currentYear} Banagere.
        </nav>
      </div>

      {/* <div className="flex-1 px-3 py-3 space-y-1">
      {sections.map((section, i) => {
        return (
          <ul key={i} className="space-y-1">
            {section.label && (
              <h4
                key={i}
                className="px-2 pt-5 pb-2 text-xs font-semibold text-gray-1000 text-opacity-40 dark:text-white"
              >
                {section.label}
              </h4>
            )}
            {section.items.map((item, j) => (
              <NavigationLink key={j} link={item} />
            ))}
          </ul>
        )
      })}
    </div> */}
    </>
  );
}
