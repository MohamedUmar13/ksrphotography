import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Camera, Heart, Sparkles } from "lucide-react";
import FastImage from "../components/FastImage";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { getDirectDriveLink } from "../helpers";

export default function AboutUsPage() {

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchAboutPage = async () => {
      const docRef = doc(db, "Pages", "ABOUT-US");

      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {

        const data = docSnap.data();

        setAboutUsData(data);

      }
    };

    fetchAboutPage();
  }, []);

  const [aboutUsData, setAboutUsData] = useState(null);

  // Custom Cursor (Smooth)
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = React.useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div ref={containerRef} className="bg-zinc-950 text-zinc-100 min-h-screen selection:bg-zinc-800 selection:text-white font-sans overflow-hidden">

      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full mix-blend-difference pointer-events-none z-50 items-center justify-center hidden md:flex"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 2.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      />

      {/* HERO SECTION */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div style={{ y }} className="w-full h-full origin-top">
            <FastImage
              src={aboutUsData?.coverImage}
              alt="Studio"
              className="w-full h-[120%] object-cover opacity-40 brightness-75 grayscale-[30%]"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter mb-6">
              Capturing the <br />
              <span className="italic font-serif text-zinc-400">Invisible</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
              We don't just take photographs. We preserve the fleeting poetry of human connection, turning transient moments into timeless legacy.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <span className="text-xs tracking-widest uppercase">Scroll to explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-zinc-500 to-transparent" />
        </motion.div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section className="py-32 px-6 md:px-12 max-w-[90rem] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">

          <div className="lg:col-span-5 lg:col-start-2 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">
                The Art of <br />
                <span className="italic font-serif text-zinc-400">Observation</span>
              </h2>
              <div className="space-y-6 text-zinc-400 text-lg font-light leading-relaxed">
                <p>
                  At KSR Photography, our approach is rooted in quiet observation. We believe the most profound images are found in the spaces between formal poses—a stolen glance, a nervous breath, a sudden burst of genuine laughter.
                </p>
                <p>
                  With an editorial eye and a documentary heart, we blend into the background to capture the authentic narrative of your day. The result is a curated collection of visual memories that feel as real as they did in the moment.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-[3/4] rounded-sm overflow-hidden"
            >
              <FastImage src={aboutUsData?.philosophyImage} alt="Philosophy" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </motion.div>
          </div>

        </div>
      </section>

      {/* APPROACH CARDS / LIST */}
      <section className="py-32 bg-zinc-900/30 border-y border-zinc-800/50 relative overflow-hidden">
        {/* Subtle ambient light */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-zinc-800/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[90rem] mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20 text-center"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-medium block mb-4">
              Core Values
            </span>
            <h2 className="text-4xl md:text-5xl font-light">Our <span className="italic font-serif text-zinc-400">Pillars</span></h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: <Heart strokeWidth={1} className="w-8 h-8" />,
                title: "Authentic Emotion",
                desc: "We prioritize feeling over perfection. True beauty lies in the raw, unscripted moments."
              },
              {
                icon: <Camera strokeWidth={1} className="w-8 h-8" />,
                title: "Editorial Aesthetic",
                desc: "Drawing inspiration from high fashion and cinema to deliver timeless, elevated visuals."
              },
              {
                icon: <Sparkles strokeWidth={1} className="w-8 h-8" />,
                title: "Unobtrusive Presence",
                desc: "We document your story gracefully, allowing you to remain fully present in your experience."
              }
            ].map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-8 border border-zinc-800/60 bg-zinc-900/20 backdrop-blur-sm rounded-[2rem] group hover:border-zinc-600 hover:bg-zinc-800/40 transition-all duration-500"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="text-zinc-500 group-hover:text-zinc-300 transition-colors duration-500 mb-6">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-medium mb-4 text-zinc-200">{pillar.title}</h3>
                <p className="text-zinc-400 font-light leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* THE PROCESS */}
      <section className="py-32 px-6 md:px-12 max-w-[90rem] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-medium block mb-4">
              Our Process
            </span>
            <h2 className="text-4xl md:text-5xl font-light mb-8">The <span className="italic font-serif text-zinc-400">Experience</span></h2>
            <p className="text-zinc-400 text-lg font-light leading-relaxed mb-12">
              From our first conversation to the delivery of your final gallery, every step is intentionally designed to be seamless, collaborative, and inspiring.
            </p>

            <div className="space-y-10">
              {[
                { step: "01", title: "Connection", desc: "We begin by understanding your vision, aesthetic preferences, and the unique dynamics of your story." },
                { step: "02", title: "Curation", desc: "On the day, we artfully capture the unfolding narrative, balancing directed portraits with spontaneous documentary." },
                { step: "03", title: "Creation", desc: "Each image is meticulously edited in our signature style, resulting in a cohesive, cinematic collection." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 group cursor-default" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
                  <div className="text-sm font-medium text-zinc-600 group-hover:text-zinc-300 transition-colors pt-1 font-serif italic">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-zinc-200 mb-2">{item.title}</h4>
                    <p className="text-zinc-400 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-zinc-900 relative group">
              <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-700" />
              <FastImage
                src={aboutUsData?.processImage}
                alt="Process"
                className="w-full h-full object-cover object-right opacity-80 group-hover:scale-105 transition-transform duration-1000"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-l border-b border-zinc-700 pointer-events-none hidden md:block rounded-bl-[2rem]" />
            <div className="absolute -top-6 -right-6 w-32 h-32 border-r border-t border-zinc-700 pointer-events-none hidden md:block rounded-tr-[2rem]" />
          </motion.div>

        </div>
      </section>

    </div>
  );
}