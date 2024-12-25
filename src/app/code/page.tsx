import Link from "next/link";

export default function Code() {
  const link = "duration-500 hover:opacity-50";
  const title = "text-lg font-medium flex";
  const subtitle = "text-neutral-600";

  const codeList = [
    {
      id: 1,
      href: "https://github.com/LechGrzelak/QuantFinanceBook",
      title: "QuantFinanceBook",
      subtitle: "Lech Grzelak",
      status: "NIL",
    },
    {
      id: 2,
      href: "https://github.com/LechGrzelak/Computational-Finance-Course",
      title: "Computational-Finance-Course",
      subtitle: "Lech Grzelak",
      status: "NIL",
    },
    {
      id: 3,
      href: "https://github.com/je-suis-tm/quant-trading",
      title: "quant-trading",
      subtitle: "T.M.",
      status: "NIL",
    },
    {
      id: 4,
      href: "https://github.com/pmorissette/ffn",
      title: "ffn",
      subtitle: "Philippe Morissette",
      status: "NIL",
    },
    {
      id: 5,
      href: "https://github.com/hello2all/gamma-ray",
      title: "gamma-ray",
      subtitle: "TIAN Liang Yuan",
      status: "NIL",
    },
    {
      id: 6,
      href: "https://github.com/Albert-Z-Guo/Deep-Reinforcement-Stock-Trading",
      title: "Deep-Reinforcement-Stock-Trading",
      subtitle: "Albert Z. Guo",
      status: "NIL",
    },
  ];

  return (
    <>
      <div className="max-w-2xl mx-auto">
        <div className="pt-20">
          <h1 className="font-bold text-2xl text-neutral-200 bg-blue-700 px-2">
            Code
          </h1>
          <p className="font-medium text-neutral-700 pt-2">Fork these repos!</p>
        </div>

        <div className="max-w-2xl mx-auto py-5 pt-10">
          <div className="flex flex-col gap-5">
            {codeList.map((list) => (
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
