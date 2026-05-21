import { Box, Button, Container, Divider, Grid, Stack, Typography } from "@mui/material";
import { ArrowRight, Award, Camera, Image as ImageIcon, Mail, Users } from "lucide-react";
import heroImage from "../assets/images/hero-home.jpg";
import { useNavigate } from "react-router-dom";
import Counter from "../components/Counter";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const stats = [
  { label: "Shoots Completed", value: 250, icon: Camera },
  { label: "Happy Clients", value: 180, icon: Users },
  { label: "Awards Won", value: 12, icon: Award },
  { label: "Edited Frames", value: 50, icon: ImageIcon },
];

const services = [
  {
    number: "01",
    title: "Wedding Stories",
    description:
      "Emotion-led coverage with cinematic portraits, quiet direction, and a gallery that still feels honest years later.",
  },
  {
    number: "02",
    title: "Portrait Sessions",
    description:
      "Refined personal and family portraits shaped by light, mood, styling, and a calm shooting experience.",
  },
  {
    number: "03",
    title: "Brand Imagery",
    description:
      "Modern visuals for founders, creatives, and businesses that need consistent imagery with editorial polish.",
  },
];

const highlights = [
  {
    title: "Guided, never forced",
    description:
      "We direct with a light touch so every frame feels natural, composed, and unmistakably yours.",
  },
  {
    title: "Luxury visual finish",
    description:
      "Clean tones, rich contrast, and intentional retouching create galleries that feel premium without looking artificial.",
  },
  {
    title: "Built around your story",
    description:
      "From pre-shoot planning to final delivery, every detail is shaped around the mood and message you want to preserve.",
  },
];

