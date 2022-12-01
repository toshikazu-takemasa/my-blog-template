import Link from 'next/link';

export default function Header({ blog }) {
  return (
    <div className="bg-white lg:pb-12">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto bg-stone-200">
        <header className="flex justify-around items-center py-4 md:py-8  py-auto">
          {/* <!-- logo - start --> */}

          {/* <!-- logo - end -->

      <!-- nav - start --> */}
          <nav className="flex gap-x-3 gap-y-12">
            <div>
              <Link href={`/`} className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">
                ホーム
              </Link>
            </div>
            <div>
              <Link href={`/katuyou`} className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">
                活用術
              </Link>
            </div>
            <div>
              <Link href={`/recipe`} className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">
                レシピ
              </Link>
            </div>
            <div>
              <Link href={`/colum`} className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">
                コラム
              </Link>
            </div>
            <div>
              {/* <Link href={`/menu`} className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">
                メニュー
              </Link> */}
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
}
