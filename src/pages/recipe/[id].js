import { useRouter } from "next/router";
import { client } from "libs/client";
// import Image from 'next/image';

const microCMSLoader = ({ src, width, quality }) => {
  return `${src}?auto=format&fit=max&w=${width}`;
};

export default function RecipeId({ article }) {
  return (
    <main className="px-6">
      <img
        className="sm:w-1/2 mx-auto"
        src={article.eyecatch.url}
        height={article.eyecatch.height}
        width={article.eyecatch.width}
        loader={microCMSLoader}
        loading="lazy"
        alt=""
        layout="fill"
        objectfit="contain"
      />
      <h1 className="text-2xl mx-auto">{article.title}</h1>
      <p className="text-sm">{article.recipe.maintext}</p>
      <h2>食材</h2>
      <div
        className="mt-5"
        dangerouslySetInnerHTML={{
          __html: `${article.recipe.zairyou}`,
        }}
      />
      <h2>調味料</h2>
      <div
        className="mt-5"
        dangerouslySetInnerHTML={{
          __html: `${article.recipe.spice}`,
        }}
      />
      <h2>手順</h2>
      <div className="sm:grid sm:grid-cols-12">
        <div className="sm:col-start-4 col-span-6">
          <div
            className="mt-5 mx-auto"
            dangerouslySetInnerHTML={{
              __html: `${article.recipe.procedure}`,
            }}
          />
          <div
            className="mt-5 w-80 sm:w-10/12 mx-auto;"
            dangerouslySetInnerHTML={{
              __html: `${article.contenthtml}`,
            }}
          />
          <img
            className="sm:w-1/2 mx-auto"
            src={article.recipe.subimage.src}
            height={article.recipe.subimage.height}
            width={article.recipe.subimage.width}
            loader={microCMSLoader}
            loading="lazy"
            alt=""
            layout="fill"
            objectfit="contain"
          />
          <p>投稿日:{article.publishedAt}</p>
        </div>
      </div>
    </main>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "article" });

  const paths = data.contents.map((content) => `/recipe/${content.id}`);
  return { paths, fallback: "blocking" };
};

// データをテンプレートに受け渡す部分の処理を記述
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "article", contentId: id });

  return {
    props: {
      article: data,
    },
    revalidate: 10,
  };
};
