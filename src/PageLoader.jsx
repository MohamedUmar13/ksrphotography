import { Box, Typography } from "@mui/material";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

export default function PageLoader({ onFinish }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));
  const [done, setDone] = useState(false);

  useEffect(() => {
    const controls = animate(count, 100, {
      duration: 2.5,
      ease: "easeInOut",
      onComplete: () => {
        setDone(true);
        setTimeout(() => {
          onFinish?.(); // 🔥 trigger exit
        }, 500);
      },
    });

    return controls.stop;
  }, [count, onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: done ? 0 : 1 }}
      transition={{ duration: 0.6 }}
      style={{
        position: "fixed",
        inset: 0,
        background: "#0e0e0e",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 2000,
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        
        {/* 🔥 Brand reveal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            sx={{
              color: "#dbc6a3",
              letterSpacing: "0.35em",
              fontSize: "0.9rem",
              mb: 4,
            }}
          >
            KSR PHOTOGRAPHY
          </Typography>
        </motion.div>

        {/* 🔥 Number animation */}
        <Typography
          sx={{
            color: "#fff",
            fontSize: "3rem",
            fontWeight: 600,
            mb: 2,
          }}
        >
          <motion.span>{rounded}</motion.span>%
        </Typography>

        {/* 🔥 Progress bar */}
        <Box
          sx={{
            width: 220,
            height: 2,
            bgcolor: "rgba(255,255,255,0.2)",
            overflow: "hidden",
            mx: "auto",
          }}
        >
          <motion.div
            style={{
              height: "100%",
              background: "#dbc6a3",
              transformOrigin: "left",
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
        </Box>

      </Box>
    </motion.div>
  );
}