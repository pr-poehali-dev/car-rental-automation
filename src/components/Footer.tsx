import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-automotive-midnight text-automotive-chrome relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(14,165,233,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(155,135,245,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-electric-gradient rounded-lg shadow-electric">
                <Icon name="Car" className="text-white" size={28} />
              </div>
              <span className="text-white text-2xl font-montserrat font-bold tracking-wide">
                ELITE<span className="text-automotive-electric">DRIVE</span>
              </span>
            </div>

            <p className="text-sm leading-relaxed text-automotive-silver">
              Премиальная аренда автомобилей с 2018 года. Лучшие условия,
              безупречный сервис и элитные автомобили для особых моментов вашей
              жизни.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              {[
                { icon: "Instagram", color: "hover:text-pink-400" },
                { icon: "Facebook", color: "hover:text-blue-400" },
                { icon: "Twitter", color: "hover:text-sky-400" },
                { icon: "Youtube", color: "hover:text-red-400" },
              ].map((social, index) => (
                <button
                  key={index}
                  className={`w-10 h-10 bg-automotive-steel/50 rounded-lg flex items-center justify-center text-automotive-silver ${social.color} transition-all duration-300 hover:scale-110 hover:bg-automotive-steel`}
                >
                  <Icon name={social.icon as any} size={18} />
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-white font-montserrat font-semibold text-lg">
              Услуги
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                "Краткосрочная аренда",
                "Долгосрочная аренда",
                "Корпоративные клиенты",
                "Доставка автомобиля",
                "Трансфер в аэропорт",
                "Свадебные автомобили",
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-automotive-silver hover:text-automotive-electric transition-colors duration-300 flex items-center space-x-2"
                  >
                    <Icon name="ChevronRight" size={14} />
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-white font-montserrat font-semibold text-lg">
              Контакты
            </h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-automotive-steel/50 rounded-lg flex items-center justify-center mt-0.5">
                  <Icon
                    name="Phone"
                    size={16}
                    className="text-automotive-electric"
                  />
                </div>
                <div>
                  <p className="text-white font-medium">+7 (495) 123-45-67</p>
                  <p className="text-automotive-silver">Круглосуточно</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-automotive-steel/50 rounded-lg flex items-center justify-center mt-0.5">
                  <Icon
                    name="Mail"
                    size={16}
                    className="text-automotive-electric"
                  />
                </div>
                <div>
                  <p className="text-white font-medium">info@elitedrive.ru</p>
                  <p className="text-automotive-silver">
                    Ответим в течение часа
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-automotive-steel/50 rounded-lg flex items-center justify-center mt-0.5">
                  <Icon
                    name="MapPin"
                    size={16}
                    className="text-automotive-electric"
                  />
                </div>
                <div>
                  <p className="text-white font-medium">
                    Москва, Кутузовский пр-т, 12
                  </p>
                  <p className="text-automotive-silver">
                    Ежедневно 9:00 - 21:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-white font-montserrat font-semibold text-lg">
              Новости и акции
            </h4>
            <p className="text-sm text-automotive-silver">
              Подпишитесь на рассылку и получайте эксклюзивные предложения
              первыми
            </p>

            <div className="space-y-3">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="flex-1 px-4 py-3 bg-automotive-steel/50 border border-automotive-silver/20 rounded-l-lg text-white placeholder-automotive-silver focus:outline-none focus:border-automotive-electric transition-colors"
                />
                <Button className="automotive-button rounded-l-none rounded-r-lg px-6">
                  <Icon name="Send" size={16} />
                </Button>
              </div>

              <div className="flex items-center space-x-2 text-xs text-automotive-silver">
                <Icon
                  name="Shield"
                  size={14}
                  className="text-automotive-electric"
                />
                <span>Мы не передаем данные третьим лицам</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-automotive-silver/10 pt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-6 text-sm text-automotive-silver">
            <span>&copy; 2024 ELITEDRIVE. Все права защищены.</span>
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="hover:text-automotive-electric transition-colors"
              >
                Политика конфиденциальности
              </a>
              <a
                href="#"
                className="hover:text-automotive-electric transition-colors"
              >
                Условия использования
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-sm text-automotive-silver">
            <span>Разработано с</span>
            <Icon name="Heart" size={14} className="text-red-400" />
            <span>в России</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
