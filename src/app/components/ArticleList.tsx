import Image from "next/image";
import Link from "next/link";
import React from "react";

export const ArticleList = () => {
  return (
    <div>
      <article className="shadow my-4 flex flex-col">
        <Link href="#" className="hover:opacity-75">
          <Image
            src="/goh-rhy-yan-W5jISkjNiSQ-unsplash.jpg"
            alt=""
            width={1280}
            height={300}
          />
        </Link>
        <div className="bg-white flex flex-col justify-start p-6">
          <Link href="#" className="text-blue-700 pb-4 font-bold">
            Technology
          </Link>
          <Link
            href="#"
            className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4"
          >
            Next.jsの勉強
          </Link>
          <p className="text-sm pb-3 text-slate-900">By 2024/06/15</p>
          <Link href="#" className="text-slate-900 pb-6">
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </Link>
          <Link href="#" className="text-pink-800 hover:text-black">
            続きを読む
          </Link>
        </div>
      </article>
      <article className="shadow my-4 flex flex-col">
        <Link href="#" className="hover:opacity-75">
          <Image
            src="/ben-o-bro-wpU4veNGnHg-unsplash.jpg"
            alt=""
            width={1280}
            height={300}
          />
        </Link>
        <div className="bg-white flex flex-col justify-start p-6">
          <Link href="#" className="text-blue-700 pb-4 font-bold">
            Technology
          </Link>
          <Link
            href="#"
            className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4"
          >
            Next.jsの勉強
          </Link>
          <p className="text-sm pb-3 text-slate-900">By 2024/06/15</p>
          <Link href="#" className="text-slate-900 pb-6">
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </Link>
          <Link href="#" className="text-pink-800 hover:text-black">
            続きを読む
          </Link>
        </div>
      </article>
    </div>
  );
};

export default ArticleList;
