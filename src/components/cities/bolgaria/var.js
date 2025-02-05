export function openVarInfo() {
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
           <h1>Допомога Україні у місті Варна</h1>
    <p>Місто Варна надає всебічну підтримку українцям, які постраждали від війни, забезпечуючи допомогу в житлі, працевлаштуванні, медичних послугах, освіті та інтеграції.</p>

    <h3>Проживання та житлова допомога</h3>
    <ul>
      <li><a href="https://www.unitedforukraine.bg" target="_blank">United for Ukraine</a>: Інформаційна платформа для допомоги біженцям.</li>
      <li><a href="https://www.facebook.com/groups/freehousingbg" target="_blank">Група у Facebook "Безкоштовне житло та оренда для громадян України в Болгарії"</a>.</li>
    </ul>

    <h3>Юридична підтримка</h3>
    <ul>
      <li><a href="https://www.caritas.bg" target="_blank">Карітас Болгарія</a>: Юридична та соціальна підтримка.</li>
      <li><a href="https://www.crw-bg.bg" target="_blank">Рада жінок-біженок у Болгарії</a>: Правова допомога для жінок.</li>
    </ul>

    <h3>Фінансова допомога</h3>
    <ul>
      <li><a href="https://www.unhcr.bg" target="_blank">UNHCR Болгарія</a>: Соціальна та гуманітарна допомога.</li>
      <li><a href="https://matushka.bg" target="_blank">Спілка українських організацій Болгарії "Мати Україна"</a>: Інформаційна та соціальна підтримка.</li>
    </ul>

    <h3>Медична допомога</h3>
    <ul>
      <li><a href="https://www.medical.bg" target="_blank">Медичні установи Болгарії</a>: Невідкладна та планова допомога.</li>
      <li><a href="https://enableme.bg" target="_blank">Фонд "Місіонерські Крила"</a>: Соціальна та медична підтримка.</li>
    </ul>

    <h3>Освіта та інтеграція</h3>
    <ul>
      <li><a href="https://egov.bg" target="_blank">Фонд "Крила місії"</a>: Освітні програми для біженців.</li>
      <li><a href="https://astra.bg" target="_blank">Фундація "Астра"</a>: Інтеграційні програми.</li>
    </ul>

    <h3>Працевлаштування</h3>
    <ul>
      <li><a href="https://layboard.bg" target="_blank">Layboard</a>: Платформа з вакансіями.</li>
      <li><a href="https://enableme.bg" target="_blank">EnableMe Ukraine</a>: Інформація про працевлаштування.</li>
    </ul>

    <h3>Психологічна підтримка</h3>
    <ul>
      <li><a href="https://www.unicef.bg" target="_blank">ЮНІСЕФ Болгарія</a>: Психосоціальна підтримка.</li>
      <li><a href="https://www.family.bg" target="_blank">Фонд “Рідня”</a>: Консультації та психологічна підтримка.</li>
    </ul>

    <h3>Контакти</h3>
    <p>Адреса: [Вкажіть адресу у Варні]</p>
    <p>Телефон: [Вкажіть номер телефону]</p>
    <p>Електронна пошта: [Вкажіть e-mail для зв’язку]</p>
    <p>Години роботи: [Вкажіть години роботи]</p>
      </body>
        </html>
      `);
      newWindow.document.close();
    } else {
      alert("Не вдалося відкрити нове вікно. Можливо, ваш браузер блокує спливаючі вікна.");
    }
  }
