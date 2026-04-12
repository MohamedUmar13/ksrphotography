import image1 from "../../assets/images/christian/christianwedding1.jpg";
import image2 from "../../assets/images/christian/christianwedding2.jpg";
import image3 from "../../assets/images/christian/christianwedding3.jpg";
import image4 from "../../assets/images/christian/christianwedding4.jpg";
import image5 from "../../assets/images/christian/christianwedding5.jpg";
import image6 from "../../assets/images/christian/christianwedding6.jpeg";
import image7 from "../../assets/images/christian/christianwedding7.jpg";
import image8 from "../../assets/images/christian/christianwedding8.jpg";
import image9 from "../../assets/images/christian/christianwedding9.jpg";
import { motion } from "framer-motion";
import ImageSliderComponent from "../../components/ImageSliderComponent";
import { useEffect } from "react";


export default function Christian() {

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
            Two hearts, one covenant, framed before God.
          </h1>
          <p className="mt-6 text-lg text-gray-200">
            Faith • Love • Moments blessed in His presence
          </p>
        </div>
      </section>

      {/* FEATURED STRIP */}
      <section className="py-20 bg-[#f5f4f1]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center px-6">

          {/* IMAGE — Dominant */}
          <div className="relative">
            <div className="rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src={image2}
                alt="Christian wedding photography"
                className="w-full h-[120vh] object-cover"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="space-y-14">

            {/* MAIN STORY */}
            <div>
              <h2 className="text-4xl font-light mb-6 tracking-wide">
                Memories under God's Grace
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg max-w-xl">
                Christian weddings are sacred because they are centered on Christ —
                with prayers, blessings, and Scripture reminding the couple that God
                stands at the heart of their covenant.
              </p>
            </div>

            {/* SOFT DIVIDER */}
            <div className="w-20 h-[1px] bg-gray-400" />

            {/* SECOND STORY */}
            <div>
              <h3 className="text-2xl font-light mb-4 tracking-wide text-gray-800">
                What makes a Christian marriage unique
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-xl">
                Christian wedding photography is more than beautiful frames.
                It is about witnessing Christ at work as two lives are joined
                in a holy covenant. Each photograph becomes a quiet testimony —
                whispered prayers, spoken blessings, and the sacred moment when
                God binds a bride and groom together as one.
              </p>
            </div>

            {/* SCRIPTURE QUOTE */}
            <blockquote className="border-l-2 border-gray-400 pl-6 italic text-gray-500 max-w-xl">
              “Therefore what God has joined together, let no one separate.”
              <span className="block mt-2 not-italic text-sm text-gray-400">
                — Matthew 19:6
              </span>
            </blockquote>

          </div>
        </div>
      </section>

      {/* EDITORIAL PRELUDE */}
      <section className="relative bg-[#f7f4ee] py-36 overflow-hidden">

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
              Sacred Details
            </p>

            <h3 className="text-4xl font-light tracking-wide text-gray-900 mb-8 leading-snug">
              Where stillness<br />becomes sacred
            </h3>

            <p className="text-gray-600 leading-relaxed text-lg mb-6 max-w-md">
              In the quiet moments before the ceremony begins, faith settles gently
              into the room. These are the moments we observe with reverence —
              unposed, unspoken, and deeply meaningful.
            </p>

            <p className="text-gray-500 leading-relaxed max-w-md">
              The calm breath before the vows. The prayer before the promise.
              A pause that deserves to be remembered.
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

        </div>
      </section>

      {/* ROYAL REVEAL */}
      <section className="relative bg-gradient-to-b from-[#0b0b0b] via-black to-[#0b0b0b] py-40 overflow-hidden">

        {/* Soft glowing background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,169,81,0.15),transparent_70%)]" />

        {/* Double gold frame */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-14 left-14 right-14 bottom-14 border border-[#c8a951]/50 rounded-[3rem]" />
          <div className="absolute top-24 left-24 right-24 bottom-24 border border-[#c8a951]/25 rounded-[2.5rem]" />
        </div>

        {/* Content */}
        <div className="relative max-w-5xl mx-auto text-center px-6">

          {/* Divider */}
          <div className="flex items-center justify-center mb-12">
            <div className="w-24 h-[1px] bg-[#c8a951]/70" />
            <span className="mx-5 text-[#c8a951] text-2xl">✦</span>
            <div className="w-24 h-[1px] bg-[#c8a951]/70" />
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-light tracking-wider text-white mb-10">
            Where Love Meets the Divine
          </h2>

          {/* Paragraph */}
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-lg">
            Each photograph is a sacred witness —
            vows spoken in faith, hands joined in prayer,
            and a covenant sealed before God.
          </p>

          {/* Scripture */}
          <p className="mt-14 text-[#c8a951] italic tracking-wide">
            “The Lord bless you and keep you.” — Numbers 6:24
          </p>

        </div>
      </section>

      <ImageSliderComponent images={[image5, image6, image7, image8, image9]} />

    </>
  );
}
