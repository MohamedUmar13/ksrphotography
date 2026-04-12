import { Button, TextField, Typography, Box } from "@mui/material";
import FollowUs from "../components/FollowUs";

export default function ContactUscopy() {
    return (
        <Box className="relative">
            {/* BACKGROUND MAP */}
            <Box sx={{ height: "100vh", backgroundColor: "#1C1C1C", color: "white" }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.5534459359637!2d78.81879297481214!3d10.38060208974516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0079fe1e679271%3A0xdfe5f291d1e91b5f!2sKSR%20PHOTOGRAPHY!5e1!3m2!1sen!2sin!4v1767020135300!5m2!1sen!2sin"
                    width="100%"
                    height="480"
                    className="pt-16"
                    loading="lazy"
                />

                {/* INFO STRIP */}
                <Box
                    sx={{
                        display: "flex",
                        pt: 8,
                    }}
                >
                    {/* ADDRESS */}
                    <Box sx={{ px: 10 }}>
                        <Typography
                            sx={{
                                textTransform: "uppercase",
                                letterSpacing: "0.1em",
                                opacity: 0.7,
                                mb: 2,
                                fontSize: "0.8rem",
                            }}
                        >
                            Our Address
                        </Typography>

                        <Typography sx={{ lineHeight: 1.7, opacity: 0.9 }}>
                            South 3rd Street <br />
                            Near Tharagai Readymades <br />
                            Pudukkottai – 622 001
                        </Typography>
                    </Box>

                    {/* CONTACT */}
                    <Box sx={{ px: 10 }}>
                        <Typography
                            sx={{
                                textTransform: "uppercase",
                                letterSpacing: "0.1em",
                                opacity: 0.7,
                                mb: 2,
                                fontSize: "0.8rem",
                            }}
                        >
                            Contact
                        </Typography>

                        <Typography sx={{ opacity: 0.9 }}>
                            ksrphotography@gmail.com
                        </Typography>
                        <Typography sx={{ opacity: 0.9 }}>
                            +91 93610 55928
                        </Typography>
                    </Box>

                    <Box sx={{ px: 5 }}>
                        <Typography
                            sx={{
                                textTransform: "uppercase",
                                letterSpacing: "0.1em",
                                opacity: 0.7,
                                mb: 2,
                                fontSize: "0.8rem",
                            }}
                        >
                            Studio Timings
                        </Typography>

                        <Typography sx={{ opacity: 0.9 }}>
                        Monday – Saturday
                        </Typography>
                        <Typography sx={{ opacity: 0.9 }}>
                        10:00 AM – 9:00 PM
                        </Typography>
                    </Box>

                </Box>

                <Box
                    sx={{
                        px: 10,
                        py: 2,
                        display: "flex",
                        alignItems: 'end'
                    }}
                >
                    <Typography
                        sx={{
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            opacity: 0.7,
                            mb: 2,
                            fontSize: "0.8rem",
                        }}
                    >
                        Follow us on
                    </Typography>

                    <FollowUs />
                </Box>

            </Box>


            {/* CONTACT FORM OVERLAY */}
            <Box
                sx={{
                    position: "absolute",
                    bottom: 80,
                    right: 80,
                    zIndex: 10,
                }}
            >
                <Box
                    sx={{
                        width: 380,
                        p: 4,
                        borderRadius: "16px",
                        background: "rgba(255,255,255,0.92)",
                        backdropFilter: "blur(14px)",
                        boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
                        display: "flex",
                        flexDirection: "column",
                        gap: 3,
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: 600,
                            fontSize: "1.2rem",
                            color: "#111",
                        }}
                    >
                        Contact Us
                    </Typography>

                    <TextField
                        label="Name"
                        variant="standard"
                        fullWidth
                        sx={{
                            "& .MuiInputBase-input": { color: "#111" },
                            "& .MuiInputLabel-root": { color: "#555" },
                        }}
                    />

                    <TextField
                        label="Message"
                        variant="standard"
                        fullWidth
                        multiline
                        rows={3}
                        sx={{
                            "& .MuiInputBase-input": { color: "#111" },
                            "& .MuiInputLabel-root": { color: "#555" },
                        }}
                    />

                    <Button
                        fullWidth
                        sx={{
                            mt: 1,
                            backgroundColor: "#111",
                            color: "#fff",
                            borderRadius: "999px",
                            py: 1.2,
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            fontSize: "0.75rem",
                            "&:hover": {
                                backgroundColor: "#000",
                            },
                        }}
                    >
                        Send Message
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

