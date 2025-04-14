
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";

interface EbookCardProps {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

const EbookCard = ({ title, description, price, imageUrl }: EbookCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader className="p-0">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover hover:scale-105 transition-transform"
        />
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="font-playfair mb-4">{title}</CardTitle>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-2xl font-bold text-[#1A1F2C]">
          R$ {price.toFixed(2)}
        </p>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-[#1A1F2C] hover:bg-[#2A2F3C]">
          Comprar Agora
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EbookCard;
