import { useScroll } from "framer-motion";
import * as React from "react";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import InitialNavBar from "../components/Navbar/InitialNavBar";
import OnScrollNavBar from "../components/Navbar/OnScrollNavBar";
import SlideShow from "../components/SlideShow";

const images = [
  {
    url: "/rollingdough.avif",
    caption: "test",
  },
  {
    url: "/hotpizza.avif",
    caption: "test",
  },
  {
    url: "/storefrontowner.avif",
    caption: "test",
  },
];

const StoryPage: React.FunctionComponent = (props) => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const { scrollY } = useScroll();

  scrollY.onChange((y) => {
    setScrollPosition(y);
  });

  useEffect(() => {
    console.log(scrollPosition);
  }, [scrollPosition]);

  return (
    <>
      <Layout>
        <section className="flex h-screen flex-col ">
          {scrollPosition === 0 ? <InitialNavBar /> : <OnScrollNavBar />}
          <div className="relative   flex  w-full  flex-1 overflow-hidden">
            <SlideShow images={images} />
            <p
              className="absolute top-1/2 left-1/2 z-30  -translate-y-1/2 -translate-x-1/2 transform text-7xl uppercase text-white"
              style={{ fontFamily: "Special Elite" }}
            >
              Our Story
            </p>
            <div className="absolute h-full w-full bg-black/20" />
          </div>
        </section>

        {/* About */}
        <section className="mt-20 flex flex-col items-center gap-8 px-6 text-center">
          <p
            className="text-center text-5xl uppercase"
            style={{ fontFamily: "Special Elite" }}
          >
            About Prima
          </p>
          <div className="flex max-w-2xl flex-col items-center gap-4">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
              laboriosam nihil fugit fugiat maxime nisi quibusdam, quidem nemo
              architecto aliquam blanditiis recusandae quas consequatur
              assumenda ab tempore! Culpa, earum sunt?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
              laboriosam nihil fugit fugiat maxime nisi quibusdam, quidem nemo
              architecto aliquam blanditiis recusandae quas consequatur
              assumenda ab tempore! Culpa, earum sunt?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
              laboriosam nihil fugit fugiat maxime nisi quibusdam, quidem nemo
              architecto aliquam blanditiis recusandae quas consequatur
              assumenda ab tempore! Culpa, earum sunt?
            </p>
          </div>
        </section>
        <section className="my-20 flex flex-col items-center gap-8 px-6 text-center">
          <p
            className="text-center text-5xl uppercase"
            style={{ fontFamily: "Special Elite" }}
          >
            Chef Michael Scott
          </p>
          <div className="flex max-w-2xl flex-col items-center gap-4">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
              laboriosam nihil fugit fugiat maxime nisi quibusdam, quidem nemo
              architecto aliquam blanditiis recusandae quas consequatur
              assumenda ab tempore! Culpa, earum sunt?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
              laboriosam nihil fugit fugiat maxime nisi quibusdam, quidem nemo
              architecto aliquam blanditiis recusandae quas consequatur
              assumenda ab tempore! Culpa, earum sunt?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
              laboriosam nihil fugit fugiat maxime nisi quibusdam, quidem nemo
              architecto aliquam blanditiis recusandae quas consequatur
              assumenda ab tempore! Culpa, earum sunt?
            </p>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default StoryPage;
