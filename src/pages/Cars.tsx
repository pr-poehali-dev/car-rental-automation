import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CarCard from "@/components/CarCard";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Cars = () => {
  const cars = [
    {
      id: "1",
      name: "BMW X5",
      brand: "BMW",
      price: 8500,
      image:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500&h=300&fit=crop",
      fuelType: "Бензин",
      transmission: "Автомат",
      seats: 5,
      year: 2023,
    },
    {
      id: "2",
      name: "Mercedes-Benz C-Class",
      brand: "Mercedes",
      price: 7200,
      image:
        "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=500&h=300&fit=crop",
      fuelType: "Бензин",
      transmission: "Автомат",
      seats: 5,
      year: 2023,
    },
    {
      id: "3",
      name: "Audi A4",
      brand: "Audi",
      price: 6800,
      image:
        "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=500&h=300&fit=crop",
      fuelType: "Бензин",
      transmission: "Автомат",
      seats: 5,
      year: 2022,
    },
    {
      id: "4",
      name: "Toyota Camry",
      brand: "Toyota",
      price: 4500,
      image:
        "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=500&h=300&fit=crop",
      fuelType: "Гибрид",
      transmission: "Автомат",
      seats: 5,
      year: 2023,
    },
    {
      id: "5",
      name: "Porsche 911",
      brand: "Porsche",
      price: 15000,
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&h=300&fit=crop",
      fuelType: "Бензин",
      transmission: "Автомат",
      seats: 2,
      year: 2023,
    },
    {
      id: "6",
      name: "Range Rover Evoque",
      brand: "Land Rover",
      price: 9200,
      image:
        "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=500&h=300&fit=crop",
      fuelType: "Бензин",
      transmission: "Автомат",
      seats: 5,
      year: 2022,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-white">Каталог автомобилей</h1>
          <span className="text-slate-400">{cars.length} автомобилей</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters */}
          <div className="lg:col-span-1">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <Icon name="Filter" size={20} />
                  <span>Фильтры</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-slate-300 mb-2 block">
                    Поиск
                  </label>
                  <Input
                    placeholder="Поиск по модели..."
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-300 mb-2 block">
                    Бренд
                  </label>
                  <Select>
                    <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                      <SelectValue placeholder="Выберите бренд" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bmw">BMW</SelectItem>
                      <SelectItem value="mercedes">Mercedes</SelectItem>
                      <SelectItem value="audi">Audi</SelectItem>
                      <SelectItem value="toyota">Toyota</SelectItem>
                      <SelectItem value="porsche">Porsche</SelectItem>
                      <SelectItem value="landrover">Land Rover</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-300 mb-2 block">
                    Цена за день
                  </label>
                  <Select>
                    <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                      <SelectValue placeholder="Выберите диапазон" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-5000">До 5 000₽</SelectItem>
                      <SelectItem value="5000-8000">5 000₽ - 8 000₽</SelectItem>
                      <SelectItem value="8000-12000">
                        8 000₽ - 12 000₽
                      </SelectItem>
                      <SelectItem value="12000+">От 12 000₽</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-300 mb-2 block">
                    Тип топлива
                  </label>
                  <Select>
                    <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                      <SelectValue placeholder="Выберите тип" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gasoline">Бензин</SelectItem>
                      <SelectItem value="diesel">Дизель</SelectItem>
                      <SelectItem value="hybrid">Гибрид</SelectItem>
                      <SelectItem value="electric">Электро</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Cars Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {cars.map((car) => (
                <CarCard key={car.id} {...car} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cars;
