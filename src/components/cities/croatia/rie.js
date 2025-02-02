export function openRieInfo() {
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
              <h1>Допомога Україні у місті Рієка</h1>
    <p>Місто Рієка активно підтримує українців, надаючи житлову допомогу, юридичну підтримку, медичні послуги, освіту та інтеграцію.</p>

    <h2>Проживання та житлова допомога</h2>
    <ul>
        <li><a href="https://hck.hr" target="_blank">Гуманітарна підтримка – Червоний Хрест</a></li>
        <li><a href="https://svoja.hr" target="_blank">Пошук житла – SVOJA</a></li>
    </ul>

    <h2>Юридична підтримка</h2>
    <ul>
        <li><a href="https://jrs.hr" target="_blank">Юридичні консультації – Єзуїтська служба для біженців</a></li>
        <li><a href="https://cms.hr" target="_blank">Правові поради – Центр культури діалогу</a></li>
    </ul>

    <h2>Медична допомога</h2>
    <ul>
        <li><a href="https://unhcr.hr" target="_blank">Медична підтримка – UNHCR Хорватія</a></li>
        <li><a href="https://hck.hr" target="_blank">Інформація про послуги – European Cancer Organisation</a></li>
    </ul>

    <h2>Освіта та інтеграція</h2>
    <ul>
        <li><a href="https://jrs.hr" target="_blank">Інтеграційні послуги – Єзуїтська служба для біженців</a></li>
        <li><a href="#" target="_blank">Мовні курси – Are You Syrious?</a></li>
    </ul>

    <h2>Працевлаштування</h2>
    <ul>
        <li><a href="https://svoja.hr" target="_blank">Соціальні послуги – Центри соціального захисту Хорватії</a></li>
        <li><a href="https://svoja.hr" target="_blank">Допомога у працевлаштуванні – Агенція з працевлаштування Хорватії</a></li>
    </ul>

    <h2>Психологічна підтримка</h2>
    <ul>
        <li><a href="https://rct.hr" target="_blank">Реабілітаційний центр після стресу – RCT</a></li>
        <li><a href="https://europa.eu" target="_blank">Підтримка – Are You Syrious?</a></li>
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
