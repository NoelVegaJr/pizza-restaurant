import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const SlideShow = ({
  images,
}: {
  images: { url: string; caption: string }[];
}) => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const id = setTimeout(() => {
      if (index + 1 === images.length) {
        setIndex(0);
      } else {
        setIndex((prev) => prev + 1);
      }
    }, 5000);

    return () => {
      clearTimeout(id);
    };
  }, [index, images.length]);

  return (
    <div id="slideshow" className="relative flex   w-full  flex-1  ">
      <AnimatePresence initial={true}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="h-full w-full "
          key={index}
          transition={{ opacity: { duration: 0.5 } }}
        >
          <Image
            src={images[index].url}
            className="absolute"
            alt=""
            fill
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      </AnimatePresence>
      {/* </Fade> */}
      <ul className="absolute bottom-10 flex w-full justify-center gap-2 ">
        {images.map((image, i) => {
          return (
            <button
              onClick={() => {
                setIndex(i);
                // setDirection(index - i);
              }}
              key={i}
              className={`flex h-4 w-4 justify-center rounded-full  ${
                i === index ? "bg-slate-400/60" : "bg-slate-300/30"
              }`}
            ></button>
          );
        })}
      </ul>
    </div>
  );
};

export default SlideShow;