export default function HomePage() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const navigate = useNavigate();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // smooth it (important)
  const smoothX = useSpring(x, { stiffness: 100, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 100, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // small movement range (premium feel)
    x.set((mouseX - centerX) * 0.05);
    y.set((mouseY - centerY) * 0.05);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };


  return (
    <Box
      sx={{
        width: "100%",
        // ml: "calc(50% - 50vw)",
        // mr: "calc(50% - 50vw)",
        bgcolor: "#f4efe8",
        color: "#171717",
        overflowX: "hidden",
      }}
    >
      <Box
        sx={{
          position: "relative",
          minHeight: { xs: "auto", md: "100vh" },
          color: "#fff",
          backgroundImage: `linear-gradient(90deg, rgba(11, 11, 11, 0.78) 0%, rgba(11, 11, 11, 0.48) 45%, rgba(11, 11, 11, 0.3) 100%), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(8, 8, 8, 0.15) 0%, rgba(8, 8, 8, 0.55) 100%)",
          }}
        />

        <Container
          maxWidth="xl"
          sx={{
            position: "relative",
            zIndex: 1,
            py: { xs: 12, md: 16 },
          }}
        >
          <Grid container spacing={{ xs: 8, md: 4 }} alignItems="center">
            <Grid item xs={12} md={7}>
              <Stack spacing={3} sx={{ maxWidth: 760 }}>
                <Typography
                  variant="overline"
                  sx={{
                    color: "rgba(255,255,255,0.72)",
                    letterSpacing: "0.42em",
                    fontSize: "0.75rem",
                  }}
                >
                  KSR PHOTOGRAPHY | EST. 2022
                </Typography>

                <Typography
                  variant="h1"
                  sx={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 500,
                    lineHeight: 0.96,
                    fontSize: { xs: "3.4rem", sm: "4.5rem", md: "6.6rem" },
                    letterSpacing: "-0.04em",
                  }}
                >
                  Timeless imagery with a modern editorial edge.
                </Typography>

                <Typography
                  sx={{
                    maxWidth: 620,
                    color: "rgba(255,255,255,0.8)",
                    fontSize: { xs: "1rem", md: "1.15rem" },
                    lineHeight: 1.9,
                  }}
                >
                  We create cinematic wedding, portrait, and brand photography for people
                  who want their story to feel elevated, emotional, and unforgettable.
                </Typography>

                <Stack direction={{ xs: "column", sm: "row" }} spacing={2} pt={1}>
                  <Button
                    variant="contained"
                    endIcon={<ArrowRight size={18} />}
                    sx={{
                      bgcolor: "#dbc6a3",
                      color: "#151515",
                      px: 4,
                      py: 1.7,
                      borderRadius: 999,
                      fontWeight: 600,
                      letterSpacing: "0.14em",
                      "&:hover": { bgcolor: "#e7d5b7" },
                    }}
                  >
                    Explore Portfolio
                  </Button>

                  <Button
                    variant="outlined"
                    sx={{
                      borderColor: "rgba(255,255,255,0.45)",
                      color: "#fff",
                      px: 4,
                      py: 1.7,
                      borderRadius: 999,
                      letterSpacing: "0.14em",
                      "&:hover": {
                        borderColor: "#fff",
                        bgcolor: "rgba(255,255,255,0.08)",
                      }
                    }}
                    onClick={() => navigate('/contact-us')}
                  >
                    Book a Session
                  </Button>
                </Stack>
              </Stack>
            </Grid>

            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  ml: { md: "auto" },
                  maxWidth: 360,
                  bgcolor: "rgba(18, 18, 18, 0.58)",
                  backdropFilter: "blur(18px)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  borderRadius: 6,
                  p: 4,
                  boxShadow: "0 30px 80px rgba(0,0,0,0.28)",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "0.78rem",
                    letterSpacing: "0.32em",
                    color: "rgba(255,255,255,0.65)",
                    mb: 2,
                  }}
                >
                  SIGNATURE EXPERIENCE
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: { xs: "1.8rem", md: "2.2rem" },
                    lineHeight: 1.15,
                    mb: 2,
                  }}
                >
                  Crafted for intimate moments and statement-making frames.
                </Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.76)", lineHeight: 1.8, mb: 3 }}>
                  Based in India and available for destination work, we blend documentary
                  honesty with polished, magazine-inspired portraiture.
                </Typography>
                <Divider sx={{ borderColor: "rgba(255,255,255,0.14)", mb: 3 }} />
                <Stack direction="row" spacing={2} alignItems="center">
                  <Mail size={18} />
                  <Typography sx={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.82)" }}>
                    Inquiries open for 2026 bookings
                  </Typography>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ mt: { xs: -6, md: -8 }, mb: 4, position: "relative", zIndex: 2, }}>
        <Grid container spacing={3}>

          {stats.map(({ icon: Icon, label, value }, index) => (
            <Grid item xs={6} md={3} key={label}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
              >
                <Box
                  sx={{
                    height: "100%",
                    bgcolor: "rgba(255,255,255,0.84)",
                    backdropFilter: "blur(18px)",
                    border: "1px solid rgba(23,23,23,0.08)",
                    borderRadius: 5,
                    px: { xs: 2.5, md: 3 },
                    py: 3,
                    boxShadow: "0 16px 50px rgba(26,18,10,0.08)",
                  }}
                >
                  <Icon size={20} strokeWidth={1.8} color="#9c7f54" />

                  <Typography
                    sx={{
                      mt: 2,
                      fontSize: { xs: "1.8rem", md: "2.2rem" },
                      fontWeight: 700,
                    }}
                  >
                    <Counter end={value} start={true} suffix="+" />
                  </Typography>

                  <Typography
                    sx={{
                      mt: 0.5,
                      color: "rgba(23,23,23,0.65)",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {label}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}

        </Grid>
      </Container>

      <Container maxWidth="xl" sx={{ py: { xs: 0, md: 0 } }}>
        <Grid container spacing={{ xs: 6, md: 9 }} alignItems="center">

          <Grid item xs={12} md={6}>
            <Box
              sx={{ position: "relative", pr: { md: 6 } }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <Box
                component="img"
                src={heroImage}
                alt="Editorial portrait preview"
                sx={{
                  width: "100%",
                  height: { xs: 420, md: 620 },
                  objectFit: "cover",
                  objectPosition: "center",
                  borderRadius: 8,
                  boxShadow: "0 30px 80px rgba(31, 23, 15, 0.18)",
                }}
              />

              {/* 🔥 Floating box with motion */}
              <motion.div
                style={{
                  position: "absolute",
                  right: 0,
                  bottom: 32,
                  x: smoothX,
                  y: smoothY,
                }}
              >
                <Box
                  sx={{
                    width: { xs: 180, md: 240 },
                    bgcolor: "#171717",
                    color: "#fff",
                    p: 3,
                    borderRadius: 5,
                    boxShadow: "0 24px 50px rgba(0,0,0,0.25)",
                  }}
                >
                  <Typography sx={{ color: "#dbc6a3", letterSpacing: "0.24em", fontSize: "0.72rem", mb: 1.5 }}>
                    OUR STYLE
                  </Typography>
                  <Typography sx={{ lineHeight: 1.7, color: "rgba(255,255,255,0.78)" }}>
                    Clean direction, natural emotion, and rich cinematic tones.
                  </Typography>
                </Box>
              </motion.div>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography
              variant="overline"
              sx={{ color: "#9c7f54", letterSpacing: "0.28em", fontSize: "0.76rem" }}
            >
              ABOUT THE STUDIO
            </Typography>
            <Typography
              sx={{
                mt: 2,
                mb: 3,
                fontFamily: "'Playfair Display', serif",
                fontSize: { xs: "2.2rem", md: "3.6rem" },
                lineHeight: 1.02,
                color: "#171717",
              }}
            >
              Photography that feels intentional from first frame to final gallery.
            </Typography>
            <Typography sx={{ color: "rgba(23,23,23,0.7)", lineHeight: 2, mb: 3 }}>
              KSR Photography is built for people who want more than pretty pictures. We
              focus on atmosphere, expression, and visual storytelling that feels elevated
              without losing warmth. The result is a body of work that is both refined and
              deeply personal.
            </Typography>
            <Typography sx={{ color: "rgba(23,23,23,0.7)", lineHeight: 2, mb: 1 }}>
              Every session is shaped with thoughtful planning, flattering light, and an
              editorial eye so your images feel cohesive, memorable, and proudly yours.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="xl" sx={{ py: { xs: 10, md: 14 } }}>
        <Box
          sx={{
            borderRadius: 8,
            overflow: "hidden",
            bgcolor: "#ede2d1",
            border: "1px solid rgba(23,23,23,0.08)",
          }}
        >
          <Grid container>
            <Grid item xs={12} md={7}>
              <Box sx={{ p: { xs: 4, md: 8 } }}>
                <Typography sx={{ color: "#9c7f54", letterSpacing: "0.28em", fontSize: "0.76rem", mb: 2 }}>
                  READY TO BEGIN
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: { xs: "2.2rem", md: "4rem" },
                    lineHeight: 1.02,
                    mb: 3,
                    color: "#171717",
                  }}
                >
                  Let's create images that still feel powerful years from now.
                </Typography>
                <Typography sx={{ color: "rgba(23,23,23,0.72)", lineHeight: 1.9, maxWidth: 620, mb: 4 }}>
                  Tell us about your date, your vision, and the kind of atmosphere you want
                  your photographs to carry. We will shape the rest with you.
                </Typography>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "#171717",
                      color: "#fff",
                      px: 4,
                      py: 1.6,
                      borderRadius: 999,
                      "&:hover": { bgcolor: "#000" },
                    }}
                    onClick={() => navigate('/contact-us')}
                  >
                    Get in Touch
                  </Button>
                  <Button
                    variant="text"
                    endIcon={<Mail size={16} />}
                    sx={{
                      color: "#171717",
                      px: 0,
                      justifyContent: "flex-start",
                      "&:hover": { bgcolor: "transparent", color: "#9c7f54" },
                    }}
                    onClick={() => window.location.href = "mailto:ksrphotography@gmail.com"}
                  >
                    hello@ksrphotography.com
                  </Button>
                </Stack>
              </Box>
            </Grid>

            <Grid item xs={12} md={5}>
              <Box
                component="img"
                src={heroImage}
                alt="Photography showcase"
                sx={{
                  width: "100%",
                  height: "100%",
                  minHeight: 320,
                  objectFit: "cover",
                  objectPosition: "center top",
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

{/* <Grid container spacing={2.5}>
              {highlights.map((item) => (
                <Grid item xs={12} sm={4} key={item.title}>
                  <Box
                    sx={{
                      height: "100%",
                      p: 2.5,
                      borderRadius: 4,
                      border: "1px solid rgba(23,23,23,0.08)",
                      bgcolor: "rgba(255,255,255,0.56)",
                    }}
                  >
                    <Typography sx={{ fontWeight: 700, mb: 1.2 }}>{item.title}</Typography>
                    <Typography sx={{ color: "rgba(23,23,23,0.66)", lineHeight: 1.8, fontSize: "0.95rem" }}>
                      {item.description}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid> */}

// <Box sx={{ bgcolor: "#171717", py: { xs: 10, md: 14 } }}>
//       <Container maxWidth="xl">
//         <Stack spacing={2} sx={{ textAlign: "center", mb: 7 }}>
//           <Typography sx={{ color: "#dbc6a3", letterSpacing: "0.3em", fontSize: "0.76rem" }}>
//             SERVICES
//           </Typography>
//           <Typography
//             sx={{
//               fontFamily: "'Playfair Display', serif",
//               fontSize: { xs: "2.2rem", md: "3.8rem" },
//               lineHeight: 1.05,
//             }}
//           >
//             Distinct photography for meaningful milestones and modern brands.
//           </Typography>
//           <Typography
//             sx={{
//               maxWidth: 760,
//               mx: "auto",
//               color: "rgba(255,255,255,0.7)",
//               lineHeight: 1.9,
//             }}
//           >
//             Whether you are celebrating a once-in-a-lifetime event or shaping a strong
//             visual identity, the experience is tailored to feel seamless and premium.
//           </Typography>
//         </Stack>

//         <Grid container spacing={3}>
//           {services.map((service) => (
//             <Grid item xs={12} md={4} key={service.title}>
//               <Box
//                 sx={{
//                   height: "100%",
//                   p: { xs: 3, md: 4 },
//                   borderRadius: 6,
//                   border: "1px solid rgba(255,255,255,0.08)",
//                   background:
//                     "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
//                   transition: "transform 250ms ease, border-color 250ms ease",
//                   "&:hover": {
//                     transform: "translateY(-6px)",
//                     borderColor: "rgba(219,198,163,0.45)",
//                   },
//                 }}
//               >
//                 <Typography sx={{ color: "#dbc6a3", fontSize: "0.85rem", letterSpacing: "0.24em", mb: 3 }}>
//                   {service.number}
//                 </Typography>
//                 <Typography sx={{ fontSize: "1.45rem", fontWeight: 600, mb: 2 }}>
//                   {service.title}
//                 </Typography>
//                 <Typography sx={{ color: "rgba(255,255,255,0.68)", lineHeight: 1.9, mb: 4 }}>
//                   {service.description}
//                 </Typography>
//                 <Button
//                   endIcon={<ArrowRight size={16} />}
//                   sx={{
//                     p: 0,
//                     color: "#fff",
//                     justifyContent: "flex-start",
//                     letterSpacing: "0.12em",
//                     "&:hover": { bgcolor: "transparent", color: "#dbc6a3" },
//                   }}
//                 >
//                   Learn More
//                 </Button>
//               </Box>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
