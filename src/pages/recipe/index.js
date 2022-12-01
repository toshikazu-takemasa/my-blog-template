import Link from 'next/link';
import { client } from 'libs/client';
// import Image from 'next/image';

export default function katuyou({ recipe }) {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div className="mb-10 md:mb-16">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">humming kitchen</h2>

          <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
            This is a section of som simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.
          </p>
        </div>
        {/* <!-- text - nd --> */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
          {/* <!-- article - start - -> */}
          {recipe.map(
            (recipe) =>
              recipe.category.id == '6gwt0vppnj7' && (
                <div key={recipe.id} className="flex flex-col bg-white border rounded-lg overflow-hidden">
                  <Link href={`/recipe/${recipe.id}`} className="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative">
                    <img
                      width={400}
                      height={200}
                      src={`${recipe.eyecatch.url}?auto=format&q=75&fit=crop&w=600`}
                      loading="lazy"
                      alt="Photo by Minh Pham"
                      className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                    />
                  </Link>

                  <div className="flex flex-col flex-1 p-4 sm:p-6">
                    <h2 className="text-gray-800 text-lg font-semibold mb-2">
                      <a href="#" className="hover:text-indigo-500 active:text-indigo-600 transition duration-100">
                        {recipe.title}
                      </a>
                    </h2>

                    <p className="text-gray-500 mb-8">{recipe.subtitle}</p>
                    <span className="w-32 text-center inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{recipe.category.name}</span>
                  </div>
                </div>
              )
          )}
          {/* <!-- article - end --> */}
        </div>
      </div>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'recipe' });

  return {
    props: {
      recipe: data.contents,
    },
  };
};
