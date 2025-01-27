import Layout from "../../components/Layout";
import { Instagram, Linkedin, Facebook } from "lucide-react";

import bg_contact from "../../assets/svg/bg_contact.svg";

function Contact() {
  return (
    <Layout>
      <div
        className="flex flex-col items-center justify-center px-4 py-8 space-y-8"
        style={{ backgroundImage: `url(${bg_contact})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <h1 className="text-4xl font-bold mb-4">¡Hablemos!</h1>
        <p className="text-lg mb-8 text-center">
          ¿Tienes dudas o preguntas? Escríbenos un mensaje directo en nuestras
          redes sociales. ¡Nos encantaría saber de ti!
        </p>
        <div className="flex space-x-4">
          <a
            href="https://www.instagram.com/servitratargyg/?utm_source=ig_web_button_share_sheet"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <Instagram size={24} />
          </a>

          <a
            href="https://www.linkedin.com/company/servitratargyg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <Linkedin size={24} />
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61572243131212"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <Facebook size={24} />
          </a>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;