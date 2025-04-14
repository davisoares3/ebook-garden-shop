
import { BookOpen, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1A1F2C] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="h-6 w-6" />
              <span className="text-xl font-playfair font-bold">Livraria Digital</span>
            </div>
            <p className="text-gray-300">
              Transformando vidas através do conhecimento digital.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <div className="flex flex-col gap-2">
              <a href="mailto:contato@example.com" className="flex items-center gap-2 text-gray-300 hover:text-white">
                <Mail className="h-5 w-5" />
                contato@example.com
              </a>
              <a href="tel:+5511999999999" className="flex items-center gap-2 text-gray-300 hover:text-white">
                <Phone className="h-5 w-5" />
                (11) 99999-9999
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <div className="flex flex-col gap-2">
              <a href="#ebooks" className="text-gray-300 hover:text-white">E-books</a>
              <a href="#sobre" className="text-gray-300 hover:text-white">Sobre</a>
              <a href="#contato" className="text-gray-300 hover:text-white">Contato</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Livraria Digital. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
