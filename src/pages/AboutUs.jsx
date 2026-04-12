import React from "react";
import {
    Card,
    CardContent,
    Typography,
    Box,
    Grid,
    Container,
} from "@mui/material";
import aboutUs from "../assets/images/about-us.png";
import { Camera, Heart, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutUsPage() {

    // 🔥 Custom Cursor
    const [pos, setPos] = React.useState({ x: 0, y: 0 });

    React.useEffect(() => {
        const move = (e) => setPos({ x: e.clientX, y: e.clientY });
        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, []);

    return (
        <Box className="w-full bg-[#0a0a0a] text-white overflow-hidden">

            {/* CUSTOM CURSOR */}
            <Box
                className="fixed top-0 left-0 w-5 h-5 rounded-full bg-white mix-blend-difference pointer-events-none z-50"
                style={{
                    transform: `translate(${pos.x}px, ${pos.y}px)`,
                }}
            />

            {/* HERO */}
            <Box className="relative h-[90vh] w-full overflow-hidden">
                <img
                    src={aboutUs}
                    alt="Hero"
                    className="absolute w-full h-full object-cover scale-110"
                />

                <Box className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90 flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-center px-6"
                    >
                        <Typography
                            variant="h2"
                            sx={{ fontFamily: "'Playfair Display', serif" }}
                            className="mb-4"
                        >
                            Capturing Stories Through Light
                        </Typography>

                        <Typography className="text-gray-300 max-w-xl mx-auto text-lg">
                            Every frame tells a story. Every moment becomes timeless.
                        </Typography>
                    </motion.div>
                </Box>
            </Box>

            {/* FULLSCREEN IMAGE TRANSITION */}
            <Box className="h-screen w-full overflow-hidden">
                <motion.img
                    src={aboutUs}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.2 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                />
            </Box>

            {/* ABOUT */}
            <Container maxWidth="md" className="py-32 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Typography
                        variant="h4"
                        sx={{ fontFamily: "'Playfair Display', serif" }}
                        className="mb-6"
                    >
                        The Art Behind Every Frame
                    </Typography>

                    <Typography className="text-gray-400 leading-relaxed">
                        At KSR Photography, we believe every moment holds a story waiting to
                        be told. We blend technical precision with real emotion to capture
                        images that feel alive.
                        <br /><br />
                        Whether it's a quiet glance or a powerful celebration, our goal is
                        simple — create visuals that stay with you forever.
                    </Typography>
                </motion.div>
            </Container>

            {/* PHOTOGRAPHER */}
            <Container maxWidth="lg" className="py-24">
                <Grid container spacing={10} alignItems="center">

                    <Grid item xs={12} md={6}>
                        <motion.div
                            initial={{ opacity: 0, x: -80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <Box className="relative">
                                <img
                                    src={aboutUs}
                                    alt="Photographer"
                                    className="rounded-xl shadow-[0_20px_80px_rgba(0,0,0,0.6)] w-full grayscale hover:grayscale-0 transition duration-700"
                                />
                                <Box className="absolute -bottom-5 -right-5 w-full h-full border border-gray-800 -z-10" />
                            </Box>
                        </motion.div>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <motion.div
                            initial={{ opacity: 0, x: 80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <Typography className="uppercase tracking-widest text-gray-500 text-sm">
                                Meet the Photographer
                            </Typography>

                            <Typography
                                variant="h4"
                                sx={{ fontFamily: "'Playfair Display', serif" }}
                                className="mt-2 mb-6"
                            >
                                The Eye Behind the Lens
                            </Typography>

                            <Typography className="text-gray-400 leading-loose mb-4">
                                My journey began with curiosity — how light shapes emotion.
                            </Typography>

                            <Typography className="text-gray-400 leading-loose">
                                Today, I capture real, unplanned moments that matter the most.
                            </Typography>
                        </motion.div>
                    </Grid>

                </Grid>
            </Container>

            {/* PREMIUM CARDS */}
            <Box className="bg-[#111] py-24">
                <Container maxWidth="lg" className="!max-w-6xl">
                    <Grid container spacing={4} justifyContent="center">
                        {[
                            {
                                title: "Authenticity First",
                                desc: "Real emotions over poses.",
                                icon: <Heart size={30} />,
                            },
                            {
                                title: "Technical Excellence",
                                desc: "Professional gear and editing.",
                                icon: <ShieldCheck size={30} />,
                            },
                            {
                                title: "Creative Partnership",
                                desc: "We bring your vision to life.",
                                icon: <Camera size={30} />,
                            },
                        ].map((item, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index} className="flex justify-center">

                                <motion.div
                                    whileHover={{ y: -12, scale: 1.03 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Card className="w-full max-w-[320px] h-full flex flex-col border border-gray-800 rounded-2xl bg-[#111] hover:bg-[#1a1a1a] relative overflow-hidden">

                                        {/* Glow */}
                                        <Box className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 bg-gradient-to-br from-white/10 to-transparent" />

                                        <CardContent className="p-8 text-center flex flex-col flex-grow relative z-10">

                                            <Box className="mb-4 text-gray-500 flex justify-center group-hover:scale-110 transition">
                                                {item.icon}
                                            </Box>

                                            <Typography variant="h6" className="mb-2">
                                                {item.title}
                                            </Typography>

                                            <Typography className="text-gray-400 flex-grow">
                                                {item.desc}
                                            </Typography>

                                        </CardContent>
                                    </Card>
                                </motion.div>

                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* PROCESS */}
            <Container maxWidth="lg" className="py-10">

                <Typography
                    variant="h4"
                    sx={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-center mb-4"
                >
                    The Journey
                </Typography>

                <div className="w-full flex justify-center pt-5 pb-8">
                    <Typography className="text-gray-400 text-center max-w-xl mx-auto mb-16">
                        From idea to final delivery, every step is crafted to give you a seamless and memorable experience.
                    </Typography>
                </div>

                {/* TIMELINE */}
                <Box className="relative w-full">

                    {/* LINE */}
                    <Box className="absolute top-5 left-0 w-full h-[1px] bg-gray-700" />

                    <Grid container justifyContent="space-between">

                        {[
                            { title: "Vision", desc: "Understanding your story." },
                            { title: "Session", desc: "Capturing real moments." },
                            { title: "Gallery", desc: "Delivering timeless visuals." },
                        ].map((item, i) => (

                            <Grid item xs={4} key={i} className="text-center relative">

                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="flex flex-col items-center"
                                >

                                    {/* DOT */}
                                    <Box className="w-4 h-4 bg-white rounded-full z-10 mb-4" />

                                    {/* TITLE */}
                                    <Typography variant="h6" className="mt-1">
                                        {item.title}
                                    </Typography>

                                    {/* DESC */}
                                    <Typography className="text-gray-400 text-sm max-w-[180px]">
                                        {item.desc}
                                    </Typography>

                                </motion.div>

                            </Grid>

                        ))}

                    </Grid>

                </Box>

            </Container>

        </Box>
    );
}