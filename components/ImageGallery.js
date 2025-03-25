import { useState } from "react";
import { Dialog } from "@headlessui/react";

const images = [
  "/photos/photo7.jpg",
  "/photos/photo8.jpg",
  "/photos/photo9.jpg",
  "/photos/photo10.jpg",
  "/photos/photo11.jpg",
  "/photos/photo12.jpg",
  "/photos/photo13.jpg",
  "/photos/photo14.jpg",
  "/photos/photo15.jpg",
  "/photos/photo16.jpg",
  "/photos/photo17.jpg",
];

export default function ImageGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  function openModal(image) {
    setCurrentImage(image);
    setIsOpen(true);
  }

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`实践调研 ${index + 1}`}
            className="w-full h-auto rounded-lg cursor-pointer hover:scale-105 transition-transform"
            onClick={() => openModal(image)}
          />
        ))}
      </div>

      {/* 图片放大预览 */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 flex items-center justify-center bg-black/80">
        <Dialog.Panel className="max-w-3xl">
          <img src={currentImage} alt="实践调研大图" className="w-full h-auto rounded-lg" />
        </Dialog.Panel>
      </Dialog>
    </div>
  );
}
