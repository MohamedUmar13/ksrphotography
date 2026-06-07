import { motion } from "framer-motion";
import ImageSliderComponent from "../../components/ImageSliderComponent";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { getDirectDriveLink } from "../../helpers";

export default function Hindu() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchWedding = async () => {
      const docRef = doc(db, "Weddings", "Hindu");

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
            Where hearts unite before the eternal flame.
          </h1>
          <p className="mt-6 text-lg text-gray-200">
            Sacred chants •  Seven steps • Love offered before Agni          </p>
        </div>
      </section>

      {/* FEATURED STRIP */}
      <section className="py-20 bg-[#f6efe6]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center px-6">

          {/* CONTENT */}
          <div className="space-y-14">

            {/* MAIN STORY */}
            <div>
              <h2 className="text-4xl font-light mb-6 tracking-wide">
                Circles of Fire and Forever
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg max-w-xl">
                The lens becomes a quiet witness to sacred chants, vibrant rituals, and
                the serene beauty of two souls taking their vows before the eternal flame.
                Each moment glows with the warmth of faith, family, and timeless tradition.
              </p>
            </div>

            {/* SOFT DIVIDER */}
            <div className="w-20 h-[1px] bg-gray-400" />

            {/* SECOND STORY */}
            <div>
              <h3 className="text-2xl font-light mb-4 tracking-wide text-gray-800">
                What makes a Hindu marriage sacred
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-xl">
                A Hindu wedding is more than a celebration — it is a sacred passage where
                mantras, fire, and devotion unite two souls in dharma.
                From the giving of the bride to the seven steps of saptapadi,
                every ritual carries centuries of meaning, symbolizing a promise
                of love, respect, and companionship for life.
              </p>
            </div>

            {/* SCRIPTURE QUOTE */}
            <blockquote className="border-l-2 border-gray-400 pl-6 italic text-gray-500 max-w-xl">
              “May your hearts be united, your minds in harmony,
              and your vows forever blessed with faith and peace.”
              <span className="block mt-2 not-italic text-sm text-gray-400">
                — Atharva Veda 14.2.71
              </span>
            </blockquote>

          </div>

          {/* IMAGE — Dominant */}
          <div className="relative">
            <div className="rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src={getDirectDriveLink(weddingData?.portrayImage)}
                alt="Hindu wedding photography"
                className="w-full h-[120vh] object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* EDITORIAL PRELUDE */}
      <section className="relative bg-[#efe3d3] py-36 overflow-hidden">

        {/* subtle grain / texture illusion */}
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_top_left,#000_1px,transparent_1px)] bg-[size:18px_18px]" />

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">

          {/* IMAGE STACK */}
          <motion.div
            className="lg:col-span-7 relative h-[520px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Back image */}
            <img
              src={getDirectDriveLink(weddingData?.twinImage?.[0])}
              alt=""
              className="absolute right-0 top-0 w-[65%] h-[85%] object-cover rounded-[2.5rem] shadow-xl"
            />

            {/* Front image */}
            <img
              src={getDirectDriveLink(weddingData?.twinImage?.[1])}
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
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[0.25em] text-xs text-gray-500 mb-6">
              Sacred Details
            </p>

            <h3 className="text-4xl font-light tracking-wide text-gray-900 mb-8 leading-snug">
              Where stillness<br />meets the sacred flame
            </h3>

            <p className="text-gray-600 leading-relaxed text-lg mb-6 max-w-md">
              Before the first mantra is chanted, time seems to pause —
              the air filled with the scent of sandalwood, the soft rustle of silk,
              and the quiet anticipation of two souls about to unite.
              These moments of serenity hold the heartbeat of a Hindu wedding — graceful,
              spiritual, and eternal.
            </p>

            <p className="text-gray-500 leading-relaxed max-w-md">
              The flicker of Agni. The whisper of blessings.
              The stillness that becomes sacred.
            </p>
          </motion.div>

        </div>
      </section>

      <ImageSliderComponent images={weddingData?.carouselImages?.map(getDirectDriveLink) || []} />

      {/* ROYAL REVEAL */}
      <section className="relative bg-gradient-to-b from-[#2a1c14] via-[#1e140f] to-[#2a1c14] py-40 overflow-hidden">

        {/* Soft glowing background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(216,112,45,0.22),transparent_70%)]" />

        {/* Double gold frame */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-4 right-4 md:left-14 md:right-14 bottom-14 border border-[#c04a1a]/50 rounded-[3rem]" />
          <div className="absolute left-8 right-8 md:left-24 md:right-24 bottom-24 border border-[#c04a1a]/25 rounded-[2.5rem]" />
        </div>

        {/* Content */}
        <div className="relative max-w-5xl mx-auto text-center px-6">

          {/* Divider */}
          <div className="flex items-center justify-center mb-12">
            <div className="w-24 h-[1px] bg-[#c04a1a]/70" />
            <span className="mx-5 text-[#c04a1a] text-2xl">✦</span>
            <div className="w-24 h-[1px] bg-[#c04a1a]/70" />
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-light tracking-wider text-white mb-10">
            Where Hearts Align in the Sacred Flame
          </h2>

          {/* Paragraph */}
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-lg">
            Each photograph is a prayer in light —
            mantras rise with the sacred smoke, hands meet before the agni,
            and two souls promise to walk together in dharma, love, and grace
            across every lifetime to come.
          </p>

          {/* Scripture */}
          <p className="mt-14 text-[#c04a1a] italic tracking-wide">
            “Be thou mine only; let thy heart be devoted to me.
            As the gods unite us, may we share one spirit and one home.”
            — Rig Veda 10.85.44       </p>

        </div>
      </section>

    </>
  );
}
