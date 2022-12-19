import Link from "next/link";

export default function Header({ blog }) {
  return (
    <div className="bg-white lg:pb-12">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div>
          <img src={"/img/header.png"} width={180} height={37} />
        </div>
        <header className="flex justify-around items-center py-4 md:py-8  py-auto">
          {/* <!-- logo - start --> */}

          {/* <!-- logo - end -->

      <!-- nav - start --> */}

          <nav className="flex gap-x-3 gap-y-12">
            <Link href={`/`}>
              <div className="border-2 text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-base">
                ホーム
              </div>
            </Link>

            <Link href={`/katuyou`}>
              <div className="border-2 text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-base">
                レシピ
              </div>
            </Link>

            <Link href={`/recipe`}>
              <div className="border-2 text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-base">
                コラム
              </div>
            </Link>

            <Link href={`/colum`}>
              <div className="border-2 text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-base">
                ハミングウォーター
              </div>
            </Link>
          </nav>
        </header>
      </div>
    </div>
  );
}
