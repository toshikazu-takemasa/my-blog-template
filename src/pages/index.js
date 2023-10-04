import Link from "next/link";
import { client } from "libs/client";
// import Image from 'next/image';

const microCMSLoader = ({ src, width, quality }) => {
  return `${src}?auto=format&fit=max&w=${width}`;
};

export default function Home({ article }) {
  return (
    <div className="bg-white py-6 sm:py-8">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        {/* ピックアップ */}
        {/* <article className="py-6">
          <p className="sm:w-1/2 py-3 sm:mx-auto text-xl font-bold">ピックアップ</p>
          <img className="sm:w-1/2 mx-auto" src={"/img/minoyaki.jpg"} />
          <div className="flex items-center sm:w-1/2 sm:mx-auto">
            <p className=" my-2 p-1 bg-green-300 text-white text-base">コラム</p>
            <p className="text-lg font-bold">おしゃれな美濃焼コップで淹れるコーヒー</p>
          </div>
        </article> */}
        {/* ピックアップ */}

        {/* 人気記事 */}
        <article className="py-6">
          <p className="sm:w-1/2 sm:mx-auto text-xl font-bold">人気記事</p>
          {/* <img className="sm:w-1/2 mx-auto" src={"/img/banner_pickup.png"} /> */}
        </article>
        {/* 人気記事 */}

        <div className="mx-auto sm:w-1/2 grid sm:grid-cols-2 lg:grid-cols-3  gap-4 md:gap-6">
          {/* <!-- article - start --> */}
          {article.map((article) => {
            if (article.category.name == "レシピ") {
              return (
                <Link key={article.id} href={`/recipe/${article.id}`} legacyBehavior>
                  <div className="flex flex-col">
                    <div className="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative rounded-md">
                      <img src={article.eyecatch.url} loader={microCMSLoader} loading="lazy" alt="" layout="fill" width={500} height={500} objectfit="contain" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
                    </div>
                    <div className="flex items-center">
                      <p className="my-2 p-1 bg-green-300 text-white text-base">{article.category.name}</p>
                      <p className="text-lg font-bold">{article.title}</p>
                    </div>
                  </div>
                </Link>
              );
            } else if (article.category.name == "コラム") {
              return (
                <Link key={article.id} href={`/column/${article.id}`} legacyBehavior>
                  <div className="flex flex-col">
                    <div className="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative rounded-md">
                      <img src={article.eyecatch.url} loader={microCMSLoader} loading="lazy" alt="" layout="fill" width={500} height={500} objectfit="contain" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
                    </div>
                    <div className="flex items-center">
                      <p className="my-2 p-1 bg-green-300 text-white text-base">{article.category.name}</p>
                      <p className="text-lg font-bold">{article.title}</p>
                    </div>
                  </div>
                </Link>
              );
            }
          })}
          {/* <!-- article - end --> */}
        </div>
      </div>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述しま
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blogs" });

  return {
    props: {
      article: data.contents,
    },
  };
};
