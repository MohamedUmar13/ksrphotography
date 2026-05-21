import { motion } from "framer-motion";

export default function GalleryCard({ photo, getLayoutClass, onClick }) {
    return (
        <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.7,
                // delay: index * 0.05,
            }}
            viewport={{ once: false }}
            className={`group relative overflow-hidden rounded-2xl bg-neutral-900 ${getLayoutClass(
                photo.layout
            )}`}
            onClick={() => onClick(photo)}
        >
            {/* Image */}
            <motion.img
                src={photo.src}
                alt={photo.title}
                loading="lazy"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition duration-500" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <p className="text-white/70 text-sm uppercase tracking-widest">
                    {photo.category}
                </p>

                <h2 className="text-white text-xl font-light mt-1">
                    {photo.title}
                </h2>
            </div>
        </motion.div>
    );
}