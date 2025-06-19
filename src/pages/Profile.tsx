import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Profile: React.FC = () => {
  const bookingHistory = [
    {
      id: 1,
      car: "BMW X5",
      date: "15 ноября 2024",
      status: "Завершено",
      amount: "12,500 ₽",
    },
    {
      id: 2,
      car: "Mercedes E-Class",
      date: "8 ноября 2024",
      status: "Завершено",
      amount: "8,900 ₽",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 pt-8 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Заголовок профиля */}
          <div className="flex items-center gap-6 mb-8">
            <Avatar className="w-24 h-24 border-4 border-amber-400">
              <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" />
              <AvatarFallback className="bg-amber-400 text-slate-900 text-2xl font-bold">
                АИ
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-white mb-2">
                Александр Иванов
              </h1>
              <p className="text-slate-300 mb-3">
                Премиум клиент • На платформе с 2023 года
              </p>
              <Badge
                variant="secondary"
                className="bg-amber-400/20 text-amber-400 border-amber-400/30"
              >
                <Icon name="Crown" size={16} className="mr-1" />
                VIP статус
              </Badge>
            </div>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-slate-800 border-slate-700">
              <TabsTrigger
                value="overview"
                className="data-[state=active]:bg-amber-400 data-[state=active]:text-slate-900"
              >
                Обзор
              </TabsTrigger>
              <TabsTrigger
                value="bookings"
                className="data-[state=active]:bg-amber-400 data-[state=active]:text-slate-900"
              >
                Бронирования
              </TabsTrigger>
              <TabsTrigger
                value="settings"
                className="data-[state=active]:bg-amber-400 data-[state=active]:text-slate-900"
              >
                Настройки
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-slate-800 border-slate-700">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-slate-300">
                      Всего поездок
                    </CardTitle>
                    <Icon name="Car" className="h-4 w-4 text-amber-400" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-white">24</div>
                    <p className="text-xs text-slate-400">+2 в этом месяце</p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800 border-slate-700">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-slate-300">
                      Потрачено
                    </CardTitle>
                    <Icon
                      name="CreditCard"
                      className="h-4 w-4 text-amber-400"
                    />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-white">
                      ₽186,400
                    </div>
                    <p className="text-xs text-slate-400">За всё время</p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800 border-slate-700">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-slate-300">
                      Рейтинг
                    </CardTitle>
                    <Icon name="Star" className="h-4 w-4 text-amber-400" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-white">4.9</div>
                    <p className="text-xs text-slate-400">Отличный клиент</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">
                    Личная информация
                  </CardTitle>
                  <CardDescription className="text-slate-400">
                    Управляйте своими личными данными
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-slate-300">
                        Email
                      </label>
                      <p className="text-white">alexander.ivanov@email.com</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-300">
                        Телефон
                      </label>
                      <p className="text-white">+7 (999) 123-45-67</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-300">
                        Город
                      </label>
                      <p className="text-white">Москва</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-300">
                        Дата регистрации
                      </label>
                      <p className="text-white">15 марта 2023</p>
                    </div>
                  </div>
                  <Button className="bg-amber-400 text-slate-900 hover:bg-amber-500">
                    <Icon name="Edit" size={16} className="mr-2" />
                    Редактировать профиль
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="bookings" className="mt-6">
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">
                    История бронирований
                  </CardTitle>
                  <CardDescription className="text-slate-400">
                    Ваши последние поездки и бронирования
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {bookingHistory.map((booking) => (
                      <div
                        key={booking.id}
                        className="flex items-center justify-between p-4 rounded-lg bg-slate-700/50 border border-slate-600"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-amber-400/20 rounded-lg flex items-center justify-center">
                            <Icon
                              name="Car"
                              className="text-amber-400"
                              size={20}
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold text-white">
                              {booking.car}
                            </h3>
                            <p className="text-sm text-slate-400">
                              {booking.date}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-white">
                            {booking.amount}
                          </p>
                          <Badge
                            variant="outline"
                            className="text-green-400 border-green-400/30"
                          >
                            {booking.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Separator className="my-6 bg-slate-700" />
                  <Button
                    variant="outline"
                    className="w-full border-slate-600 text-slate-300 hover:bg-slate-700"
                  >
                    Загрузить больше
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="mt-6">
              <div className="space-y-6">
                <Card className="bg-slate-800 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white">Уведомления</CardTitle>
                    <CardDescription className="text-slate-400">
                      Настройте, как вы хотите получать уведомления
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-white">
                          Email уведомления
                        </h4>
                        <p className="text-sm text-slate-400">
                          Получать уведомления о бронированиях на email
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-slate-600"
                      >
                        Включено
                      </Button>
                    </div>
                    <Separator className="bg-slate-700" />
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-white">
                          SMS уведомления
                        </h4>
                        <p className="text-sm text-slate-400">
                          Получать SMS о статусе заказов
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-slate-600"
                      >
                        Выключено
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white">Безопасность</CardTitle>
                    <CardDescription className="text-slate-400">
                      Управление паролем и двухфакторной аутентификацией
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button
                      variant="outline"
                      className="w-full border-slate-600 text-slate-300 hover:bg-slate-700"
                    >
                      <Icon name="Lock" size={16} className="mr-2" />
                      Изменить пароль
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-slate-600 text-slate-300 hover:bg-slate-700"
                    >
                      <Icon name="Shield" size={16} className="mr-2" />
                      Настроить 2FA
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Profile;
