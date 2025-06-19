import { Button } from "@/components/ui/button";
import CarCard from "@/components/CarCard";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const FeaturedCars = () => {
  const featuredCars = [
    {
      id: "1",
      name: "BMW X5 M Sport",
      brand: "BMW",
      price: 12500,
      image:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500&h=300&fit=crop",
      fuelType: "Бензин",
      transmission: "Автомат",
      seats: 5,
      year: 2024,
    },
    {
      id: "2",
      name: "Mercedes-Benz S-Class",
      brand: "Mercedes",
      price: 15200,
      image:
        "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=500&h=300&fit=crop",
      fuelType: "Гибрид",
      transmission: "Автомат",
      seats: 5,
      year: 2024,
    },
    {
      id: "3",
      name: "Audi RS6 Avant",
      brand: "Audi",
      price: 13800,
      image:
        "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=500&h=300&fit=crop",
      fuelType: "Бензин",
      transmission: "Автомат",
      seats: 5,
      year: 2024,
    },
    {
      id: "4",
      name: "Porsche Taycan",
      brand: "Porsche",
      price: 18900,
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&h=300&fit=crop",
      fuelType: "Электро",
      transmission: "Автомат",
      seats: 4,
      year: 2024,
    },
    {
      id: "5",
      name: "Tesla Model S",
      brand: "Tesla",
      price: 16500,
      image:
        "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=500&h=300&fit=crop",
      fuelType: "Электро",
      transmission: "Автомат",
      seats: 5,
      year: 2024,
    },
    {
      id: "6",
      name: "Lamborghini Huracán",
      brand: "Lamborghini",
      price: 35000,
      image:
        "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=500&h=300&fit=crop",
      fuelType: "Бензин",
      transmission: "Автомат",
      seats: 2,
      year: 2024,
    },
  ];

  return (
    <section className="py-20 bg-automotive-graphite relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_40%,rgba(255,255,255,.05)_50%,transparent_60%)] bg-[length:20px_20px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-16">
          <div className="text-center lg:text-left mb-8 lg:mb-0">
            <div className="flex items-center justify-center lg:justify-start space-x-2 text-automotive-electric mb-4">
              <div className="w-12 h-0.5 bg-electric-gradient"></div>
              <span className="font-montserrat font-medium text-sm tracking-wider uppercase">
                Популярные автомобили
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-white mb-4">
              Элитная
              <span className="automotive-text-gradient"> коллекция</span>
            </h2>

            <p className="text-xl text-automotive-chrome max-w-lg">
              Отборные автомобили премиум-класса с безупречной репутацией и
              современными технологиями
            </p>
          </div>

          <Button
            size="lg"
            variant="outline"
            className="border-2 border-automotive-electric text-automotive-electric hover:bg-automotive-electric hover:text-white px-8 py-4 rounded-automotive font-montserrat font-semibold transition-all duration-300 group"
            asChild
          >
            <Link to="/cars" className="flex items-center space-x-2">
              <span>Смотреть все</span>
              <Icon
                name="ArrowRight"
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </Button>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCars.map((car, index) => (
            <div
              key={car.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CarCard {...car} />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 p-6 bg-automotive-midnight/50 rounded-2xl border border-automotive-silver/10">
            <div className="flex items-center space-x-2 text-automotive-electric">
              <Icon name="Phone" size={20} />
              <span className="font-montserrat font-semibold">
                Нужна консультация?
              </span>
            </div>
            <Button className="automotive-button rounded-automotive">
              Связаться с нами
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
