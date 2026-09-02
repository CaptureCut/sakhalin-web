export default function Home() {
  return (
    <div className="min-h-screen bg-fogWhite text-deepGraphite flex flex-col">

      {/* Navbar */}
      <header className="w-full px-6 py-5 flex items-center justify-between border-b border-mistGray/40 bg-fogWhite/80 backdrop-blur-sm">
        <div className="text-xl font-semibold tracking-tight">Sakhalin Web Development</div>

        <nav className="flex gap-6 text-softGraphite">
          <a href="#services" className="hover:text-deepGraphite transition-colors">Услуги</a>
          <a href="#projects" className="hover:text-deepGraphite transition-colors">Проекты</a>
          <a href="#approach" className="hover:text-deepGraphite transition-colors">Подход</a>
          <a href="#contacts" className="hover:text-deepGraphite transition-colors">Контакты</a>
        </nav>
      </header>

      {/* Hero */}
      <main className="relative flex flex-col items-center justify-center flex-1 px-6 py-40 bg-gradient-to-b from-fogWhite to-white">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-sakhalinTeal/10 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-sakhalinTeal/5 via-transparent to-transparent blur-3xl opacity-40 pointer-events-none" />

        <div className="max-w-3xl w-full flex flex-col gap-10 text-center relative">
          <h1 className="text-5xl font-semibold tracking-tight">Минималистичные сайты для Сахалина</h1>

          <p className="text-lg text-softGraphite leading-relaxed max-w-xl mx-auto">
            Чистый северный дизайн. Аккуратная структура. Высокая скорость.
          </p>

          <a
            href="#contacts"
            className="mx-auto inline-block bg-sakhalinTeal text-white px-8 py-4 rounded-lg font-medium hover:bg-sakhalinTeal/80 transition-colors"
          >
            Связаться
          </a>
        </div>
      </main>

      {/* Services */}
      <section id="services" className="px-6 py-24 bg-white border-t border-mistGray/40">
        <div className="max-w-4xl mx-auto flex flex-col gap-12">
          <h2 className="text-3xl font-semibold tracking-tight text-center">Услуги</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                title: "Разработка сайтов",
                text: "Простые, быстрые и надёжные сайты под ключ. Минимализм, скорость, чистый дизайн."
              },
              {
                title: "Редизайн и обновление",
                text: "Обновление старых сайтов, улучшение структуры, скорости и визуала."
              },
              {
                title: "Настройка домена и хостинга",
                text: "Подключение домена, SSL, почты, деплой на любой хостинг."
              },
              {
                title: "Техническая поддержка",
                text: "Обновления, исправления, сопровождение и развитие проекта."
              }
            ].map((item, i) => (
              <div key={i} className="p-8 border border-mistGray/40 rounded-xl bg-fogWhite shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                <p className="text-softGraphite leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-6 py-24 bg-white border-t border-mistGray/40">
        <div className="max-w-4xl mx-auto flex flex-col gap-12">
          <h2 className="text-3xl font-semibold tracking-tight text-center">Проекты</h2>

          <p className="text-softGraphite text-center max-w-xl mx-auto leading-relaxed">
            Несколько примеров минималистичных сайтов, выполненных в северном стиле.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                title: "Сайт для локального бизнеса",
                text: "Минималистичный лендинг с акцентом на чистоту и скорость.",
                img: "/images/projects/landing-en.jpg"
              },
              {
                title: "Мини‑портфолио",
                text: "Чистое портфолио для фотографа или мастера.",
                img: "/images/projects/portfolio_sakhalin_fog.jpg"
              },
              {
                title: "Сайт‑визитка",
                text: "Одностраничный сайт для специалиста или небольшого сервиса.",
                img: "/images/projects/personal_sakhalin.jpg"
              },
              {
                title: "Редизайн старого сайта",
                text: "Полное обновление структуры, визуала и скорости.",
                img: "/images/projects/redesign_sakhalin_city.jpg"
              }
            ].map((item, i) => (
              <div key={i} className="p-6 border border-mistGray/40 rounded-xl bg-fogWhite shadow-sm hover:shadow-md transition-shadow">
                <img
                  src={item.img}
                  alt={item.title}
                  className="rounded-lg mb-4 w-full h-auto shadow-sm"
                />
                <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                <p className="text-softGraphite leading-relaxed mb-4">{item.text}</p>
                <a href="#" className="text-sakhalinTeal font-medium hover:underline">Смотреть пример</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="px-6 py-24 bg-fogWhite border-t border-mistGray/40">
        <div className="max-w-3xl mx-auto flex flex-col gap-10 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">Подход</h2>

          <p className="text-lg text-softGraphite leading-relaxed max-w-xl mx-auto">
            Спокойная минималистичная веб‑разработка для малого бизнеса Сахалина. Чистый северный стиль, аккуратная структура и высокая скорость.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
            {[
              { title: "Минимализм", text: "Чистые сайты без перегруза. Спокойные цвета, аккуратная структура." },
              { title: "Скорость", text: "Лёгкие страницы, быстрые загрузки, оптимизация под мобильные устройства." },
              { title: "Автономность", text: "Спокойная работа без лишних коммуникаций. Чёткие этапы и сроки." },
              { title: "Надёжность", text: "Сайты легко обновляются, не ломаются и не требуют сложного обслуживания." }
            ].map((item, i) => (
              <div key={i} className="p-6 border border-mistGray/40 rounded-xl bg-white shadow-sm">
                <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                <p className="text-softGraphite leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline & Payment */}
      <section id="timeline" className="px-6 py-24 bg-white border-t border-mistGray/40">
        <div className="max-w-3xl mx-auto flex flex-col gap-10 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">Сроки и оплата</h2>

          <p className="text-softGraphite leading-relaxed max-w-xl mx-auto">
            Работа выполняется спокойно и аккуратно. Ответ на почту — в течение 3–7 дней.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
            {[
              { title: "Сайт под ключ", text: "21–30 дней. Чистый дизайн, аккуратная структура." },
              { title: "Редизайн", text: "10–20 дней. Обновление визуала, улучшение скорости и структуры." },
              { title: "Ответ на почту", text: "В течение 3–7 дней. Почта проверяется примерно раз в неделю." },
              { title: "Поддержка", text: "Небольшие правки, обновления, сопровождение." }
            ].map((item, i) => (
              <div key={i} className="p-6 border border-mistGray/40 rounded-xl bg-fogWhite shadow-sm">
                <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                <p className="text-softGraphite leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Payment */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border border-mistGray/40 rounded-xl bg-white shadow-sm text-left">
              <h4 className="text-lg font-medium mb-2">Оплата</h4>
              <p className="text-softGraphite leading-relaxed mb-2">
                Предоплата <strong>30–50%</strong>. Остаток — после подтверждения готовности проекта.
              </p>
              <p className="text-softGraphite leading-relaxed">
                При демонстрации — временный домен или скринкаст. После подтверждения клиент оплачивает остаток.
              </p>
            </div>

            <div className="p-6 border border-mistGray/40 rounded-xl bg-white shadow-sm text-left">
              <h4 className="text-lg font-medium mb-2">Способы оплаты</h4>
              <ul className="text-softGraphite leading-relaxed list-disc list-inside">
                <li>Банковский перевод (СБП)</li>
                <li>Оплата картой (Сбер, Тинькофф и др.)</li>
                <li>Поддержка подписки на сопровождение — 1–3 тыс ₽/мес</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Request */}
      <section id="request" className="px-6 py-24 bg-white border-t border-mistGray/40">
        <div className="max-w-3xl mx-auto flex flex-col gap-10">
          <h2 className="text-3xl font-semibold tracking-tight text-center">Оставить заявку</h2>

          <p className="text-softGraphite text-center max-w-xl mx-auto leading-relaxed">
            Если нужен сайт — заполните форму. Ответ будет отправлен на почту.
          </p>

          <form
            action="mailto:sunsetpacificpack@gmail.com"
            method="POST"
            encType="text/plain"
            className="flex flex-col gap-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Ваше имя"
              className="px-4 py-3 border border-mistGray/40 rounded-lg bg-fogWhite focus:outline-none focus:border-sakhalinTeal/60 transition-colors"
            />

            <input
              type="text"
              name="business"
              placeholder="Название бизнеса (если есть)"
              className="px-4 py-3 border border-mistGray/40 rounded-lg bg-fogWhite focus:outline-none focus:border-sakhalinTeal/60 transition-colors"
            />

            <textarea
              name="details"
              placeholder="Кратко опишите задачу"
              className="px-4 py-3 border border-mistGray/40 rounded-lg bg-fogWhite h-32 resize-none focus:outline-none focus:border-sakhalinTeal/60 transition-colors"
            />

            <button
              type="submit"
              className="bg-sakhalinTeal text-white px-8 py-4 rounded-lg font-medium hover:bg-sakhalinTeal/80 transition-colors"
            >
              Отправить заявку
            </button>
          </form>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="px-6 py-24 bg-fogWhite border-t border-mistGray/40">
        <div className="max-w-3xl mx-auto flex flex-col gap-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">Контакты</h2>

          <p className="text-lg text-softGraphite leading-relaxed">Для связи используйте почту:</p>

          <a href="mailto:sunsetpacificpack@gmail.com" className="text-sakhalinTeal text-xl font-medium hover:underline">
            sunsetpacificpack@gmail.com
          </a>

          <p className="text-sm text-softGraphite mt-4">
            Ответы в течение 3–7 дней.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full px-6 py-6 border-t border-mistGray/40 text-softGraphite text-sm">
        <div className="max-w-3xl mx-auto flex justify-between">
          <span>Sakhalin Web Development</span>
          <span>© 2026</span>
        </div>
      </footer>
    </div>
  );
}
