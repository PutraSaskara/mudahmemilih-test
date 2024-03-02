import Image from "next/image";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import Articles from "@/components/jsonArticle/Article.json";

export function generateMetadata({ params }) {
  try {
    const article = Articles.find(
      (article) => article.paramtitle == params.title
    );

    const title = article.title;
    const description = article.description;
    const keywords = article.keyword;

    return {
      title,
      description,
      keywords,
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      title: "Default Title",
      openGraph: {
        images: [],
      },
    };
  }
}

function Page({ params }) {
  const article = Articles.find(
    (article) => article.paramtitle == params.title
  );
  console.log("data article", article);

  if (!article) {
    return <p className="mt-[100px]">Article not found</p>;
  }

  return (
    <div className="p-5 mt-[150px]">
      <div className="relative">
        <Link href="/">
          <button className="absolute left-1 top-2 font-bold text-xl">
            <IoIosArrowBack size={30} className="text-primary" />
          </button>
        </Link>
        <h1 className="mx-0 text-[16px] lg:text-[24px] font-bold text-center px-[80px]">
          {article.title}
        </h1>
        <div className="w-[90%] mx-auto">
          <div className="flex justify-center mt-5">
            <Image
              src={article.imageUrl}
              width={500}
              height={300}
              alt={article.title}
            />
          </div>

          <div className="mt-10">
            <p>{article.firstcontent}</p>
            <ul>
              {article.content.map((item, index) => (
                <li key={index}>
                  {item.link ? (
                    <Link href={item.link}>
                      <h1 className="font-bold">{item.subheader}</h1>
                    </Link>
                  ) : (
                    <h1 className="font-bold">{item.subheader}</h1>
                  )}
                  {item.text && <p>{item.text}</p>}
                </li>
              ))}
            </ul>
          </div>
          <h1 className="mt-10 font-bold">{article.source}</h1>
        </div>
      </div>
      {/* <h1>Detail id Article {params.title}</h1> */}
    </div>
  );
}

export default Page;
