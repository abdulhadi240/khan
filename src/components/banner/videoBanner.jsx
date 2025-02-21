import { FaPlay } from "react-icons/fa";
import { useState } from "react";

const VideoBanner = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative w-3/4 max-w-4xl">
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={() => setOpen(false)}
            >
              &times;
            </button>
            <video controls autoPlay className="w-full h-auto rounded-lg">
              <source src="/video1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

     
    </>
  );
};

export default VideoBanner;
