import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function FloatingButton() {
  return (
    <a
      href="https://wa.me/919876543210?text=Hi%20I%20am%20interested%20in%20your%20services"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#25D366",
        color: "white",
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
        zIndex: 2000,
        cursor: "pointer",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
      }}
      className="whatsapp-float"
    >
      <WhatsAppIcon style={{ fontSize: "34px" }} />
    </a>
  );
}
