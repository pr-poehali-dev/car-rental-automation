import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Admin: React.FC = () => {
  const cars = [
    {
      id: 1,
      model: "Mercedes S-Class",
      status: "Доступен",
      location: "Москва",
      bookings: 15,
    },
    { id: 2, model: "BMW X7", status: "Занят", location: "СПб", bookings: 12 },
    {
      id: 3,
      model: "Audi A8",
      status: "Обслуживание",
      location: "Москва",
      bookings: 8,
    },
  ];

  const bookings = [
    {
      id: 1,
      client: "Александр И.",
      car: "Mercedes S-Class",
      date: "19 июня",
      status: "Активно",
    },
    {
      id: 2,
      client: "Мария П.",
      car: "BMW X7",
      date: "18 июня",
      status: "Завершено",
    },
    {
      id: 3,
      client: "Дмитрий К.",
      car: "Audi A8",
      date: "17 июня",
      status: "Отменено",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 pt-8 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">
                Панель администратора
              </h1>
              <p className="text-slate-300">
                Управление автопарком и бронированиями
              </p>
            </div>
            <Button className="bg-amber-400 text-slate-900 hover:bg-amber-500">
              <Icon name="Plus" size={16} className="mr-2" />
              Добавить авто
            </Button>
          </div>

          {/* Статистика */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-slate-300">
                  Всего автомобилей
                </CardTitle>
                <Icon name="Car" className="h-4 w-4 text-amber-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">47</div>
                <p className="text-xs text-slate-400">+3 в этом месяце</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-slate-300">
                  Активные заказы
                </CardTitle>
                <Icon name="Clock" className="h-4 w-4 text-amber-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">12</div>
                <p className="text-xs text-slate-400">+2 за сегодня</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-slate-300">
                  Доход сегодня
                </CardTitle>
                <Icon name="TrendingUp" className="h-4 w-4 text-amber-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">₽67,800</div>
                <p className="text-xs text-slate-400">+15% от вчера</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-slate-300">
                  Загрузка парка
                </CardTitle>
                <Icon name="BarChart3" className="h-4 w-4 text-amber-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">73%</div>
                <Progress value={73} className="mt-2" />
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="cars" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-slate-800 border-slate-700">
              <TabsTrigger
                value="cars"
                className="data-[state=active]:bg-amber-400 data-[state=active]:text-slate-900"
              >
                Автопарк
              </TabsTrigger>
              <TabsTrigger
                value="bookings"
                className="data-[state=active]:bg-amber-400 data-[state=active]:text-slate-900"
              >
                Бронирования
              </TabsTrigger>
              <TabsTrigger
                value="analytics"
                className="data-[state=active]:bg-amber-400 data-[state=active]:text-slate-900"
              >
                Аналитика
              </TabsTrigger>
            </TabsList>

            <TabsContent value="cars" className="mt-6">
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">
                    Управление автопарком
                  </CardTitle>
                  <CardDescription className="text-slate-400">
                    Список всех автомобилей и их статус
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {cars.map((car) => (
                      <div
                        key={car.id}
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
                              {car.model}
                            </h3>
                            <p className="text-sm text-slate-400">
                              {car.location} • {car.bookings} бронирований
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge
                            variant="outline"
                            className={
                              car.status === "Доступен"
                                ? "text-green-400 border-green-400/30"
                                : car.status === "Занят"
                                  ? "text-amber-400 border-amber-400/30"
                                  : "text-red-400 border-red-400/30"
                            }
                          >
                            {car.status}
                          </Badge>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-slate-600 text-slate-300"
                          >
                            <Icon name="Edit" size={14} className="mr-1" />
                            Редактировать
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="bookings" className="mt-6">
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">
                    Управление бронированиями
                  </CardTitle>
                  <CardDescription className="text-slate-400">
                    Последние заказы и их статус
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {bookings.map((booking) => (
                      <div
                        key={booking.id}
                        className="flex items-center justify-between p-4 rounded-lg bg-slate-700/50 border border-slate-600"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-amber-400/20 rounded-lg flex items-center justify-center">
                            <Icon
                              name="User"
                              className="text-amber-400"
                              size={20}
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold text-white">
                              {booking.client}
                            </h3>
                            <p className="text-sm text-slate-400">
                              {booking.car} • {booking.date}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge
                            variant="outline"
                            className={
                              booking.status === "Активно"
                                ? "text-blue-400 border-blue-400/30"
                                : booking.status === "Завершено"
                                  ? "text-green-400 border-green-400/30"
                                  : "text-red-400 border-red-400/30"
                            }
                          >
                            {booking.status}
                          </Badge>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-slate-600 text-slate-300"
                          >
                            <Icon name="Eye" size={14} className="mr-1" />
                            Детали
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-slate-800 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white">
                      Популярные автомобили
                    </CardTitle>
                    <CardDescription className="text-slate-400">
                      Топ моделей по количеству бронирований
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">Mercedes S-Class</span>
                      <div className="flex items-center gap-2">
                        <Progress value={85} className="w-20" />
                        <span className="text-sm text-slate-400">85%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">BMW X7</span>
                      <div className="flex items-center gap-2">
                        <Progress value={67} className="w-20" />
                        <span className="text-sm text-slate-400">67%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">Audi A8</span>
                      <div className="flex items-center gap-2">
                        <Progress value={43} className="w-20" />
                        <span className="text-sm text-slate-400">43%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white">Доходы по дням</CardTitle>
                    <CardDescription className="text-slate-400">
                      Статистика за последнюю неделю
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">Понедельник</span>
                        <span className="text-white font-semibold">
                          ₽45,200
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">Вторник</span>
                        <span className="text-white font-semibold">
                          ₽52,800
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">Среда</span>
                        <span className="text-white font-semibold">
                          ₽38,600
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">Четверг</span>
                        <span className="text-white font-semibold">
                          ₽67,400
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">Пятница</span>
                        <span className="text-white font-semibold">
                          ₽78,900
                        </span>
                      </div>
                    </div>
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

export default Admin;
