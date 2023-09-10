import Link from "next/link";

export default function Header({ blog }) {
  return (
    <div className="bg-white lg:pb-12">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div>
          <img className="sm:w-1/2 mx-auto" src={"/img/titlebanner.png"} />
        </div>
        <header className="flex justify-around items-center py-4 md:py-8 py-auto">
          {/* <!-- logo - start --> */}

          {/* <!-- logo - end -->

      <!-- nav - start --> */}

          <nav className="flex gap-x-3 gap-y-12">
            <Link href={`/`}>
              <div className="border-2 p-2 text-gray-600 hover:bg-green-300 hover:text-white active:text-indigo-700 text-sm">ホーム</div>
            </Link>

            <Link href={`/katuyou`}>
              <div className="border-2 p-2 text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-sm">レシピ</div>
            </Link>

            <Link href={`/recipe`}>
              <div className="border-2 p-2 text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-sm">コラム</div>
            </Link>
          </nav>
        </header>
      </div>
    </div>
  );
}
