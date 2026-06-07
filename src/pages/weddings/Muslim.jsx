import { motion } from "framer-motion";
import ImageSliderComponent from "../../components/ImageSliderComponent";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { getDirectDriveLink } from "../../helpers";
import FastImage from "../../components/FastImage";

export default function Muslim() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchWedding = async () => {
      const docRef = doc(db, "Weddings", "Muslim");

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
            Bound by Nikah, blessed by the Most Merciful.
          </h1>
          <p className="mt-6 text-lg text-gray-200">
            Duas • Barakah • Moments written by Almighty
          </p>
        </div>
      </section>

      {/* FEATURED STRIP */}
      <section className="py-20 bg-[#f3f2ee]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center px-6">

          {/* IMAGE — Dominant */}
          <div className="relative">
            <div className="rounded-[2rem] overflow-hidden shadow-2xl">
                <FastImage
                  src={weddingData?.portrayImage}
                  alt="Muslim wedding photography"
                  className="w-full h-[120vh] object-cover"
                />
            </div>
          </div>

          {/* CONTENT */}
          <div className="space-y-14">

            {/* MAIN STORY */}
            <div>
              <h2 className="text-4xl font-light mb-6 tracking-wide">
                Memories under Allah’s Blessing
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg max-w-xl">
                A Nikah is sacred because it is founded upon faith and guided by the will of Allah —
                with duas, vows, and the recitation of His name at every step, reminding the couple
                that their union is written and blessed by Him.
              </p>
            </div>

            {/* SOFT DIVIDER */}
            <div className="w-20 h-[1px] bg-gray-400" />

            {/* SECOND STORY */}
            <div>
              <h3 className="text-2xl font-light mb-4 tracking-wide text-gray-800">
                What makes a Nikah unique
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-xl">
                Muslim wedding photography goes beyond documenting rituals — it captures
                the serenity of faith and the beauty of surrender to Allah’s will.
                Each frame becomes a reflection of sacred intention — the quiet recitation
                of duas, the signing of the Nikah, and the profound peace that follows
                when two hearts unite in the name of Allah.
              </p>
            </div>

            {/* SCRIPTURE QUOTE */}
            <blockquote className="border-l-2 border-gray-400 pl-6 italic text-gray-500 max-w-xl">
              “And He placed between you affection and mercy.”
              <span className="block mt-2 not-italic text-sm text-gray-400">
                — Qur’an 30:21
              </span>
            </blockquote>

          </div>
        </div>
      </section>

      {/* EDITORIAL PRELUDE */}
      <section className="relative bg-[#ebe9e1] py-36 overflow-hidden">

        {/* subtle grain / texture illusion */}
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_top_left,#000_1px,transparent_1px)] bg-[size:18px_18px]" />

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">

          {/* TEXT BLOCK */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[0.25em] text-xs text-gray-500 mb-6">
              Sacred Moments
            </p>

            <h3 className="text-4xl font-light tracking-wide text-gray-900 mb-8 leading-snug">
              Where silence<br />embraces devotion
            </h3>

            <p className="text-gray-600 leading-relaxed text-lg mb-6 max-w-md">
              In the quiet moments before the Nikah begins, soft recitations of duas fill the air,
              and hearts rest in remembrance of Allah. These are the moments we capture with reverence —
              pure, graceful, and guided by faith.
            </p>

            <p className="text-gray-500 leading-relaxed max-w-md">
              The pause before the Ameen. The whisper of a prayer.
              The peace that descends when love is sealed by His will.
            </p>
          </motion.div>

          {/* IMAGE STACK */}
          <motion.div
            className="lg:col-span-7 relative h-[520px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Back image */}
              <FastImage
                src={weddingData?.twinImage?.[0]}
                alt=""
                className="absolute right-0 top-0 w-[65%] h-[85%] object-cover rounded-[2.5rem] shadow-xl"
              />

            {/* Front image */}
              <FastImage
                src={weddingData?.twinImage?.[1]}
                alt=""
                className="absolute left-0 bottom-0 w-[55%] h-[70%] object-cover rounded-[2.5rem] shadow-2xl"
              />

          </motion.div>

        </div>
      </section>

      {/* ROYAL REVEAL */}
      <section className="relative bg-gradient-to-b from-[#0f1412] via-[#0b100e] to-[#0f1412] py-40 overflow-hidden">

        {/* Soft glowing background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(122,143,106,0.18),transparent_70%)]" />

        {/* Double gold frame */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-14 left-14 right-14 bottom-14 border border-[#7a8f6a]/50 rounded-[3rem]" />
          <div className="absolute top-24 left-24 right-24 bottom-24 border border-[#7a8f6a]/25 rounded-[2.5rem]" />
        </div>

        {/* Content */}
        <div className="relative max-w-5xl mx-auto text-center px-6">

          {/* Divider */}
          <div className="flex items-center justify-center mb-12">
            <div className="w-24 h-[1px] bg-[#7a8f6a]/70" />
            <span className="mx-5 text-[#7a8f6a] text-2xl">✦</span>
            <div className="w-24 h-[1px] bg-[#7a8f6a]/70" />
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-light tracking-wider text-white mb-10">
            Where Faith Meets Forever
          </h2>

          {/* Paragraph */}
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-lg">
            Each photograph is a sacred witness —
            duas whispered in love, hearts joined under the gaze of the Almighty,
            and a Nikah sealed by the mercy of Allah.
          </p>

          {/* Scripture */}
          <p className="mt-14 text-[#7a8f6a] italic tracking-wide">
            “And He placed between you affection and mercy.” — Qur’an 30:21
          </p>

        </div>
      </section>

      <ImageSliderComponent images={weddingData?.carouselImages?.map(getDirectDriveLink) || []} />

    </>
  );
}
