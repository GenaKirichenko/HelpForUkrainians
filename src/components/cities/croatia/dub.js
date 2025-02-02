export function openDubInfo() {
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
