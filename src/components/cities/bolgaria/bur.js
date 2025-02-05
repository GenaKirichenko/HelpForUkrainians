export function openBurInfo() {
    const newWindow = window.open("", "_blank", "width=800,height=600,scrollbars=yes");
    if (newWindow) {
      newWindow.document.write(`
        <html>
        <head>
          <title>Допомога Україні в місті Відень</title>
          <style>
            body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      color: #333;
      background: #a4b8c4;
      background-size: cover;
      background-attachment: fixed;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    h1 {
      color: #ffffff;
      text-align: center;
      margin: 20px 0;
      font-size: 2rem;
      text-shadow: 1px 1px 4px rgba(253, 252, 252, 0.5);
    }

    .container {
      max-width: 1000px;
      background: #ffffff;
      padding: 20px;
      border-radius: 15px;
      box-shadow: 0 8px 15px rgba(255, 255, 255, 0.2);
      margin-top: 30px;
      text-align: center;
    }

    

    .content {
      text-align: justify;
      font-size: 1.1rem;
      color: #444;
    }

    a {
      color:rgb(179, 138, 62);
      text-decoration: none;
      font-weight: bold;
    }

    a:hover {
      text-decoration: underline;
    }

    footer {
      margin-top: 20px;
      font-size: 0.9rem;
      color: #ffffff;
      text-shadow: 1px 1px 4px rgb(255, 255, 255);
    }
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
