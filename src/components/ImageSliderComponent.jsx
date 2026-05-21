import { useEffect, useState } from 'react'
import { motion } from 'framer-motion';

export default function ImageSliderComponent({ images }) {

    const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

    const handleNext = () => {
        setPositionIndexes((prevIndexes) => {
            const updatedIndexes = prevIndexes.map((prevIndex) => (prevIndex + 1) % 5)
            return updatedIndexes;
        });
    };

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
        <div className='relative flex items-center flex-col justify-center bg-[#0a0a0a] h-[50vh] md:h-screen overflow-hidden'>            {images.map((image, index) => (
            <motion.img
                key={index}
                src={image}
                alt={image}
                className="absolute rounded-[12px] 
                    w-[85%] sm:w-[70%] md:w-[50%] lg:w-[40%]"
                initial="center"
                animate={positions[positionIndexes[index]]}
                variants={imageVariants}
                transition={{ duration: 0.5 }}
            />
        ))}
        </div>
    )
}

