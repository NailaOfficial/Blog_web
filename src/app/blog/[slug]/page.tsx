import Image from "next/image";

export default function page() {
  return (
    <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">

      {/* Blog Title */}
      <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light">
        Building Modern Web Experiences with Next.js: A Developer&apos;s Journey
      </h1>

      {/* Featured Image */}
      <Image
        src={"/1.webp"}
        width={500}
        height={500}
        alt="Next.js Web Development"
        className="rounded"
      />

      {/* Blog Summary Section */}
      <section>
      <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-red-600">
        Summary
      </h2>
      <p className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
        I&apos;m currently working on a Next.js project to explore modern web development. This project has enabled me to build dynamic web pages, integrate APIs, and optimize performance, making learning practical and exciting. Through this journey, I&apos;m enhancing my knowledge of frameworks, components, and CMS tools, which are essential for creating responsive web experiences.
      </p>
      </section>

      {/* Author Section (Image & Bio) */}
      <section className="px-2 sm:px-8 md:px-12 flex gap-2 xs:gap-4 sm:gap-6 items-start xs:items-center justify-start">
        <Image
          src={"/nblog.webp"}
          width={200}
          height={200}
          alt="author"
          className="object-cover rounded-full h-12 w-12 sm:h-24 sm:w-24"
        />
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-bold text-dark dark:text-light">Naila Ameer</h3>
          <p className="italic text-xs xs:text-sm sm:text-base text-dark/80 dark:text-light/80">
            I&apos;m passionate about web development and modern technologies, using frameworks like Next.js to build scalable and responsive websites.
          </p>
        </div>
      </section>

      {/* Main Body of Blog */}
      <p className="text-lg leading-normal text-dark/80 dark:text-light/80">
        The world of web development is evolving rapidly, and Next.js has emerged as one of the most powerful frameworks for building modern, scalable, and dynamic applications. With features like server-side rendering, static site generation, and API routes, Next.js simplifies the development process while boosting performance. In this blog, I&apos;ll share my experiences working on a Next.js project, highlighting the benefits and lessons learned along the way.
        
        Exploring Dynamic Pages: One of the standout features of Next.js is its ability to create dynamic pages with seamless routing. This makes it easier to build content-rich applications that adapt to user needs.

        Integrating CMS Tools: Leveraging headless CMS options like Sanity or Contentful has been instrumental in managing and organizing content efficiently. This integration allows developers to focus on design and functionality without worrying about backend complexities.

        Optimizing Performance: Next.js provides built-in support for image optimization, static exports, and incremental static regeneration, making it ideal for creating fast and responsive websites. These optimizations enhance the user experience and improve SEO rankings.

        Lessons Learned: Throughout this project, I gained hands-on experience with component-based architecture, API handling, and deployment strategies. This journey has not only strengthened my technical skills but also deepened my understanding of modern web development practices.

        Conclusion: Building web applications with Next.js is a rewarding experience that combines simplicity with scalability. Whether you&apos;re a beginner or an experienced developer, Next.js provides the tools and flexibility needed to create impactful websites.
      </p>
    </article>
  );
}
