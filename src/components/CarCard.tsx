import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface CarCardProps {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  fuelType: string;
  transmission: string;
  seats: number;
  year: number;
}

const CarCard = ({
  name,
  brand,
  price,
  image,
  fuelType,
  transmission,
  seats,
  year,
}: CarCardProps) => {
  return (
    <Card className="automotive-card rounded-automotive overflow-hidden group">
      <CardContent className="p-0">
        {/* Image Container */}
        <div className="relative aspect-video bg-automotive-steel overflow-hidden rounded-t-automotive">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-automotive-midnight/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Brand Badge */}
          <div className="absolute top-4 left-4">
            <Badge className="bg-premium-gradient text-white font-montserrat font-semibold shadow-premium">
              {brand}
            </Badge>
          </div>

          {/* Year Badge */}
          <div className="absolute top-4 right-4">
            <Badge
              variant="secondary"
              className="bg-automotive-midnight/80 text-automotive-chrome border-automotive-silver/20"
            >
              {year}
            </Badge>
          </div>

          {/* Hover Icon */}
          <div className="absolute bottom-4 right-4 w-12 h-12 bg-electric-gradient rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-electric">
            <Icon name="Eye" size={20} className="text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Title */}
          <h3 className="text-white font-montserrat font-bold text-xl group-hover:text-automotive-electric transition-colors duration-300">
            {name}
          </h3>

          {/* Specifications */}
          <div className="grid grid-cols-3 gap-4">
            <div className="flex items-center space-x-2 text-automotive-silver text-sm">
              <div className="w-8 h-8 bg-automotive-steel/50 rounded-lg flex items-center justify-center">
                <Icon
                  name="Fuel"
                  size={14}
                  className="text-automotive-electric"
                />
              </div>
              <span className="font-roboto">{fuelType}</span>
            </div>

            <div className="flex items-center space-x-2 text-automotive-silver text-sm">
              <div className="w-8 h-8 bg-automotive-steel/50 rounded-lg flex items-center justify-center">
                <Icon
                  name="Settings"
                  size={14}
                  className="text-automotive-electric"
                />
              </div>
              <span className="font-roboto">{transmission}</span>
            </div>

            <div className="flex items-center space-x-2 text-automotive-silver text-sm">
              <div className="w-8 h-8 bg-automotive-steel/50 rounded-lg flex items-center justify-center">
                <Icon
                  name="Users"
                  size={14}
                  className="text-automotive-electric"
                />
              </div>
              <span className="font-roboto">{seats}</span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-baseline space-x-2 pt-2 border-t border-automotive-silver/10">
            <span className="text-3xl font-montserrat font-bold text-white">
              {price.toLocaleString()}₽
            </span>
            <span className="text-automotive-silver text-sm font-roboto">
              /день
            </span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button className="w-full automotive-button rounded-automotive group">
          <span>Забронировать</span>
          <Icon
            name="ArrowRight"
            size={18}
            className="ml-2 group-hover:translate-x-1 transition-transform"
          />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CarCard;
