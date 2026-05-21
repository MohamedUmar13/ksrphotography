import { Button, TextField, Typography, Box } from "@mui/material";
import FollowUs from "../components/FollowUs";
import { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import emailjs from "@emailjs/browser";

export default function ContactUs() {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [message, setMessage] = useState('');

    const center = {
        lat: 10.380602,
        lng: 78.818792,
    };

    const sendMessage = async () => {
        if (!name || !mail || !message) {
            alert("Please fill all fields");
            return;
        }

        try {
            await emailjs.send(
                "service_vabzpmf",
                "template_dl2l6pk",
                {
                    name: name,
                    email: mail,
                    message: message
                },
                "cbQCuBRnuvvls62eK"
            );

            alert("Message sent successfully");
            setName('');
            setMail('');
            setMessage('');

        } catch (error) {
            console.error(error);
            alert("Failed to send message");
        }
    };

    return (
        <Box className="relative" sx={{ backgroundColor: "#1C1C1C" }}>
            {/* BACKGROUND MAP */}
            <Box sx={{ minHeight: "100vh", color: "white" }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.5534459359637!2d78.81879297481214!3d10.38060208974516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0079fe1e679271%3A0xdfe5f291d1e91b5f!2sKSR%20PHOTOGRAPHY!5e1!3m2!1sen!2sin!4v1767020135300!5m2!1sen!2sin"
                    width="100%"
                    height="480"
                    className="pt-16"
                    loading="lazy"
                />

                {/* GOOGLE MAP */}
                {/* <LoadScript googleMapsApiKey="YOUR_API_KEY">
                    <GoogleMap
                        mapContainerStyle={{ width: "100%", height: "480px" }}
                        center={center}
                        zoom={15}
                    >
                        <Marker position={center} />
                    </GoogleMap>
                </LoadScript> */}

                {/* INFO STRIP */}
                <Box
                    sx={{
                        display: "flex",
                        pt: { xs: 5, md: 8 },
                        flexDirection: { xs: "column", md: "row" },
                        gap: { xs: 5, md: 15 },
                        px: { xs: 5, md: 10 }
                    }}
                >
                    {/* ADDRESS */}
                    <Box>
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
                            Near Anna Salai <br />
                            Pudukkottai – 622 001
                        </Typography>
                    </Box>

                    {/* CONTACT */}
                    <Box>
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

                    <Box>
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
                            10:00 AM – 8:00 PM
                        </Typography>
                    </Box>

                </Box>

                {/* Follow Us */}
                <Box
                    sx={{
                        px: 10,
                        py: { xs: 0, md: 2 },
                        display: { xs: "none", md: "flex" },
                        alignItems: { xs: "center", md: "end" },
                        flexDirection: { xs: "column", md: "row" },
                        pt: { xs: 5, md: 4 }
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
                    position: { xs: "static", md: "absolute" }, // 🔥 key change
                    bottom: { md: 80 },
                    right: { md: 80 },
                    zIndex: 10,
                    width: { xs: "100%", md: "auto" },
                    px: { xs: 2, md: 0 },
                    py: 5
                }}
            >
                <Box
                    sx={{
                        width: { xs: "100%", md: 380 }, // 🔥 responsive
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
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <TextField
                        label="Email"
                        variant="standard"
                        fullWidth
                        value={mail}
                        onChange={(e) => setMail(e.target.value)}

                    />

                    <TextField
                        label="Message"
                        variant="standard"
                        fullWidth
                        multiline
                        rows={3}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}

                    />

                    <Button
                        fullWidth
                        onClick={sendMessage}
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

            <Box
                sx={{
                    px: 10,
                    pb: 3,
                    display: { xs: "flex", md: "none" },
                    alignItems: { xs: "center", md: "end" },
                    flexDirection: { xs: "column", md: "row" }
                }}
            >
                <Typography
                    sx={{
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        opacity: 0.7,
                        mb: 2,
                        fontSize: "0.8rem",
                        color: "white"
                    }}
                >
                    Follow us on
                </Typography>

                <FollowUs />
            </Box>

        </Box>
    );
}

