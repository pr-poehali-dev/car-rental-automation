import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-automotive-gradient overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-automotive-midnight/50 to-automotive-midnight"></div>

      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%,rgba(255,255,255,.05)_25%,rgba(255,255,255,.05)_26%,transparent_27%,transparent_74%,rgba(255,255,255,.05)_75%,rgba(255,255,255,.05)_76%,transparent_77%,transparent)] bg-[length:100px_100px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-automotive-electric">
                <div className="w-12 h-0.5 bg-electric-gradient"></div>
                <span className="font-montserrat font-medium text-sm tracking-wider uppercase">
                  Премиальная аренда
                </span>
              </div>

              <h1 className="text-6xl lg:text-7xl font-montserrat font-bold text-white leading-tight">
                Элитные
                <br />
                <span className="automotive-text-gradient">Автомобили</span>
                <br />
                <span className="text-automotive-electric">Будущего</span>
              </h1>
            </div>

            <p className="text-xl text-automotive-chrome leading-relaxed max-w-lg">
              Испытайте непревзойденный комфорт и технологии будущего с нашими
              премиальными автомобилями. Каждая поездка — это новый уровень
              роскоши.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="automotive-button px-8 py-4 text-lg rounded-automotive group"
                asChild
              >
                <Link to="/cars" className="flex items-center space-x-2">
                  <span>Выбрать автомобиль</span>
                  <Icon
                    name="ArrowRight"
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-automotive-electric text-automotive-electric hover:bg-automotive-electric hover:text-white px-8 py-4 text-lg rounded-automotive font-montserrat font-semibold transition-all duration-300"
              >
                Узнать больше
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-automotive-silver/20">
              <div className="text-center">
                <div className="text-3xl font-montserrat font-bold text-white">
                  500+
                </div>
                <div className="text-sm text-automotive-silver">
                  Автомобилей
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-montserrat font-bold text-white">
                  24/7
                </div>
                <div className="text-sm text-automotive-silver">Поддержка</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-montserrat font-bold text-white">
                  98%
                </div>
                <div className="text-sm text-automotive-silver">
                  Довольных клиентов
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:h-screen flex items-center justify-center">
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-electric-gradient opacity-20 blur-3xl rounded-full scale-150 group-hover:scale-175 transition-transform duration-1000"></div>

              {/* Main Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-automotive">
                <img
                  src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop"
                  alt="Премиальный автомобиль"
                  className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Shimmer Effect */}
                <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-premium-gradient rounded-full flex items-center justify-center shadow-premium animate-pulse">
                <Icon name="Zap" size={32} className="text-white" />
              </div>

              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-chrome-gradient rounded-full flex items-center justify-center shadow-chrome">
                <Icon
                  name="Shield"
                  size={24}
                  className="text-automotive-graphite"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
