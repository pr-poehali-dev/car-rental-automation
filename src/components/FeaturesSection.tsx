import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const FeaturesSection = () => {
  const features = [
    {
      icon: "Shield",
      title: "Полная страховка",
      description: "Комплексная защита КАСКО и ОСАГО на все случаи жизни",
      color: "text-green-400",
    },
    {
      icon: "Clock",
      title: "24/7 поддержка",
      description: "Круглосуточная техническая поддержка и экстренная помощь",
      color: "text-automotive-electric",
    },
    {
      icon: "MapPin",
      title: "Доставка",
      description: "Привезем автомобиль в любую точку города бесплатно",
      color: "text-automotive-premium",
    },
    {
      icon: "Zap",
      title: "Быстрое оформление",
      description: "Оформление аренды за 5 минут онлайн без очередей",
      color: "text-yellow-400",
    },
    {
      icon: "Star",
      title: "Премиум сервис",
      description: "Индивидуальный подход к каждому клиенту",
      color: "text-orange-400",
    },
    {
      icon: "Smartphone",
      title: "Мобильное приложение",
      description: "Управляйте арендой через удобное мобильное приложение",
      color: "text-pink-400",
    },
  ];

  return (
    <section className="py-20 bg-automotive-midnight relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-automotive-electric mb-4">
            <div className="w-12 h-0.5 bg-electric-gradient"></div>
            <span className="font-montserrat font-medium text-sm tracking-wider uppercase">
              Преимущества
            </span>
            <div className="w-12 h-0.5 bg-electric-gradient"></div>
          </div>

          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-white mb-6">
            Почему выбирают
            <span className="automotive-text-gradient"> нас</span>
          </h2>

          <p className="text-xl text-automotive-chrome max-w-2xl mx-auto">
            Мы предоставляем полный спектр услуг для комфортной и безопасной
            аренды автомобилей
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="automotive-card rounded-automotive group hover:scale-105 transition-all duration-500"
            >
              <CardContent className="p-8 text-center space-y-4">
                {/* Icon */}
                <div className="relative mx-auto w-16 h-16 bg-automotive-steel/50 rounded-2xl flex items-center justify-center group-hover:bg-electric-gradient transition-all duration-300">
                  <Icon
                    name={feature.icon as any}
                    size={32}
                    className={`${feature.color} group-hover:text-white transition-colors duration-300`}
                  />

                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-electric-gradient opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-300"></div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-montserrat font-bold text-white group-hover:text-automotive-electric transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-automotive-silver text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
