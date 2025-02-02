export function openSplInfo() {
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
              <h1>Допомога Україні у місті Спліт</h1>
    <p>Місто Спліт пропонує допомогу українцям у житлі, юридичній підтримці, медичних послугах, освіті та працевлаштуванні.</p>

    <h2>Проживання та житлова допомога</h2>
    <ul>
        <li><a href="https://caritas.hr" target="_blank">Продукти харчування, одяг – Карітас Хорватії</a></li>
        <li><a href="#" target="_blank">Фінансова допомога – Соціальні служби Хорватії</a></li>
    </ul>

    <h2>Юридична підтримка</h2>
    <ul>
        <li><a href="https://irh.hr" target="_blank">Консультації – Асоціація МІ</a></li>
        <li><a href="https://crpsisak.hr" target="_blank">Громадянські права – Проект громадянських прав (PGP)</a></li>
    </ul>

    <h2>Медична допомога</h2>
    <ul>
        <li><a href="https://roteskreuz.at" target="_blank">Екстрена допомога – Червоний Хрест</a></li>
        <li><a href="https://hck.hr" target="_blank">Європейська картка медичного страхування (EKMS)</a></li>
    </ul>

    <h2>Освіта та інтеграція</h2>
    <ul>
        <li><a href="https://bmbwf.gv.at" target="_blank">Навчання дітей – BMBWF</a></li>
        <li><a href="https://cms.hr" target="_blank">Інтеграція – Центр культури діалогу</a></li>
    </ul>

    <h2>Працевлаштування</h2>
    <ul>
        <li><a href="https://svoja.hr" target="_blank">Працевлаштування – SVOJA</a></li>
    </ul>

    <h2>Психологічна підтримка</h2>
    <ul>
        <li><a href="https://europa.eu" target="_blank">Підтримка – Червоний Хрест</a></li>
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
