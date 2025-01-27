import { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import ServiceList from "../../components/cards";

const images = [
  "src/assets/webp/gallery/image1.webp",
  "src/assets/webp/gallery/image2.webp",
  "src/assets/webp/gallery/image3.webp",
  "src/assets/webp/gallery/image4.webp",
  // Agrega aquí el resto de las imágenes
];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Layout>
      <div className="container mx-auto mt-8">
        <h1 className="text-4xl font-bold text-center mb-6">
          Bienvenidos a nuestro Sitio
        </h1>
        <div className="relative w-full max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-lg">
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full object-cover h-64 transition-transform duration-1000 ease-in-out"
            />
          </div>

          {/* Controles */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
          >
            &#8249;
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
          >
            &#8250;
          </button>

          {/* Indicadores */}
          <div className="flex justify-center mt-4 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index
                    ? "bg-gray-800"
                    : "bg-gray-400 hover:bg-gray-600"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-center mt-8">
          Nuestros Servicios
        </h2>
        <ServiceList />
      </div>
    </Layout>
  );
}

export default Home;
