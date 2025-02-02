export function openBurInfo() {
    const newWindow = window.open("", "_blank", "width=800,height=600,scrollbars=yes");
    if (newWindow) {
      newWindow.document.write(`
        <html>
        <head>
          <title>Допомога Україні в місті Відень</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; margin: 20px; color: #333; }
            h1 { color: #007bff; }
            a { color: #007bff; text-decoration: none; }
            a:hover { text-decoration: underline; }
          </style>
        </head>
        <body>
          <h2>Допомога Україні у місті Бургас</h2>
    <p>Місто Бургас надає всебічну підтримку українцям, які постраждали від війни, забезпечуючи допомогу в житлі, працевлаштуванні, медичних послугах, освіті та інтеграції.</p>

    <h3>Проживання та житлова допомога</h3>
    <ul>
      <li><a href="https://www.visitukraine.bg" target="_blank">Visit Ukraine</a>: Інформація про безкоштовні програми житла.</li>
      <li><a href="https://enableme.bg" target="_blank">EnableMe Ukraine</a>: Ресурси для підтримки біженців.</li>
    </ul>

    <h3>Юридична підтримка</h3>
    <ul>
      <li><a href="https://www.far.bg" target="_blank">Фонд "Доступ до прав"</a>: Юридична та соціальна підтримка.</li>
      <li><a href="https://www.redcross.bg" target="_blank">Болгарський Червоний Хрест</a>: Підтримка в пошуку житла.</li>
    </ul>

    <h3>Фінансова допомога</h3>
    <ul>
      <li><a href="https://astra.bg" target="_blank">Фундація "Астра"</a>: Інформаційні послуги та підтримка.</li>
      <li><a href="https://move.bg" target="_blank">MOVE.BG</a>: Допомога волонтерів.</li>
    </ul>

    <h3>Медична допомога</h3>
    <ul>
      <li><a href="https://www.refugee.bg" target="_blank">Агенція з питань біженців</a>: Інформація про медичні послуги.</li>
      <li><a href="https://iom.bg" target="_blank">Міжнародна організація з міграції</a>: Медичні кампанії.</li>
    </ul>

    <h3>Освіта та інтеграція</h3>
    <ul>
      <li><a href="https://unicef.bg" target="_blank">ЮНІСЕФ Болгарія</a>: Безперервна освіта дітей.</li>
      <li><a href="https://ukrdom.bg" target="_blank">Український Дім у Варні</a>: Допомога у сфері освіти.</li>
    </ul>

    <h3>Працевлаштування</h3>
    <ul>
      <li><a href="https://bghelsinki.org" target="_blank">BGHelsinki</a>: Інформація про права на працевлаштування.</li>
      <li><a href="https://jobs.bg" target="_blank">Агентство з працевлаштування Болгарії</a>: Реєстрація шукачів роботи.</li>
    </ul>

    <h3>Психологічна підтримка</h3>
    <ul>
      <li><a href="https://animus.bg" target="_blank">Фонд Асоціації “Анімус”
      
      </body>
        </html>
      `);
      newWindow.document.close();
    } else {
      alert("Не вдалося відкрити нове вікно. Можливо, ваш браузер блокує спливаючі вікна.");
    }
  }