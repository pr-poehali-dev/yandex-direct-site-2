import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  const workSteps = [
    {
      step: 1,
      title: "Анализ ниши",
      description: "Изучаю конкурентов, аудиторию и ключевые слова",
      duration: "1-2 дня"
    },
    {
      step: 2,
      title: "Настройка кампаний",
      description: "Создаю структуру рекламных кампаний и объявления",
      duration: "2-3 дня"
    },
    {
      step: 3,
      title: "Запуск и тестирование",
      description: "Запускаю рекламу и провожу A/B тестирование",
      duration: "1 день"
    },
    {
      step: 4,
      title: "Оптимизация",
      description: "Анализирую результаты и улучшаю показатели",
      duration: "Постоянно"
    }
  ];

  const benefits = [
    {
      icon: "Target",
      title: "Точное попадание",
      description: "Настраиваю рекламу на вашу целевую аудиторию с точностью до 95%"
    },
    {
      icon: "TrendingUp", 
      title: "Рост конверсий",
      description: "Увеличиваю конверсию в среднем на 40% за первый месяц"
    },
    {
      icon: "DollarSign",
      title: "Снижение CPC",
      description: "Оптимизирую ставки и снижаю стоимость клика на 25-30%"
    },
    {
      icon: "BarChart3",
      title: "Аналитика 24/7",
      description: "Предоставляю детальные отчеты каждую неделю"
    }
  ];

  const reviews = [
    {
      name: "Алексей Иванов",
      company: "ИП Иванов",
      text: "За 3 месяца работы с Юрием ROI вырос с 150% до 380%. Отличный специалист!",
      result: "+230% ROI"
    },
    {
      name: "Мария Петрова", 
      company: "Салон красоты 'Элит'",
      text: "Количество заявок увеличилось в 2.5 раза, а стоимость лида снизилась на 40%",
      result: "+150% лидов"
    },
    {
      name: "Владимир Сидоров",
      company: "Автосервис 'Профи'",
      text: "Профессиональный подход, всегда на связи. Рекомендую всем!",
      result: "+200% звонков"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-orange-bright/5">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary via-primary/90 to-secondary pt-20 pb-32">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30">
                🚀 Сертифицированный специалист Яндекса
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Яндекс Директ<br />
                <span className="text-secondary">Эксперт</span>
              </h1>
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                Увеличиваю продажи через контекстную рекламу. 
                Более 200 успешных проектов за 5 лет работы.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
                  <Icon name="MessageCircle" className="mr-2" size={20} />
                  Получить консультацию
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                  <Icon name="FileText" className="mr-2" size={20} />
                  Посмотреть кейсы
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">200+</div>
                  <div className="text-sm text-white/80">Проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">5</div>
                  <div className="text-sm text-white/80">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">350%</div>
                  <div className="text-sm text-white/80">Средний ROI</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm p-8">
                <img 
                  src="/img/c4503fa9-b0c8-405b-8452-18f5d9793d9f.jpg" 
                  alt="Яндекс Директ эксперт"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-secondary text-white p-6 rounded-2xl shadow-2xl">
                <div className="text-2xl font-bold">97%</div>
                <div className="text-sm">Довольных клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Steps */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Как я работаю</Badge>
            <h2 className="text-4xl font-bold mb-6">Этапы работы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Проверенная система, которая приводит к результату
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workSteps.map((step, index) => (
              <Card key={index} className="relative border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                  <Badge variant="secondary" className="w-fit">{step.duration}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Преимущества</Badge>
            <h2 className="text-4xl font-bold mb-6">Почему выбирают меня</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Результат, который говорит сам за себя
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={benefit.icon as any} className="text-white" size={24} />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Отзывы</Badge>
            <h2 className="text-4xl font-bold mb-6">Что говорят клиенты</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Реальные результаты реальных людей
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.company}</CardDescription>
                    </div>
                    <Badge className="bg-gradient-to-r from-primary to-secondary text-white">
                      {review.result}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed italic">"{review.text}"</p>
                  <div className="flex text-yellow-400 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" className="fill-current" size={16} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary via-primary/90 to-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Готовы увеличить продажи?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Получите бесплатную консультацию и узнайте, как увеличить ROI вашей рекламы на 200%+
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
                <Icon name="Phone" className="mr-2" size={20} />
                Позвонить сейчас
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                <Icon name="Send" className="mr-2" size={20} />
                Написать в Telegram
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div className="flex items-center justify-center gap-3">
                <Icon name="Clock" className="text-secondary" size={24} />
                <span>Ответ в течение часа</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Icon name="Shield" className="text-secondary" size={24} />
                <span>Гарантия результата</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Icon name="Award" className="text-secondary" size={24} />
                <span>5 лет опыта</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Юрий Директолог</h3>
              <p className="text-white/70 mb-6">
                Эксперт по контекстной рекламе в Яндекс Директ. 
                Помогаю бизнесу расти через эффективную рекламу.
              </p>
              <div className="flex gap-4">
                <Button variant="ghost" size="sm" className="text-white hover:text-primary">
                  <Icon name="Phone" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-white hover:text-primary">
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-white hover:text-primary">
                  <Icon name="Mail" size={20} />
                </Button>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-white/70">
                <li>Настройка Яндекс Директ</li>
                <li>Аудит рекламных кампаний</li>
                <li>Оптимизация ROI</li>
                <li>Аналитика и отчетность</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-3 text-white/70">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>yury@directolog.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MessageCircle" size={16} />
                  <span>@yury_direct</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/50">
            <p>&copy; 2024 Юрий Директолог. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}