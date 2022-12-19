import { type NextPage } from "next";
import Image from "next/image";
import { trpc } from "../utils/trpc";
import SlideShow from "../components/SlideShow";
import Layout from "../components/Layout";
import Link from "next/link";

const images = [
  {
    url: "/slide-1.avif",
    caption: "test",
  },
  {
    url: "/hotpizza.avif",
    caption: "test",
  },
  {
    url: "/slide-2.avif",
    caption: "test",
  },
  {
    url: "/slide-2.avif",
    caption: "test",
  },
];

const Home: NextPage = () => {
  return (
    <>
      <Layout slideShow={<SlideShow images={images} />}>
        <div className="flex flex-col">
          <section className="flex">
            <div className="relative  w-1/2" style={{ height: "550px" }}>
              <Image
                src={"/pizza.avif"}
                className="absolute"
                fill
                alt=""
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="flex w-1/2 items-center justify-center">
              <div className="flex flex-col gap-16">
                <p
                  className="text-center text-4xl uppercase"
                  style={{ fontFamily: "Special Elite" }}
                >
                  Menus
                </p>
                <Link
                  href="/menus"
                  className="rounded-sm border border-black py-2 px-4 font-semibold uppercase transition-all duration-300 hover:bg-yellow-600"
                >
                  View Menus
                </Link>
              </div>
            </div>
          </section>

          <section
            className="relative flex w-full items-center justify-center"
            style={{ height: "550px" }}
          >
            <Image
              src="/behindscenes.avif"
              alt=""
              fill
              className="absolute -z-50"
            />
            <div className="absolute h-full w-full bg-black/30"></div>
            <div className="z-30 flex flex-col items-center gap-4 text-center">
              <p
                className="text-3xl font-semibold uppercase text-white md:text-4xl"
                style={{ fontFamily: "Special Elite" }}
              >
                BEHIND THE SCENES
              </p>
              <Link
                href="#"
                className="w-fit rounded-sm border border-white py-2 px-4 text-lg font-semibold uppercase text-white transition-all duration-300 hover:bg-white hover:text-black"
              >
                View More
              </Link>
            </div>
          </section>

          <section className="flex">
            <div className="flex w-1/2 items-center justify-center">
              <div className="flex flex-col items-center gap-16">
                <p
                  className="text-center text-3xl uppercase md:text-4xl"
                  style={{ fontFamily: "Special Elite" }}
                >
                  Our Story
                </p>
                <Link
                  href="/story"
                  className="w-fit rounded-sm border border-black py-2 px-4 text-center font-semibold uppercase transition-all duration-300 hover:bg-yellow-600"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative  w-1/2" style={{ height: "550px" }}>
              <Image
                src={"/owner.avif"}
                className="absolute"
                fill
                alt=""
                style={{ objectFit: "cover" }}
              />
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default Home;
