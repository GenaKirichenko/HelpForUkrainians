export function openBruInfo() {
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
        <body><h1>Допомога Україні у місті Брюссель</h1>
    <p>Місто Брюссель надає підтримку українцям, які постраждали від війни, забезпечуючи житлову, юридичну, фінансову та медичну допомогу, а також освіту та інтеграцію.</p>

    <h2>Проживання та житлова допомога</h2>
    <ul>
        <li><a href="https://www.brussels.be/refugees" target="_blank">Програма міської ради – CITY OF BRUSSELS</a></li>
        <li><a href="ITY OF BRUSSELS (Refugees)</a></li>
          <li><a href="https://www.cgvs.be/en" target="_blank">Пошук житла – Office of the commissioner general for refugees and stateless persons</a></li>
    </ul>

    <h2>Юридична підтримка</h2>
    <ul>
        <li><a href="https://www.brussels.be/registration" target="_blank">Допомога з реєстрацією – CITY OF BRUSSELS (Registration)</a></li>
        <li><a href="https://www.cgvs.be/en/protection" target="_blank">Подання заяви на тимчасовий захист</a></li>
    </ul>

    <h2>Фінансова допомога</h2>
    <ul>
        <li><a href="https://www.cpas.brussels" target="_blank">Матеріальна підтримка – The CPAS</a></li>
        <li><a href="https://www.actiris.be" target="_blank">Служба зайнятості – Actiris</a></li>
    </ul>

    <h2>Медична допомога</h2>
    <ul>
        <li><a href="https://www.brussels.be/healthcare" target="_blank">Екстрена допомога – Медичне обслуговування українських біженців</a></li>
        <li><a href="https://www.vivalia.be" target="_blank">Щеплення – Vivalis Brussels</a></li>
    </ul>

    <h2>Освіта та інтеграція</h2>
    <ul>
        <li><a href="https://www.integration.brussels" target="_blank">Ознайомлення з Брюсселем</a></li>
        <li><a href="https://www.brussels.be/schools" target="_blank">Доступ до місцевих шкіл</a></li>
    </ul>

    <h2>Працевлаштування</h2>
    <ul>
        <li><a href="https://www.actiris.be" target="_blank">Служба зайнятості – Actiris</a></li>
        <li><a href="https://www.buildingjobs.be" target="_blank">Робота на будівництві</a></li>
    </ul>

    <h2>Психологічна підтримка</h2>
    <ul>
        <li><a href="https://www.mentalhealth.brussels" target="_blank">Психологічна допомога – Mental Health Brussels</a></li>
        <li><a href="https://www.caritas.be" target="_blank">Консультації – Карітас Бельгія</a></li>
    </ul>

    <h3>Контакти:</h3>
    <p>Адреса: [Вкажіть адресу]</p>
    <p>Телефон: [Вкажіть номер телефону]</p>
    <p>Електронна пошта: [Вкажіть e-mail]</p>
</body>
        </html>
      `);
      newWindow.document.close();
    } else {
      alert("Не вдалося відкрити нове вікно. Можливо, ваш браузер блокує спливаючі вікна.");
    }
  }
