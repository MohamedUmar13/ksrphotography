import image1 from "../../assets/images/engagement/engagement1.jpg";
import image2 from "../../assets/images/engagement/engagement2.jpg";
import image3 from "../../assets/images/engagement/engagement3.jpg";
import image4 from "../../assets/images/engagement/engagement4.jpeg";
import image5 from "../../assets/images/engagement/engagement5.jpg";
import image6 from "../../assets/images/engagement/engagement6.jpg";
import image7 from "../../assets/images/engagement/engagement7.jpg";
import image8 from "../../assets/images/engagement/engagement8.jpg";
import image9 from "../../assets/images/engagement/engagement9.jpg";
import { motion } from "framer-motion";
import ImageSliderComponent from "../../components/ImageSliderComponent";
import { useEffect } from "react";


export default function Engagement() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      {/* HERO */}
      <section
        className="relative h-screen w-full bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${image1})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative text-center text-white max-w-3xl px-6">
          <h1 className="text-5xl md:text-6xl font-light tracking-wide">
            Where two promises meet one destiny.
          </h1>
          <p className="mt-6 text-lg text-gray-200">
            Rings exchanged • Smiles shared • A journey of love begins          </p>
        </div>
      </section>

      {/* FEATURED STRIP */}
      <section className="py-20 bg-[#f8f6f3]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center px-6">

          {/* CONTENT */}
          <div className="space-y-14">

            {/* MAIN STORY */}
            <div>
              <h2 className="text-4xl font-light mb-6 tracking-wide">
                Promises of Forever Begin Here
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg max-w-xl">
                The lens becomes a witness to tender glances, exchanged rings, and soft laughter —
                the quiet joy of two hearts choosing one path.
                Each moment shines with love, hope, and the promise of all that’s yet to come.
              </p>
            </div>

            {/* SOFT DIVIDER */}
            <div className="w-20 h-[1px] bg-gray-400" />

            {/* SECOND STORY */}
            <div>
              <h3 className="text-2xl font-light mb-4 tracking-wide text-gray-800">
                What makes an engagement special
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-xl">
                An engagement marks the first promise of togetherness — a moment where two souls
                commit to walk hand in hand toward a shared destiny. Surrounded by blessings,
                laughter, and family, it symbolizes the union of hearts before the vows,
                and the joyful beginning of a lifelong bond.
              </p>
            </div>

            {/* SCRIPTURE QUOTE */}
            <blockquote className="border-l-2 border-gray-400 pl-6 italic text-gray-500 max-w-xl">
              “May your love be the quiet strength that carries you forward,
              your laughter the light that fills every tomorrow.”
              <span className="block mt-2 not-italic text-sm text-gray-400">
                — Anonymous
              </span>
            </blockquote>

          </div>

          {/* IMAGE — Dominant */}
          <div className="relative">
            <div className="rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src={image2}
                alt="Engagement photography"
                className="w-full h-[120vh] object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* EDITORIAL PRELUDE */}
      <section className="relative bg-[#f1ede8] py-36 overflow-hidden">

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
              src={image3}
              alt=""
              className="absolute right-0 top-0 w-[65%] h-[85%] object-cover rounded-[2.5rem] shadow-xl"
            />

            {/* Front image */}
            <img
              src={image4}
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
              Precious Moments
            </p>

            <h3 className="text-4xl font-light tracking-wide text-gray-900 mb-8 leading-snug">
              Where stillness<br />speaks of forever
            </h3>

            <p className="text-gray-600 leading-relaxed text-lg mb-6 max-w-md">
              Before the rings are exchanged and promises are spoken, time softens —
              eyes meet, smiles linger, and hearts quietly affirm what words cannot say.
              These fleeting moments carry the warmth of new beginnings — tender,
              genuine, and timeless.
            </p>

            <p className="text-gray-500 leading-relaxed max-w-md">
              The pause before the promise. The glance that says it all.
              The stillness that begins a lifetime.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ROYAL REVEAL */}
      <section className="relative bg-gradient-to-b from-[#1c1a1b] via-[#151314] to-[#1c1a1b] py-40 overflow-hidden">

        {/* Soft glowing background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(196,139,159,0.22),transparent_70%)]" />

        {/* Double gold frame */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-14 left-14 right-14 bottom-14 border border-[#c48b9f]/50 rounded-[3rem]" />
          <div className="absolute top-24 left-24 right-24 bottom-24 border border-[#c48b9f]/25 rounded-[2.5rem]" />
        </div>

        {/* Content */}
        <div className="relative max-w-5xl mx-auto text-center px-6">

          {/* Divider */}
          <div className="flex items-center justify-center mb-12">
            <div className="w-24 h-[1px] bg-[#c48b9f]/70" />
            <span className="mx-5 text-[#c48b9f] text-2xl">✦</span>
            <div className="w-24 h-[1px] bg-[#c48b9f]/70" />
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-light tracking-wider text-white mb-10">
            Where Hearts Align in Promise
          </h2>

          {/* Paragraph */}
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-lg">
            Each photograph is a reflection of quiet joy —
            smiles exchanged, hands intertwined, and hearts meeting in the warmth of a shared dream.
            This is the moment where forever begins — filled with hope, love, and a promise yet unfolding.
          </p>

          {/* Scripture */}
          <p className="mt-14 text-[#c48b9f] italic tracking-wide">
            “In your eyes, I find my tomorrow; in your promise, I find my home.”
            <span className="block mt-2 not-italic text-sm text-gray-400">
              — Anonymous
            </span>      </p>

        </div>
      </section>

      <ImageSliderComponent images={[image5, image6, image7, image8, image9]} />
    </>
  );
}
