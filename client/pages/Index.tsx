import { useState, useEffect } from "react";
import {
  CheckCircle,
  Zap,
  Clock,
  Target,
  Calendar,
  Download,
  MessageSquare,
} from "lucide-react";

export default function Index() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // Track active section for header highlight
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "pain", "how", "results", "features", "access"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom > 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img
                src="https://dtg.sportomatics.com/logo.png"
                alt="DTG Studio"
                className="h-8 w-auto"
              />
              <span className="font-semibold text-lg hidden sm:inline">
                DTG Studio
              </span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("how")}
                className={`text-sm font-medium transition-colors ${
                  activeSection === "how"
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                Как работает
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className={`text-sm font-medium transition-colors ${
                  activeSection === "features"
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                Возможности
              </button>
              <button
                onClick={() => scrollToSection("access")}
                className={`text-sm font-medium transition-colors ${
                  activeSection === "access"
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                Доступ
              </button>
            </nav>

            {/* CTA Button */}
            <button
              onClick={() => scrollToSection("access")}
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition"
            >
              Вступить
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
                Перестань планировать день и чувствовать провал к вечеру
              </h1>
              <div className="text-lg text-muted-foreground mb-8 leading-relaxed">
                <p className="mb-4">
                  Каждое утро составляешь план из пяти задач, к вечеру делаешь
                  только две и ощущаешь себя неудачником?
                </p>
                <p>
                  При помощи DTG Studio ты за пару часов прогоняешь весь завал
                  через "мастер разбора" и получаешь список готовых действий.
                  Утром ты больше не пишешь план, ты открываешь систему и
                  смотришь, что можно сделать прямо сейчас. Сделал хотя бы одну
                  задачу - уже прогресс. Не получилось сделать – не беда, планов
                  и не было.
                </p>
              </div>

              {/* Benefits */}
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">
                    Список готовых действий вместо ежедневного планирования
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">
                    Реальные дедлайны отдельно, без красной свалки просроченного
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">
                    Гибкость выбора вместо чувства вины
                  </span>
                </li>
              </ul>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection("how")}
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition"
                >
                  Посмотреть как работает
                </button>
                <button
                  onClick={() => scrollToSection("access")}
                  className="inline-flex items-center justify-center rounded-full border border-primary/35 px-6 py-3 text-sm font-medium text-primary hover:bg-primary/10 transition"
                >
                  Вступить
                </button>
              </div>
            </div>

            {/* Right Column - Screenshot */}
            <div className="flex justify-center">
              <div className="w-full max-w-md bg-card border border-border rounded-2xl shadow-card p-3">
                <a
                  href="https://cdn.builder.io/api/v1/image/assets%2F8a054a64822644caab1530df05a2c194%2F45b44fb89cae42628acfa6de186eeebe?format=webp&width=1920"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F8a054a64822644caab1530df05a2c194%2F45b44fb89cae42628acfa6de186eeebe?format=webp&width=800&height=1200"
                    alt="DTG Studio Product Screenshot"
                    className="w-full rounded-xl object-cover"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Section */}
      <section id="pain" className="bg-background py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-border rounded-2xl shadow-card p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              Узнаешь себя?
            </h2>
            <ul className="space-y-4 mb-6">
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                <span className="text-foreground">
                  Составил план на день из пяти задач, к вечеру сделал две,
                  чувствуешь вину
                </span>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                <span className="text-foreground">
                  Todoist показывает 12 просроченных, и ты избегаешь его
                  открывать
                </span>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                <span className="text-foreground">
                  Реальность ломает планы: звонок, срочная задача, встреча
                  затянулась
                </span>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                <span className="text-foreground">
                  Пробовал time blocking, и календарь развалился через час
                </span>
              </li>
            </ul>
            <p className="text-foreground font-medium">
              Если узнаешь себя хотя бы в двух пунктах - тебе нужна гибкость
              выбора.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how" className="bg-background py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-12">
            Как это работает
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Steps */}
            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: 'Записал мысль во "Входящие" за 10 секунд',
                  icon: <MessageSquare className="h-5 w-5" />,
                },
                {
                  step: 2,
                  title: "Разобрал накопившееся через мастер разбора",
                  icon: <Zap className="h-5 w-5" />,
                },
                {
                  step: 3,
                  title: "Получил контекст и реальные дедлайны отдельно",
                  icon: <Target className="h-5 w-5" />,
                },
                {
                  step: 4,
                  title:
                    "Открыл нужный контекст и сделал одну задачу. Или две. Или, даже, пять. Сколько получилось.",
                  icon: <CheckCircle className="h-5 w-5" />,
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="bg-card border border-border rounded-xl shadow-card p-4 sm:p-6"
                >
                  <div className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground border border-border mb-4">
                    Шаг {item.step}
                  </div>
                  <p className="text-foreground font-medium">{item.title}</p>
                </div>
              ))}
            </div>

            {/* Screenshot */}
            <div className="flex justify-center md:justify-end">
              <div className="w-full max-w-md bg-card border border-border rounded-2xl shadow-card p-3">
                <a
                  href="https://cdn.builder.io/api/v1/image/assets%2F8a054a64822644caab1530df05a2c194%2F7c803fd5f805469eb0b21099e8f21829?format=webp&width=1920"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F8a054a64822644caab1530df05a2c194%2F7c803fd5f805469eb0b21099e8f21829?format=webp&width=800&height=1200"
                    alt="DTG Studio Product Screenshot"
                    className="w-full rounded-xl object-cover"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="bg-background py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-12">
            Твоя трансформация
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Через 7 дней",
                content: (
                  <>
                    <p className="mb-4">
                      <strong>Первый рабочий контур</strong>
                    </p>
                    <p>
                      Весь завал обработан через мастер выгрузки задач из головы
                      и превращен в два-три десятка задач, сгруппированных в
                      проекты или отдельных, а неважные задачи типа планирования
                      отпуска через год или мечта выучить язык алеутов отнесены
                      в "когда-нибудь".
                    </p>
                    <p>
                      Утром ты не планируешь день, ты открываешь систему и
                      видишь список задач, которые подходят под текущую
                      ситуацию. 15 минут между встречами - берешь одну из
                      "быстрых". Сел за компьютер на 2 часа - открываешь
                      @компьютер. Закрыл одну задачу - это прогресс. Нет красных
                      счетчиков просроченного. Нет чувства провала за
                      "несделанный план".
                    </p>
                  </>
                ),
              },
              {
                title: "Через месяц",
                content: (
                  <>
                    <p className="mb-4">
                      <strong>Система работает на автомате</strong>
                    </p>
                    <p className="mb-4">
                      Появилась идея или задача - тратишь 10 секунд на фиксацию
                      в списке "Входящее", потом, по ситуации, еще 5 минут на
                      разбор накопившегося списка при помощи мастера, и она
                      легла в нужный контекст и, если нужно, к конкретной дате.
                    </p>
                    <p className="mb-4">
                      День прошел не по плану? Нормально! Плана же и не было!
                      Сделал 3 задачи - это прогресс, а не провал. Сделал 10 –
                      вообще красавчик!
                    </p>
                    <p>
                      В любой момент ты открываешь систему, смотришь актуальный
                      контекст и берешь то, что подходит сейчас.
                    </p>
                  </>
                ),
              },
              {
                title: "Через полгода",
                content: (
                  <>
                    <p className="mb-4">
                      <strong>Решения в моменте</strong>
                    </p>
                    <p>
                      Утро без мучительной планерки - ты просто смотришь список
                      в нужном контексте и выбираешь. Вся энергия идет в
                      выполнение, а не в переживания о "невыполненном плане". Ты
                      не пытаешься предсказать будущее, ты работаешь с тем, что
                      есть прямо сейчас, не теряя важное.
                    </p>
                  </>
                ),
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-card border border-border rounded-2xl shadow-card p-6 sm:p-8"
              >
                <h3 className="text-lg font-bold text-primary mb-3">
                  {item.title}
                </h3>
                <div className="text-muted-foreground leading-relaxed text-sm">
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-background py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-12">Возможности</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Мастер разбора входящих",
                description:
                  "Быстро разберешь накопившееся и разложишь по контекстам и дедлайнам без стресса.",
                icon: <Zap className="h-5 w-5" />,
              },
              {
                title: "Списки по контекстам",
                description:
                  "Переключайся между контекстами: дома, в офисе, с ноутбуком - видишь только нужные.",
                icon: <Target className="h-5 w-5" />,
              },
              {
                title: "Выбор вместо плана",
                description:
                  "Не план, а список готовых действий. Открыл контекст и делаешь то, что можешь.",
                icon: <CheckCircle className="h-5 w-5" />,
              },
              {
                title: "Контроль реальных дедлайнов",
                description:
                  "Дедлайны отдельно от потока. Видишь, что важно, а что можно отложить.",
                icon: <Clock className="h-5 w-5" />,
              },
              {
                title: "Мастер выгрузки задач из головы",
                description:
                  "Все, что крутится в голове, выгружаешь за минуту. Голова становится легче.",
                icon: <Download className="h-5 w-5" />,
              },
              {
                title: "Еженедельный обзор",
                description:
                  "Раз в неделю видишь, что сделал, что отложил и планируешь неделю вперед.",
                icon: <Calendar className="h-5 w-5" />,
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-card border border-border rounded-2xl shadow-card p-6 sm:p-8"
              >
                <div className="text-muted-foreground mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Access Section */}
      <section id="access" className="bg-background py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
              Ранний доступ без риска
            </h2>

            {/* Benefits */}
            <div className="max-w-2xl mb-10">
              <ul className="space-y-3 mb-8">
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">
                    Приглашение в бета для первых пользователей
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">
                    Твой голос повлияет на разработку
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">
                    Разбор вашего завала задач с основателем
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">
                    2 месяца бесплатного использования
                  </span>
                </li>
              </ul>
            </div>

            {/* Email Form */}
            <div className="w-full max-w-md">
              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-11 w-full rounded-full border border-input bg-background px-4 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                />
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition"
                >
                  Вступить в лист ожидания
                </button>
              </form>

              {subscribed && (
                <p className="text-center text-sm text-primary mt-3 font-medium">
                  Спасибо! Проверь почту.
                </p>
              )}

              <p className="text-center text-xs text-muted-foreground mt-4">
                Никакого спама. Только приглашение в бета-доступ.
              </p>
            </div>

            {/* CTA Text */}
            <p className="text-center text-sm text-muted-foreground mt-8 max-w-2xl">
              Ранний доступ в закрытый запуск и 2 месяца бесплатного
              использования для первых 100 пользователей.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>&copy; 2024 DTG Studio. Все права защищены.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition">
                Политика конфиденциальности
              </a>
              <p>hello@dtg.studio</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
