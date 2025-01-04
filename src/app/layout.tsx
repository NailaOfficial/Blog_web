import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./../components/Navbar";
import ThemeProvider from "./../components/ThemeProvider";
import Footer from "./../components/Footer";
import Container from "./../components/Container"

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "NBLOG: Exploring Modern Web Development with Next.js",
    description: "Dive into the world of web development with NBLOG, your go-to resource for mastering Next.js. Discover the power of server-side rendering, static site generation, and dynamic routing that makes Next.js a favorite among developers. From integrating APIs to building scalable, high-performance applications, our blog covers everything you need to create modern, responsive web experiences. Join us as we share insights, tutorials, and best practices for leveraging Next.js to elevate your development skills. Stay ahead in the ever-evolving tech landscape by exploring our latest posts and resources.",
  };
  

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} bg-light dark:bg-dark `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem = {false}
          disableTransitionOnChange
        >
          <Container>
          <Navbar />
          {children}
          </Container>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
