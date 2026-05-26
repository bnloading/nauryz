import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import SectionSeparator from "@/components/SectionSeparator";
import config from "@/config/config";

const ImageLoader = ({ src, alt, className, onClick }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setLoaded(true);
    img.onerror = () => setError(true);
    img.src = src;
  }, [src]);

  return (
    <div className="relative overflow-hidden">
      {!loaded && !error && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {loaded && (
        <img
          src={src}
          alt={alt}
          className={className}
          onClick={onClick}
          loading="lazy"
        />
      )}

      {error && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-sm text-gray-500">
          {config.data.texts.imageError}
        </div>
      )}
    </div>
  );
};

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = config.data.media.galleryPhotos ?? [];

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  if (images.length === 0) {
    return (
      <>
        <section
          id="gallery"
          className="min-h-screen relative overflow-hidden py-20 bg-gray-100"
        >
          <div className="container mx-auto px-4 text-center text-gray-500">
            {config.data.texts.galleryEmpty}
          </div>
        </section>
        <SectionSeparator variant="elegant" />
      </>
    );
  }

  const currentImage = images[currentIndex] ?? images[0];

  return (
    <>
      <section
        id="gallery"
        className="min-h-screen relative overflow-hidden py-20 bg-gray-100"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 mb-16"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block text-gray-600 font-medium"
            >
              {config.data.texts.galleryTagline}
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-serif text-gray-800"
            >
              {config.data.texts.galleryTitle}
            </motion.h2>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="relative w-full"
              >
                <div
                  className="relative"
                  style={{
                    paddingTop:
                      currentImage.mode === "contain" ? "100%" : "56.25%",
                  }}
                >
                  <ImageLoader
                    src={currentImage.src}
                    alt={currentImage.alt}
                    className={`absolute inset-0 w-full h-full transition-all duration-300 ${
                      currentImage.mode === "contain"
                        ? "object-contain"
                        : "object-cover"
                    }`}
                    onClick={() => openModal(currentImage)}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                    <p className="text-white text-center">
                      {currentImage.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="flex justify-center gap-2 mt-4">
              {images.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentIndex === index ? "bg-gray-500 w-4" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isModalOpen && selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
            >
              <motion.div className="relative max-w-5xl w-full h-[80vh] flex items-center justify-center">
                <ImageLoader
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className={`max-h-full w-auto rounded-lg ${
                    selectedImage.mode === "contain"
                      ? "object-contain"
                      : "object-cover"
                  }`}
                />
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
                >
                  <X className="w-6 h-6 text-gray-800" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <SectionSeparator variant="elegant" />
    </>
  );
}
