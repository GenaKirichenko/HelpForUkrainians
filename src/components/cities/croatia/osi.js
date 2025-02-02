export function openOsiInfo() {
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
            <h1>Допомога Україні у місті Осієк</h1>
    <p>Місто Осієк пропонує підтримку українцям у питаннях житла, юридичної та медичної допомоги, освіти та інтеграції.</p>

    <h2>Проживання та житлова допомога</h2>
    <ul>
        <li><a href="https://legitimateinterests.com.ua" target="_blank">Житлова допомога – Intereses Legitimos</a></li>
    </ul>

    <h2>Юридична підтримка</h2>
    <ul>
        <li><a href="https://dpp.hr" target="_blank">Юридична допомога – DPP</a></li>
    </ul>

    <h2>Фінансова допомога</h2>
    <ul>
        <li><a href="#" target="_blank">Благодійні організації Хорватії</a></li>
    </ul>

    <h2>Медична допомога</h2>
    <ul>
        <li><a href="https://hck.hr" target="_blank">Медичні послуги – Загребський залізничний вокзал</a></li>
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
