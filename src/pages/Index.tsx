
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EbookCard from "@/components/EbookCard";
import Footer from "@/components/Footer";

const Index = () => {
  const ebooks = [
    {
      title: "Desenvolvimento Pessoal",
      description: "Aprenda técnicas comprovadas para alcançar seus objetivos.",
      price: 29.90,
      imageUrl: "/placeholder.svg"
    },
    {
      title: "Produtividade Máxima",
      description: "Métodos eficazes para otimizar seu tempo e resultados.",
      price: 34.90,
      imageUrl: "/placeholder.svg"
    },
    {
      title: "Mindset de Sucesso",
      description: "Desenvolva a mentalidade dos grandes realizadores.",
      price: 39.90,
      imageUrl: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main>
        <Hero />
        
        <section id="ebooks" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-center mb-12">
              E-books em Destaque
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ebooks.map((ebook, index) => (
                <EbookCard key={index} {...ebook} />
              ))}
            </div>
          </div>
        </section>

        <section id="sobre" className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-6">
                Sobre o Autor
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Dedicado a compartilhar conhecimento e experiências através de e-books cuidadosamente elaborados para impactar positivamente a vida das pessoas.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
