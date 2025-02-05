export function openZagInfo() {
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
              <h1>Допомога Україні у місті Загреб</h1>
    <p>Місто Загреб активно підтримує українців, які постраждали від війни. Доступні різноманітні послуги, включаючи житлову допомогу, юридичну підтримку, медичну допомогу, освіту та інтеграцію.</p>

    <h2>Проживання та житлова допомога</h2>
    <ul>
        <li><a href="https://hrvatskazaukrajinu.gov.hr" target="_blank">Тимчасовий захист – Міністерство внутрішніх справ</a></li>
        <li><a href="https://hck.hr" target="_blank">Гуманітарна підтримка – Хорватський Червоний Хрест</a></li>
    </ul>

    <h2>Юридична підтримка</h2>
    <ul>
        <li><a href="https://hck.hr" target="_blank">Юридичні послуги – Червоний Хрест</a></li>
        <li><a href="https://hpc.hr" target="_blank">Консультації – Хорватський юридичний центр</a></li>
    </ul>

    <h2>Медична допомога</h2>
    <ul>
        <li><a href="https://zdravstvo.gov.hr" target="_blank">Медичні послуги – Міністерство охорони здоров'я</a></li>
        <li><a href="https://hck.hr" target="_blank">Гуманітарна допомога – Червоний Хрест</a></li>
    </ul>

    <h2>Освіта та інтеграція</h2>
    <ul>
        <li><a href="https://svoja.hr" target="_blank">Мовні курси – SVOJA</a></li>
        <li><a href="https://cms.hr" target="_blank">Інтеграційні програми – Центр досліджень миру</a></li>
    </ul>

    <h2>Працевлаштування</h2>
    <ul>
        <li><a href="https://svoja.hr" target="_blank">Допомога в пошуку роботи – SVOJA</a></li>
        <li><a href="#" target="_blank">Українська спільнота</a></li>
    </ul>

    <h2>Психологічна підтримка</h2>
    <ul>
        <li><a href="https://bolnica-vrapce.hr" target="_blank">Консультації психологів – Служба невідкладної допомоги</a></li>
        <li><a href="https://europa.eu" target="_blank">Психотерапевтична допомога – Європейський Союз</a></li>
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
