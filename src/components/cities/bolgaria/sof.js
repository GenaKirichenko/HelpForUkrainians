export function openSofInfo() {
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
              <h1>Допомога Україні у місті Софія</h1>
    <p>Місто Софія надає всебічну підтримку українцям, які постраждали від війни, забезпечуючи допомогу в житлі, працевлаштуванні, медичних послугах, освіті та інтеграції.</p>

    <h3>Проживання та житлова допомога</h3>
    <ul>
      <li><a href="https://www.refugeelight.bg" target="_blank">Refugee Light Bulgaria</a>: Надає інформацію та підтримку біженцям.</li>
      <li><a href="https://www.redcross.bg" target="_blank">Болгарський Червоний Хрест</a>: Забезпечує гуманітарну допомогу.</li>
    </ul>

    <h3>Юридична підтримка</h3>
    <ul>
      <li><a href="https://www.bghelsinki.org" target="_blank">Болгарський Гельсінський Комітет</a>: Незалежна організація, що надає правову допомогу.</li>
      <li><a href="https://asylum.bg" target="_blank">Центр правової допомоги – Голос у Болгарії</a>: Безкоштовні правові консультації.</li>
    </ul>

    <h3>Фінансова допомога</h3>
    <ul>
      <li><a href="https://refugeelight.bg" target="_blank">Refugeelight</a>: Підтримка українських дітей-біженців через ЮНІСЕФ Болгарія.</li>
      <li><a href="https://humanitarian.bg" target="_blank">Програма гуманітарної допомоги українським біженцям</a>: Офіційна програма уряду Болгарії.</li>
    </ul>

    <h3>Медична допомога</h3>
    <ul>
      <li><a href="https://ukrdom.bg" target="_blank">Український Дім у Варні</a>: Пропонує безкоштовне медичне обслуговування.</li>
      <li><a href="https://refugeelight.bg" target="_blank">Карітас Софія</a>: Надає медичні послуги.</li>
    </ul>

    <h3>Освіта та інтеграція</h3>
    <ul>
      <li><a href="https://www.facebook.com/ukrainianvul" target="_blank">Український Вулик</a>: Освітньо-інтеграційний центр.</li>
      <li><a href="https://unhcr.bg" target="_blank">Асоціація ENERGY (NRG) INTEGRICO</a>: Безкоштовні освітні та психологічні послуги.</li>
    </ul>

    <h3>Працевлаштування</h3>
    <ul>
      <li><a href="https://www.far.bg" target="_blank">Фундація доступу до прав (FAR)</a>: Платформа з працевлаштування біженців.</li>
      <li><a href="https://caritas.bg" target="_blank">Карітас Болгарія</a>: Центри кар'єри в різних містах.</li>
    </ul>

    <h3>Психологічна підтримка</h3>
    <ul>
      <li><a href="https://crw-bg.bg" target="_blank">Рада жінок-біженок у Болгарії</a>: Доступ до психологічної допомоги.</li>
      <li><a href="https://redcross.bg" target="_blank">Болгарський Червоний Хрест</a>: Психологічна підтримка.</li>
    </ul>

    <h3>Контакти</h3>
    <p>Адреса: [Вкажіть адресу у Софії]</p>
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
