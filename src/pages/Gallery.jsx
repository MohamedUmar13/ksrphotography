import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Chip, Stack } from "@mui/material";
import GalleryCard from "./GalleryCard";
import { useNavigate } from "react-router-dom";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { getDirectDriveLink } from "../helpers";

export default function Gallery() {

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchEvent = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Gallery"));

        const galleryData = querySnapshot.docs.map((doc, index) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setPhotos(galleryData);

      } catch (error) {
        console.log("Error fetching gallery:", error);
      }
    };

    fetchEvent();
  }, []);

  const getLayoutClass = (layout) => {
    switch (layout) {
      case "v-stretch":
        return "row-span-2";

      case "h-stretch":
        return "md:col-span-2";

      default:
        return "";
    }
  };

  const layoutOptions = [
    "standard",
    "standard",
    "standard",
    "v-stretch",
    "h-stretch",
  ];

  const getAutoLayout = () => {
    return layoutOptions[
      Math.floor(Math.random() * layoutOptions.length)
    ];
  };

  const categories = ["All", ...new Set(photos.map((p) => p.category))];

  const [activeCategory, setActiveCategory] = useState("All");
  const navigate = useNavigate();

  const filteredPhotos =
    activeCategory === "All"
      ? photos
      : photos.filter((photo) => photo.category === activeCategory);

  return (
    <div className="bg-black min-h-screen px-4 md:px-10 py-10 pt-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-12">
          <h1 className="text-white text-4xl md:text-6xl font-light">
            Esteemed Works
          </h1>
        </div>

        <Stack
          direction="row"
          spacing={1.5}
          sx={{
            overflowX: "auto",
            pb: 1,
            mb: 6,
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {categories.map((category) => (
            <Chip
              key={category}
              label={category}
              clickable
              onClick={() => setActiveCategory(category)}
              sx={{
                px: 1,
                py: 2.5,
                borderRadius: "999px",
                fontSize: "0.85rem",
                letterSpacing: "0.08em",
                transition: "0.3s",

                bgcolor:
                  activeCategory === category
                    ? "#ffffff"
                    : "transparent",

                color:
                  activeCategory === category
                    ? "#000000"
                    : "#ffffff",

                border:
                  activeCategory === category
                    ? "1px solid #ffffff"
                    : "1px solid rgba(255,255,255,0.2)",

                "&:hover": {
                  borderColor: "#ffffff",
                  backgroundColor:
                    activeCategory === category
                      ? "#ffffff"
                      : "rgba(255,255,255,0.08)",
                },
              }}
            />
          ))}
        </Stack>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-[250px] gap-5 grid-flow-dense">
          {filteredPhotos.map((photo) => (
            <GalleryCard
              key={photo.id}
              photo={{
                ...photo,
                src: getDirectDriveLink(photo.coverImage),
                title: photo.name,
                layout: getAutoLayout(),
              }}
              getLayoutClass={getLayoutClass}
              onClick={() => {
                navigate(`/specified-event/${photo.id}`);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}