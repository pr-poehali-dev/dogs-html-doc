import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const benefits = [
    {
      icon: "GraduationCap",
      title: "Экспертные преподаватели",
      description: "Обучение от практикующих специалистов с многолетним опытом"
    },
    {
      icon: "Clock",
      title: "Гибкий график",
      description: "Учитесь в удобное время без привязки к расписанию"
    },
    {
      icon: "Award",
      title: "Сертификат",
      description: "Получите документ о прохождении курса по завершении обучения"
    },
    {
      icon: "Users",
      title: "Поддержка сообщества",
      description: "Общайтесь с единомышленниками и обменивайтесь опытом"
    },
    {
      icon: "BookOpen",
      title: "Практические задания",
      description: "Закрепляйте знания на реальных кейсах и проектах"
    },
    {
      icon: "Zap",
      title: "Быстрый старт",
      description: "Начните обучение сразу после регистрации без ожидания"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/30">
      <section className="container mx-auto px-4 py-16 md:py-24 fade-in">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
            Онлайн-обучение
            <span className="block text-primary mt-2">нового поколения</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Освойте востребованные навыки с помощью современных курсов от ведущих экспертов
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all">
              Начать обучение
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 rounded-full border-2"
            >
              Смотреть курсы
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Преимущества обучения
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Мы создали идеальные условия для вашего профессионального роста
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in-up">
            {benefits.map((benefit, index) => (
              <Card 
                key={index}
                className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 group"
              >
                <div className="mb-4 inline-flex p-3 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon 
                    name={benefit.icon} 
                    className="text-primary" 
                    size={28}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 pb-24">
        <div className="max-w-4xl mx-auto">
          <Card className="p-12 md:p-16 text-center bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Готовы начать обучение?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Присоединяйтесь к тысячам студентов, которые уже меняют свою жизнь с нашими курсами
            </p>
            <Button size="lg" className="text-lg px-10 py-6 rounded-full shadow-lg hover:shadow-xl transition-all">
              Записаться на курс
              <Icon name="Sparkles" className="ml-2" size={20} />
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
