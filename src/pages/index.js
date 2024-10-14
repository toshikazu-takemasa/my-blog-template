import Link from "next/link";
import { client } from "libs/client";
// import Image from 'next/image';
// import DriverElement from "./drivers";
import { driver }  from "driver.js";
import "driver.js/dist/driver.css";


const drivers =  driver({ 
    showProgress: true,  // Because everyone loves progress bars!
    steps:[
      {
        element:"#home",
        popover: {
          title: "ホームボタン",
          description: "TOPに戻ります",
        },
      },
      {
        element:"#recipe",
        popover: {
          title: "レシピボタン",
          description: "レシピ一覧に飛びます",
        },
      },
      {
        element:"#column",
        popover: {
          title: "コラムボタン",
          description: "コラム一覧に飛びます",
        },
      }
    ]
  });
  
const driverHandleClick = () => {
  drivers.drive();
}
const Button = () => (
  <button onClick={driverHandleClick} className="text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    <p className="text-white">ツアー開始</p>
  </button>
);

const microCMSLoader = ({ src, width, quality }) => {
  return `${src}?auto=format&fit=max&w=${width}`;
};

export default function Home({ article }) {
  return (
    
    <div className="bg-white py-6 sm:py-8">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        {/* ピックアップ */}
        <article className="py-6 text-slate-500">
          <p className="sm:w-1/2 py-3 sm:mx-auto text-xl font-bold">ピックアップ</p>
          {/* <img className="sm:w-1/2 mx-auto" src={"/img/minoyaki.jpg"} /> */}
          <div className="flex items-center sm:w-1/2 sm:mx-auto">
            <p id="columess" className=" my-2 p-1 bg-green-300 text-base">コラム</p>
            <p className="text-lg font-bold">おしゃれな美濃焼コップで淹れるコーヒー</p>
          </div>
          <div className="w-6/12 mx-auto my-l0"><Button /></div>
        </article>
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
                <Link key={article.id} href={`/recipe/${article.id}`} legacyBehavior target="_blank" rel="noopener noreferrer">
                  <div className="flex flex-col">
                    <div className="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative rounded-md">
                      <img src={article.eyecatch.url} loader={microCMSLoader} loading="lazy" alt="" layout="fill" width={500} height={500} objectfit="contain" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
                    </div>
                    <div className="flex flex-row sm:flex-col items-center sm:items-start">
                      <p className="w-2/12 sm:w-4/12 my-2 p-1 bg-green-300 text-white text-sm text-center rounded">{article.category.name}</p>
                      <p className="ms-3 sm:ms-0 text-lg font-bold">{article.title}</p>
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
                    <div className="flex flex-row sm:flex-col items-center sm:items-start">
                      <p className="w-2/12 sm:w-4/12 my-2 p-1 bg-green-300 text-white text-sm text-center rounded">{article.category.name}</p>
                      <p className="ms-3 sm:ms-0 text-lg font-bold">{article.title}</p>
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
