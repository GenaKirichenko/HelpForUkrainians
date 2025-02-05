export function openPlovInfo() {
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
        <body><h2>Допомога Україні у місті Пловдив</h2>
    <p>Місто Пловдив надає різноманітну підтримку українцям, які постраждали від війни, забезпечуючи допомогу в житлі, працевлаштуванні, медичних послугах, освіті та інтеграції.</p>

    <h3>Проживання та житлова допомога</h3>
    <ul>
      <li><a href="https://www.unhcr.bg" target="_blank">УВКБ ООН у Болгарії</a>: Підтримка в інтеграції та пошуку житла.</li>
      <li><a href="https://www.unicef.bg" target="_blank">Unicef</a>: Юридична та соціальна підтримка.</li>
    </ul>

    <h3>Юридична підтримка</h3>
    <ul>
      <li><a href="https://www.refugeelight.bg" target="_blank">Refugee Light Bulgaria</a>: Юридична та соціальна підтримка.</li>
      <li><a href="https://www.bulrefcouncil.org" target="_blank">Болгарська рада у справах біженців і мігрантів</a>: Правова допомога.</li>
    </ul>

    <h3>Фінансова допомога</h3>
    <ul>
      <li><a href="https://www.redcross.bg" target="_blank">Червоний Хрест Болгарії</a>: Інформаційно-консультаційні послуги.</li>
      <li><a href="https://www.unicef.bg" target="_blank">ЮНІСЕФ</a>: Безкоштовний одяг та медичне обслуговування.</li>
    </ul>

    <h3>Медична допомога</h3>
    <ul>
      <li><a href="https://www.dobro.bg" target="_blank">Фонд "Добро"</a>: Медична допомога українцям.</li>
      <li><a href="https://www.bghelsinki.org" target="_blank">Болгарська Гельсінська Спілка</a>: Інформація про лікарні.</li>
    </ul>

    <h3>Освіта та інтеграція</h3>
    <ul>
      <li><a href="https://www.caritas.bg" target="_blank">Карітас Софія</a>: Курси болгарської мови.</li>
      <li><a href="https://www.caritas.bg" target="_blank">Карітас Русе</a>: Освітні програми.</li>
    </ul>

    <h3>Працевлаштування</h3>
    <ul>
      <li><a href="https://www.far.bg" target="_blank">Фонд "Добро"</a>: Консультування з питань працевлаштування.</li>
      <li><a href="https://www.refugeelight.bg" target="_blank">Refugeelight.BG</a>: Інформація про працевлаштування.</li>
    </ul>

    <h3>Психологічна підтримка</h3>
    <ul>
      <li><a href="https://www.nrg.bg" target="_blank">Асоціація ENERGY (NRG)</a>: Психологічна підтримка.</li>
      <li><a href="https://www.support.bg" target="_blank">Фонд “Підтримка та оновлення України”</a>: Психологічна допомога.</li>
    </ul>

    <h3>Контакти</h3>
    <p>Адреса: [Вкажіть адресу у Пловдиві]</p>
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
