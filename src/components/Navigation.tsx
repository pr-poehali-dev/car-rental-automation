import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-automotive-midnight/95 backdrop-blur-md border-b border-automotive-silver/10 px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="p-2 bg-electric-gradient rounded-lg shadow-electric group-hover:animate-glow">
            <Icon name="Car" className="text-white" size={28} />
          </div>
          <span className="text-white text-2xl font-montserrat font-bold tracking-wide">
            ELITE<span className="text-automotive-electric">DRIVE</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className={`text-sm font-montserrat font-medium transition-all duration-300 relative ${
              isActive("/")
                ? "text-automotive-electric"
                : "text-automotive-chrome hover:text-white"
            }`}
          >
            Главная
            {isActive("/") && (
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-electric-gradient"></div>
            )}
          </Link>
          <Link
            to="/cars"
            className={`text-sm font-montserrat font-medium transition-all duration-300 relative ${
              isActive("/cars")
                ? "text-automotive-electric"
                : "text-automotive-chrome hover:text-white"
            }`}
          >
            Автомобили
            {isActive("/cars") && (
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-electric-gradient"></div>
            )}
          </Link>
          <Link
            to="/services"
            className="text-sm font-montserrat font-medium text-automotive-chrome hover:text-white transition-all duration-300"
          >
            Услуги
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="text-automotive-chrome hover:text-white hover:bg-automotive-steel/50"
          >
            <Link to="/login" className="font-montserrat">
              Войти
            </Link>
          </Button>
          <Button
            size="sm"
            asChild
            className="automotive-button rounded-automotive"
          >
            <Link to="/register" className="font-montserrat">
              Регистрация
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
