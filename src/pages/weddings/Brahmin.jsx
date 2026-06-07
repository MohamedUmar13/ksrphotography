import { motion } from "framer-motion";
import ImageSliderComponent from "../../components/ImageSliderComponent";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { getDirectDriveLink } from "../../helpers";

export default function Brahmin() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchWedding = async () => {
      const docRef = doc(db, "Weddings", "Brahmin");

      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setWeddingData(docSnap.data());
      }
    };

    fetchWedding();
  }, []);

  const [weddingData, setWeddingData] = useState(null);

  return (
    <>
      {/* HERO */}
      <section
        className="relative h-screen w-full bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${getDirectDriveLink(weddingData?.coverImage)})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative text-center text-white max-w-3xl px-6">
          <h1 className="text-5xl md:text-6xl font-light tracking-wide">
            Two hearts, one dharma, joined before the sacred fire.
          </h1>
          <p className="mt-6 text-lg text-gray-200">
            Mantras • Agni • Brahmin stories woven in light          </p>
        </div>
      </section>

      {/* FEATURED STRIP */}
      <section className="py-20 bg-[#f2eee8]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center px-6">

          {/* CONTENT */}
          <div className="space-y-14">

            {/* MAIN STORY */}
            <div>
              <h2 className="text-4xl font-light mb-6 tracking-wide">
                Sacred Circles Around Agni
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg max-w-xl">
                The lens becomes a silent witness to vadhyams, varmalas, and
                the tender reverence of a Brahmin couple circling the agni as
                priests chant timeless mantras and elders shower their blessings.
              </p>
            </div>

            {/* SOFT DIVIDER */}
            <div className="w-20 h-[1px] bg-gray-400" />

            {/* SECOND STORY */}
            <div>
              <h3 className="text-2xl font-light mb-4 tracking-wide text-gray-800">
                What makes a Brahmin marriage unique
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-xl">
                A Brahmin wedding weaves dharma, family, and tradition into every step,
                from the sacred kanyadaan to the seven steps of saptapadi around the fire,
                symbolising a lifelong journey of shared duty and devotion.
              </p>
            </div>

            {/* SCRIPTURE QUOTE */}
            <blockquote className="border-l-2 border-gray-400 pl-6 italic text-gray-500 max-w-xl">
              “For good fortune I take your hand, so that you may reach old age with me as your husband.”
              <span className="block mt-2 not-italic text-sm text-gray-400">
                — Rig Veda 10.85.36
              </span>
            </blockquote>

          </div>

          {/* IMAGE — Dominant */}
          <div className="relative">
            <div className="rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src={getDirectDriveLink(weddingData?.portrayImage)}
                alt="Brahmin wedding photography"
                className="w-full h-[120vh] object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* EDITORIAL PRELUDE */}
      <section className="relative bg-[#ebe4d9] py-36 overflow-hidden">

        {/* subtle grain / texture illusion */}
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_top_left,#000_1px,transparent_1px)] bg-[size:18px_18px]" />

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">

          {/* IMAGE STACK */}
          <motion.div
            className="lg:col-span-7 relative h-[520px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.2 }}
          >
            {/* Back image */}
            <img
              src={getDirectDriveLink(weddingData?.twinImage[0])}
              alt=""
              className="absolute right-0 top-0 w-[65%] h-[85%] object-cover rounded-[2.5rem] shadow-xl"
            />

            {/* Front image */}
            <img
              src={getDirectDriveLink(weddingData?.twinImage[1])}
              alt=""
              className="absolute left-0 bottom-0 w-[55%] h-[70%] object-cover rounded-[2.5rem] shadow-2xl"
            />

          </motion.div>

          {/* TEXT BLOCK */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <p className="uppercase tracking-[0.25em] text-xs text-gray-500 mb-6">
              Sacred Details
            </p>

            <h3 className="text-4xl font-light tracking-wide text-gray-900 mb-8 leading-snug">
              Where silence<br />echoes the divine
            </h3>

            <p className="text-gray-600 leading-relaxed text-lg mb-6 max-w-md">
              In the gentle stillness before the mantras begin, the fragrance of incense,
              the soft rhythm of vadhyams, and the glow of the sacred fire prepare the soul
              for union. These are the moments we capture in quiet devotion — timeless,
              graceful, and pure.
            </p>

            <p className="text-gray-500 leading-relaxed max-w-md">
              The pause before the vows. The flame that bears witness.
              The silence that speaks of eternity.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ROYAL REVEAL */}
      <section className="relative bg-gradient-to-b from-[#1a1411] via-[#120d0b] to-[#1a1411] py-40 overflow-hidden">

        {/* Soft glowing background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(181,122,58,0.18),transparent_70%)]" />

        {/* Double gold frame */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-14 left-14 right-14 bottom-14 border border-[#b57a3a]/50 rounded-[3rem]" />
          <div className="absolute top-24 left-24 right-24 bottom-24 border border-[#b57a3a]/25 rounded-[2.5rem]" />
        </div>

        {/* Content */}
        <div className="relative max-w-5xl mx-auto text-center px-6">

          {/* Divider */}
          <div className="flex items-center justify-center mb-12">
            <div className="w-24 h-[1px] bg-[#b57a3a]/70" />
            <span className="mx-5 text-[#b57a3a] text-2xl">✦</span>
            <div className="w-24 h-[1px] bg-[#b57a3a]/70" />
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-light tracking-wider text-white mb-10">
            Where Souls Unite in Dharma
          </h2>

          {/* Paragraph */}
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-lg">
            Each photograph is a sacred witness —
            mantras echo through the air, hands join before the sacred fire,
            and two souls vow to walk together on the path of dharma.
          </p>

          {/* Scripture */}
          <p className="mt-14 text-[#b57a3a] italic tracking-wide">
            “May you two be of one mind, speak with one voice; may you be united in heart and purpose.”
            — Rig Veda 10.85.42          </p>

        </div>
      </section>

      <ImageSliderComponent images={weddingData?.carouselImages?.map(getDirectDriveLink) || []} />
    </>
  );
}
