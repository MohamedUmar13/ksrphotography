import React, { useState, useEffect } from "react";
import { getDirectDriveLink } from "../helpers";

/**
 * FastImage component loads a placeholder instantly and then asynchronously loads the actual image.
 * It uses getDirectDriveLink to obtain a direct image URL. If the image fails to load, the placeholder remains.
 * @param {object} props - React props.
 * @param {string} props.src - Original Google Drive URL or ID.
 * @param {string} [props.alt] - Alt text for the image.
 * @param {string} [props.className] - CSS classes.
 */
export default function FastImage({ src, alt = "", className = "" }) {
  const placeholder = "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='800'%20height='600'%20style='background%3A%23ccc'%3E%3C/svg%3E";
  const [imgSrc, setImgSrc] = useState(placeholder);

  useEffect(() => {
    if (!src) {
      setImgSrc(placeholder);
      return;
    }
    const direct = getDirectDriveLink(src);
    const img = new Image();
    img.src = direct;
    img.onload = () => setImgSrc(direct);
    img.onerror = () => setImgSrc(placeholder);
  }, [src]);

  return <img src={imgSrc} alt={alt} className={className} loading="lazy" />;
}
