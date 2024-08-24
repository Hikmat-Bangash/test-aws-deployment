// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import '../App.css'; // Add custom styles for touch gestures

// eslint-disable-next-line react/prop-types
const ImageRotator = ({ images }) => {
    const [positions, setPositions] = useState([0, 1, 2, 3, 4]);

    const handleTouchStart = (e) => {
        e.currentTarget.startX = e.touches[0].clientX;
        e.currentTarget.startY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
        const deltaX = e.changedTouches[0].clientX - e.currentTarget.startX;
        const deltaY = e.changedTouches[0].clientY - e.currentTarget.startY;

        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            // Horizontal Swipe
            if (deltaX > 0) {
                rotateRight();
            } else {
                rotateLeft();
            }
        } else {
            // Vertical Swipe
            if (deltaY > 0) {
                rotateDown();
            } else {
                rotateUp();
            }
        }
    };

    const rotateRight = () => {
        setPositions([positions[4], positions[0], positions[1], positions[3], positions[2]]);
    };

    const rotateLeft = () => {
        setPositions([positions[1], positions[2], positions[4], positions[3], positions[0]]);
    };

    const rotateUp = () => {
        setPositions([positions[3], positions[1], positions[0], positions[2], positions[4]]);
    };

    const rotateDown = () => {
        setPositions([positions[2], positions[1], positions[4], positions[0], positions[3]]);
    };

    return (
        <div className="relative h-80 w-80 mx-auto">
            <img
                src={images[positions[0]]}
                alt="Center"
                className="absolute h-40 w-40 top-20 left-20"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            />
            <img
                src={images[positions[1]]}
                alt="Top"
                className="absolute h-16 w-16 top-4 left-32"
            />
            <img
                src={images[positions[2]]}
                alt="Right"
                className="absolute h-16 w-16 top-32 right-4"
            />
            <img
                src={images[positions[3]]}
                alt="Bottom"
                className="absolute h-16 w-16 bottom-4 left-32"
            />
            <img
                src={images[positions[4]]}
                alt="Left"
                className="absolute h-16 w-16 top-32 left-4"
            />
        </div>
    );
};

export default ImageRotator;