import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Categories, PostCard, PostWidget } from "../components";

export default function Home() {
  const posts = [
    {
      title: "How to get justice",
      excerpt:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
    },
    {
      title: "How to get justice",
      excerpt:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
    },
    {
      title: "How to get justice",
      excerpt:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
    },
  ];
  return (
    <div className="container mx-auto pt-10 mb-8">
      <Head>
        <title>Legal Firm Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard post={post} key={post.title} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relatve top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}
