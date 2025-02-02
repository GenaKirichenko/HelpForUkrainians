export function openZagInfo() {
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