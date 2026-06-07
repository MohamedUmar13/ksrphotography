import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import FastImage from "../components/FastImage";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { getDirectDriveLink } from "../helpers";

const reviews = [
  {
    id: 1,
    clientName: "Aarav & Meera",
    category: "Temple Wedding",
    quote:
      "Every frame felt like it belonged in a timeless film. Nothing felt posed, yet everything looked beautiful.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    size: "portrait",
  },

  {
    id: 2,
    clientName: "Diya Raman",
    category: "Editorial Portrait",
    quote:
      "The photographs carried emotion in a way words simply cannot.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
    size: "landscape",
  },

  {
    id: 3,
    clientName: "Vikram Studio",
    category: "Architecture",
    quote:
      "The eye for light and composition transformed our entire visual identity.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    size: "square",
  },

  {
    id: 4,
    clientName: "Nila & Arjun",
    category: "Beach Wedding",
    quote:
      "Looking through the gallery felt like reliving the day itself.",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
    size: "portrait",
  },

  {
    id: 5,
    clientName: "Ananya",
    category: "Fashion Editorial",
    quote:
      "Elegant, cinematic, and deeply personal. Nothing felt generic.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop",
    size: "landscape",
  },
];

// displayedReviews moved inside component

export default function Reviews() {

  const [photos, setPhotos] = useState([]);
  const displayedReviews = photos.length ? [...photos, ...photos] : [...reviews, ...reviews];

  useEffect(() => {

    const fetchEvent = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Reviews"));

        const reviewData = querySnapshot.docs.map((doc, index) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setPhotos(reviewData);

      } catch (error) {
        console.log("Error fetching gallery:", error);
      }
    };

    fetchEvent();
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-zinc-900 via-[#0b0b0b] to-black py-12">

      {/* Ambient Lights */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/5 blur-[180px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-white/5 blur-[180px]" />

      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')",
        }}
      />

      {/* Heading */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mb-20">
        <p className="uppercase tracking-[0.4em] text-zinc-500 text-xs mb-5">
          Client Stories
        </p>

        <h2 className="text-white bg-clip-text text-6xl md:text-8xl font-light leading-tight bg-gradient-to-r from-indigo-300 via-purple-400 to-pink-300">
          Moments remembered <br />
          <span className="italic text-zinc-400 font-serif">
            beyond photographs
          </span>
        </h2>
      </div>

      {/* Floating Words */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <span className="absolute top-24 left-10 text-white/5 text-6xl italic">
          timeless
        </span>

        <span className="absolute bottom-20 right-16 text-white/5 text-5xl italic">
          cinematic
        </span>

        <span className="absolute top-1/2 left-1/2 text-white/5 text-7xl italic -translate-x-1/2">
          emotion
        </span>
      </div>

      {/* Infinite Scroll */}
      <div className="relative">
        <motion.div
          className="flex gap-8 w-max"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
          }}
        >
          {displayedReviews.map((review, index) => (
            <div
              key={index}
              className="
      relative
      shrink-0
      w-[340px]
      rounded-[2rem]
      border border-white/10
      bg-white/[0.04]
      backdrop-blur-xl
      overflow-hidden
      shadow-[0_20px_60px_rgba(0,0,0,0.35)]
      group
      transition-all duration-500
      hover:-translate-y-2
      hover:border-white/20
    "
            >
              {/* Image */}
              <div className="p-5 pb-0">
                <div className="relative h-[150px] overflow-hidden rounded-[1.5rem]">
                  <FastImage
                    src={getDirectDriveLink(review.image)}
                    alt={review.clientName}
                    className="
            w-full
            h-full
            object-cover
            scale-100
            group-hover:scale-105
            transition-transform
            duration-[1500ms]
          "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative">
                <Quote
                  className="absolute top-5 right-5 text-white/10"
                  size={48}
                  strokeWidth={1}
                />

                <p className="text-zinc-300 text-[15px] leading-7 font-light mb-6 relative z-10">
                  “{review.quote}”
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 shrink-0">
                    <FastImage
                      src={getDirectDriveLink(review.image)}
                      alt={review.clientName}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="text-white text-base tracking-wide">
                      {review.clientName}
                    </h3>

                    <p className="text-zinc-500 uppercase tracking-[0.25em] text-[10px] mt-1">
                      {review.category}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}