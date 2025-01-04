import Image from "next/image";
import Link from "next/link";

export default function BlogCard() {
  return (
    <section className="flex flex-col justify-between h-[480px] rounded bg-light/90 dark:bg-dark/40 shadow-md shadow-gray-300 dark:shadow-black/80 group hover:scale-105 transition-transform ease-out duration-700">
      {/* Image Section*/}
      <div className="relative max-h-76 flex-1">
        <Image
          src={"/1.webp"}
          alt="Web Development Journey"
          fill
          className="object-cover rounded-t"
        />
      </div>

      {/* Title and Summary */}
      <div className="flex flex-col justify-between gap-y-4 p-4">
        <h2 className="text-lg font-semibold line-clamp-2 text-dark dark:text-light leading-tight mb-2">
          My Journey to Becoming a Web Developer Using Next.js
        </h2>
        <p className="text-dark/70 dark:text-light/70 line-clamp-3">
          I&apos;m currently working on a Next.js project that helps me learn modern web development.  
          From building dynamic pages to integrating powerful CMS tools, this journey has been exciting.  
          I&apos;m exploring frameworks, creating components, and improving performance optimization.  
        </p>


        {/* Read More dynamic Link */}
        <Link
          href={`/blog/my-web-dev-journey`}
          className="block px-4 py-1 text-center bg-red-950 rounded text-white font-semibold mt-4"
        >
          Read More
        </Link>
      </div>
    </section>
  );
}