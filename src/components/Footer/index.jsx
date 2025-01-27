import { Instagram, Linkedin, Facebook } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        <p className="text-lg font-semibold">¡Síguenos en nuestras redes!</p>
        <div className="flex space-x-6">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/servitratargyg/?utm_source=ig_web_button_share_sheet"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <Instagram size={24} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/servitratargyg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <Linkedin size={24} />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/profile.php?id=61572243131212"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <Facebook size={24} />
          </a>
        </div>
        <p className="text-sm text-gray-500">© 2025 Servitratar G&G. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
