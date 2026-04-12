import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import image7 from "../assets/images/wedding7.jpeg";
import image8 from "../assets/images/wedding8.jpeg";
import image9 from "../assets/images/wedding9.jpeg";
import image10 from "../assets/images/wedding10.jpeg";
import image11 from "../assets/images/wedding11.jpeg";


const ImageSlider = () => {

    const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

    const handleNext = () => {
        setPositionIndexes((prevIndexes) => {
            const updatedIndexes = prevIndexes.map((prevIndex) => (prevIndex + 1) % 5)
            return updatedIndexes;
        });
    };

    const images = [image7, image8, image9, image10, image11];

    const positions = ['center', 'left1', 'left', 'right', 'right1'];

    const imageVariants = {
        center: { x: '0%', scale: 1, zIndex: 5 },
        left1: { x: '-50%', scale: 0.7, zIndex: 2 },
        left: { x: '-90%', scale: 0.5, zIndex: 1 },
        right: { x: '90%', scale: 0.5, zIndex: 1 },
        right1: { x: '50%', scale: 0.7, zIndex: 2 },
    }

    useEffect(() => {
        const interval = setInterval(handleNext, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='flex items-center flex-col justify-center bg-black h-screen'>
            {images.map((image, index) => (
                <motion.img
                    key={index}
                    src={image}
                    alt={image}
                    className="rounded-[12px]"
                    initial="center"
                    animate={positions[positionIndexes[index]]}
                    variants={imageVariants}
                    transition={{ duration: 0.5 }}
                    style={{ width: '40%', position: 'absolute' }}

                />
            ))}
        </div>
    )
}

export default ImageSlider