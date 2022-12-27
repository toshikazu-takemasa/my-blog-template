import { useRouter } from "next/router";
import { client } from "libs/client";
// import Image from 'next/image';

const microCMSLoader = ({ src, width, quality }) => {
  return `${src}?auto=format&fit=max&w=${width}`;
};

export default function RecipeId({ article }) {
  return (
    <main className="px-6">
      <h1 className="text-2xl mx-auto text-center">{article.title}</h1>
      <div className="sm:grid sm:grid-cols-12">
        <div className="sm:col-start-4 col-span-6">
          <div
            className="mt-5 mx-auto"
            dangerouslySetInnerHTML={{
              __html: `${article.content}`,
            }}
          />
          <div
            className="mt-5 w-80 sm:w-10/12 mx-auto;"
            dangerouslySetInnerHTML={{
              __html: `${article.contenthtml}`,
            }}
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
      recipe: data,
    },
    revalidate: 10,
  };
};
