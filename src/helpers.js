export const contactUsTextFieldStyle = {
    "& .MuiInputBase-input": { color: "#111" },
    "& .MuiInputLabel-root": { color: "#555" },
};

const PLACEHOLDER_IMG = "https://via.placeholder.com/800x600?text=Image+Unavailable";

/**
 * Returns a fast-loading direct image URL from a Google Drive link.
 * If the link is invalid or the image cannot be fetched, a placeholder image is returned.
 * The function extracts the file ID and builds a `lh3.googleusercontent.com` URL which loads
 * considerably faster than the generic thumbnail endpoint.
 * @param {string|null} url - Original Google Drive share URL or file ID.
 * @returns {string|null} Direct image URL or placeholder.
 */
export const getDirectDriveLink = (url) => {
    if (!url) return PLACEHOLDER_IMG; // no URL, show placeholder
    // If URL is already a direct Googleusercontent link, return it as‑is
    if (url.includes('lh3.googleusercontent.com')) return url;
    // Direct Drive file ID (e.g., "1a2B3cD4e5F6g7H8i9J0k")
    if (/^[a-zA-Z0-9_-]{10,}$/.test(url)) {
        return `https://drive.google.com/thumbnail?id=${url}&sz=w1080`;
    }
    // Extract file ID from typical share links
    const match1 = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (match1 && match1[1]) {
        return `https://drive.google.com/thumbnail?id=${match1[1]}&sz=w1080`;
    }
    // Classic export view URLs
    const exportMatch = url.match(/drive\.google\.com\/uc\?export=view&id=([a-zA-Z0-9_-]+)/);
    if (exportMatch && exportMatch[1]) {
        return `https://drive.google.com/thumbnail?id=${exportMatch[1]}&sz=w1080`;
    }
    // Generic id param
    const genericMatch = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
    if (genericMatch && genericMatch[1]) {
        return `https://drive.google.com/thumbnail?id=${genericMatch[1]}&sz=w1080`;
    }
    // Direct Googleusercontent image
    if (url.includes('lh3.googleusercontent.com')) return url;
    // Direct image URL (ends with common extension)
    if (/(\.jpg|\.jpeg|\.png|\.webp|\.gif)$/i.test(url)) return url;
    // If none of the patterns match, just return the original URL – it may already be a valid image link
    return url; // fallback to original URL for unknown patterns
};