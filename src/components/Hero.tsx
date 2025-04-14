
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="pt-24 pb-12 bg-gradient-to-br from-[#D3E4FD] to-[#F1F0FB]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-playfair font-bold text-[#1A1F2C] mb-6">
              Conhecimento que Transforma
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Descubra nossa coleção de e-books cuidadosamente elaborados para seu crescimento pessoal e profissional.
            </p>
            <Button size="lg" className="bg-[#1A1F2C] hover:bg-[#2A2F3C]">
              Explorar E-books
            </Button>
          </div>
          <div className="flex-1">
            <img 
              src="/placeholder.svg" 
              alt="E-books em destaque"
              className="w-full max-w-lg mx-auto rounded-lg shadow-xl transform hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
