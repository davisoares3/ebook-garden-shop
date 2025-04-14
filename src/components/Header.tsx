
import { BookOpen, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 text-2xl font-playfair font-bold text-[#1A1F2C]">
            <BookOpen className="h-8 w-8" />
            <span>Livraria Digital</span>
          </a>
          
          <Button
            variant="ghost"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>

          <nav className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex absolute lg:relative top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent flex-col lg:flex-row gap-4 p-4 lg:p-0`}>
            <a href="#ebooks" className="text-lg hover:text-blue-600 transition-colors">E-books</a>
            <a href="#sobre" className="text-lg hover:text-blue-600 transition-colors">Sobre</a>
            <a href="#contato" className="text-lg hover:text-blue-600 transition-colors">Contato</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
