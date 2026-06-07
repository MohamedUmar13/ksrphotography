import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import GalleryCard from "./GalleryCard";
import { useParams } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { getDirectDriveLink } from "../helpers";

export default function SpecifiedEvent() {

  const { imgId } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchEvent = async () => {
      const docRef = doc(db, "Gallery", imgId);

      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setWeddingData(docSnap.data());
      }
    };

    fetchEvent();
  }, [imgId]);

  const [weddingData, setWeddingData] = useState(null);

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

  const [selectedIndex, setSelectedIndex] = useState(null);

  const filteredPhotos =
    weddingData?.allImages?.map((image, index) => ({
      id: index,
      src: getDirectDriveLink(image),
      title: weddingData?.name,
      category: weddingData?.category,
    })) || [];

  const selectedPhoto = selectedIndex !== null ? filteredPhotos[selectedIndex] : null;

  const handleNext = (e) => {
    e.stopPropagation();

    if (selectedIndex < filteredPhotos.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const handlePrev = (e) => {
    e.stopPropagation();

    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const [showTopBar, setShowTopBar] = useState(false);

  return (
    <div className="bg-black min-h-screen px-4 md:px-10 py-10 pt-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-12">
          <h1 className="text-white text-4xl md:text-6xl font-light">
            {/* {title} */}
          </h1>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-[250px] gap-5 grid-flow-dense">
          {filteredPhotos.map((photo, index) => (
            <GalleryCard
              key={photo.id}
              photo={photo}
              getLayoutClass={getLayoutClass}
              onClick={() => {
                setSelectedIndex(index);
              }}
            />
          ))}

          {selectedPhoto && (
            <div
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[9999] flex items-center justify-center overflow-hidden"
            >

              <div
                className="absolute top-0 left-0 w-full h-28 z-50"
                onMouseEnter={() => setShowTopBar(true)}
                onMouseLeave={() => setShowTopBar(false)}
              >
                <motion.div
                  initial={{
                    y: -100,
                    opacity: 0,
                  }}
                  animate={{
                    y: showTopBar ? 0 : -100,
                    opacity: showTopBar ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-4 left-1/2 -translate-x-1/2"
                >
                  <IconButton
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedIndex(null);
                      setShowTopBar(false);
                    }}
                    sx={{
                      color: "white",
                      width: 64,
                      height: 64,
                      backgroundColor: "rgba(255,255,255,0.08)",
                      backdropFilter: "blur(12px)",

                      "&:hover": {
                        backgroundColor: "rgba(255,255,255,0.16)",
                      },
                    }}
                  >
                    <CloseIcon fontSize="large" />
                  </IconButton>
                </motion.div>
              </div>

              <div className="md:hidden absolute top-4 right-4 z-50">
                <IconButton
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedIndex(null);
                  }}
                  sx={{
                    color: "white",
                    width: 56,
                    height: 56,
                    backgroundColor: "rgba(255,255,255,0.08)",
                    backdropFilter: "blur(12px)",

                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.16)",
                    },
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </div>

              {/* Previous Button */}
              {selectedIndex > 0 && (
                <div
                  className="absolute left-0 top-0 w-1/2 h-full z-10 cursor-pointer flex items-center group"
                  onClick={handlePrev}
                >
                  <IconButton
                    sx={{
                      display: {
                        xs: "none",
                        md: "flex",
                      },
                      position: "absolute",
                      left: { xs: 10, md: 24 },
                      width: 72,
                      height: 120,
                      borderRadius: "999px",
                      color: "rgba(255,255,255,0.55)",
                      background:
                        "linear-gradient(to right, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
                      backdropFilter: "blur(10px)",
                      opacity: 0,
                      transform: "translateX(-10px)",
                      transition: "all 0.35s ease",
                      ".group:hover &": {
                        opacity: 1,
                        transform: "translateX(0)",
                      },
                      "&:hover": {
                        background:
                          "linear-gradient(to right, rgba(255,255,255,0.14), rgba(255,255,255,0.04))",
                      },
                    }}
                  >
                    <ArrowBackIosNewIcon sx={{ fontSize: 30 }} />
                  </IconButton>
                </div>
              )}

              {/* Image */}
              <motion.img
                key={selectedPhoto.src}
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl"
                onClick={(e) => e.stopPropagation()}
              />

              {/* Next Button */}
              {selectedIndex < filteredPhotos.length - 1 && (
                <div
                  className="absolute right-0 top-0 w-1/2 h-full z-10 cursor-pointer flex items-center justify-end group"
                  onClick={handleNext}
                >
                  <IconButton
                    sx={{
                      display: {
                        xs: "none",
                        md: "flex",
                      },
                      position: "absolute",
                      right: { xs: 10, md: 24 },
                      width: 72,
                      height: 120,
                      borderRadius: "999px",
                      color: "rgba(255,255,255,0.55)",
                      background:
                        "linear-gradient(to left, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
                      backdropFilter: "blur(10px)",
                      opacity: 0,
                      transform: "translateX(10px)",
                      transition: "all 0.35s ease",
                      ".group:hover &": {
                        opacity: 1,
                        transform: "translateX(0)",
                      },
                      "&:hover": {
                        background:
                          "linear-gradient(to left, rgba(255,255,255,0.14), rgba(255,255,255,0.04))",
                      },

                    }}
                  >
                    <ArrowForwardIosIcon sx={{ fontSize: 30 }} />
                  </IconButton>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div >
  );
}