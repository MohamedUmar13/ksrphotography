import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function BottomBar() {

    const navigate = useNavigate();

    const quickLinks = [
        { label: 'Home', path: '/' },
        { label: 'Contact us', path: '/about-us' }
    ];

    return (
        <Box
            component="footer"
            sx={{
                background:
                    "radial-gradient(ellipse at top, #1a1a1a 0%, #0b0b0b 60%)",
                borderTop: "1px solid rgba(202,168,77,0.25)",
                color: "white",
                px: { xs: 2, md: 8 },
                py: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end"
            }}
        >

            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                }}
            >
                <Box>
                    <Typography
                        variant="h5"
                        sx={{
                            letterSpacing: "0.15em",
                            mb: 1,
                            textTransform: "uppercase"
                        }}
                    >
                        Ksr Photography
                    </Typography>

                    <Box
                        sx={{
                            width: 60,
                            height: "2px",
                            backgroundColor: "rgba(202,168,77,0.9)",
                            mb: 3,
                        }}
                    />

                    <Typography
                        variant="body2"
                        sx={{
                            opacity: 0.75,
                            maxWidth: 420,
                            lineHeight: 1.8,
                            mb: 0
                        }}
                    >
                        We don’t just take photographs.
                        <br />
                        We preserve emotions, moments, and timeless stories.
                    </Typography>
                </Box>

                <Box>
                    <Typography
                        variant="body2"
                        sx={{
                            opacity: 0.5,
                            letterSpacing: "0.05em",
                        }}
                    >
                        © {new Date().getFullYear()} KSR Photography · All Rights Reserved
                    </Typography>
                </Box>

                <Box>
                    <Typography
                        variant="h5"
                        sx={{
                            letterSpacing: "0.15em",
                            mb: 1,
                            textTransform: "uppercase"
                        }}
                    >
                        Quick Links
                    </Typography>

                    <Box
                        sx={{
                            width: 60,
                            height: "2px",
                            backgroundColor: "rgba(202,168,77,0.9)",
                            mb: 3,
                        }}
                    />

                    <Typography
                        className="flex flex-col"
                        variant="body2"
                        sx={{
                            opacity: 0.75,
                            maxWidth: 420,
                            lineHeight: 1.8,
                            mb: 0
                        }}
                    >
                        {
                            quickLinks.map((link) => {
                                return (
                                    <motion.div
                                        initial={{ x: 0 }}
                                        whileHover={{ x: 10 }}
                                        transition={{ duration: .2 }}
                                    >
                                        <div style={{ cursor: "pointer" }} onClick={() => navigate(link.path)}>{link.label}</div>
                                    </motion.div>
                                );
                            })
                        }
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}
