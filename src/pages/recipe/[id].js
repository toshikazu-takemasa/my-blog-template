import { useRouter } from "next/router";
import { client } from "libs/client";
// import Image from 'next/image';

const microCMSLoader = ({ src, width, quality }) => {
  return `${src}?auto=format&fit=max&w=${width}`;
};

export default function RecipeId({ article }) {
  return (
    <main className="p-6 font-sans">
      <img className="sm:w-1/2 mx-auto" src={article.eyecatch.url} height={article.eyecatch.height} width={article.eyecatch.width} loader={microCMSLoader} loading="lazy" alt="" layout="fill" objectfit="contain" />
      <article className="mx-auto sm:w-1/2">
        <p className="mt-5 font-bold text-lg">ハミングウォーター公式レシピ</p>
        <h1 className="text-2xl mx-auto font-bold">{article.title}</h1>
        <p className="mt-5 text-sm">{article.recipe.maintext}</p>
        <div className="mt-5 rounded-md text-center" style={{ backgroundColor: "#e7e3e0" }}>
          <div
            className="p-4"
            dangerouslySetInnerHTML={{
              __html: `${article.recipe.zairyou}`,
            }}
          />
        </div>
        <h2 className="my-1 font-bold text-lg">食材</h2>
        <div
          style={{ backgroundColor: "#e7e3e0" }}
          className="p-4 rounded-md"
          dangerouslySetInnerHTML={{
            __html: `${article.recipe.syokuzai}`,
          }}
        />
        <h2 className="my-1 font-bold text-lg">調味料</h2>
        <div
          style={{ backgroundColor: "#e7e3e0" }}
          className="p-4 rounded-md"
          dangerouslySetInnerHTML={{
            __html: `${article.recipe.spice}`,
          }}
        />
        <h2 className="my-1 font-bold text-lg">手順</h2>
        <div
          className="p-4 rounded-md"
          style={{ backgroundColor: "#e7e3e0" }}
          dangerouslySetInnerHTML={{
            __html: `${article.recipe.procedure}`,
          }}
        />
      </article>
      <img className=" sm:w-1/2 mx-auto mt-3" src={article.recipe.subimage.url} height={article.recipe.subimage.height} width={article.recipe.subimage.width} loader={microCMSLoader} loading="lazy" alt="" layout="fill" objectfit="contain" />
    </main>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blogs" });

  const paths = data.contents.map((content) => `/recipe/${content.id}`);
  return { paths, fallback: "blocking" };
};

// データをテンプレートに受け渡す部分の処理を記述
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blogs", contentId: id });

  return {
    props: {
      article: data,
    },
    revalidate: 10,
  };
};
