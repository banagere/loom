import Link from "next/link";

export default function FixedIncome() {
  return (
    <>
      <div className="">
        <section className="flex px-5 py-3">
          <Link
            href={"/"}
            className="bg-white text-black rounded-full px-3 py-1"
          >
            &larr; Back
          </Link>
          <h1 className="font-medium text-2xl text-center">Fixed Income</h1>
        </section>

        <section>
          <h1>Books</h1>
        </section>
      </div>
    </>
  );
}
