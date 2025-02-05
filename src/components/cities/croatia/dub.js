export function openDubInfo() {
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
             <h1>Допомога Україні у місті Дубровник</h1>
    <p>Місто Дубровник надає допомогу українцям, включаючи житло, юридичну підтримку, медичну допомогу, освіту та працевлаштування.</p>

    <h2>Проживання та житлова допомога</h2>
    <ul>
        <li><a href="https://ufuplattform.com" target="_blank">Житлова допомога – United for Ukraine</a></li>
        <li><a href="https://get-worker.com.ua" target="_blank">Пошук житла – Getworker</a></li>
    </ul>

    <h2>Юридична підтримка</h2>
    <ul>
        <li><a href="https://cms.hr" target="_blank">Юридичні послуги – Центр досліджень проблем миру</a></li>
        <li><a href="#" target="_blank">Правова допомога – Are You Syrious?</a></li>
    </ul>

    <h2>Медична допомога</h2>
    <ul>
        <li><a href="https://hck.hr" target="_blank">Медичні послуги – Ufuplatform</a></li>
    </ul>

    <h2>Освіта та інтеграція</h2>
    <ul>
        <li><a href="https://hpc.hr" target="_blank">Мовні курси – Хорватський юридичний центр</a></li>
    </ul>

    <h2>Працевлаштування</h2>
    <ul>
        <li><a href="https://iom.hr" target="_blank">Допомога у працевлаштуванні – IOM Хорватія</a></li>
    </ul>

    <h2>Психологічна підтримка</h2>
    <ul>
        <li><a href="#" target="_blank">Психологічна підтримка – СВОЯ</a></li>
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
