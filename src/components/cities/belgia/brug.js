export function openBrugInfo() {
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
              <h1>Допомога Україні у місті Брюгге</h1>
    <p>Місто Брюгге пропонує широкий спектр підтримки для українців, включаючи житло, юридичну та медичну допомогу, освіту, інтеграцію та працевлаштування.</p>

    <h2>Проживання та житлова допомога</h2>
    <ul>
        <li><a href="https://www.brussels.be/refugees" target="_blank">Програми розміщення – Fedasil</a></li>
        <li><a href="https://www.cgvs.be/en" target="_blank">Евакуаційний центр</a></li>
    </ul>

    <h2>Юридична підтримка</h2>
    <ul>
        <li><a href="https://www.brussels.be/registration" target="_blank">Юридичні послуги – UA.SUPPORT Бельгія</a></li>
        <li><a href="https://www.cgvs.be/en/protection" target="_blank">Консультації – UNHCR Бельгія</a></li>
    </ul>

    <h2>Фінансова допомога</h2>
    <ul>
        <li><a href="https://www.cpas.brussels" target="_blank">Матеріальна допомога – CPAS Брюгге</a></li>
        <li><a href="https://www.actiris.be" target="_blank">Соціальна підтримка – OCMW Бельгія</a></li>
    </ul>

    <h2>Медична допомога</h2>
    <ul>
        <li><a href="https://www.brussels.be/healthcare" target="_blank">Медичні послуги – Doctors of the World Belgium</a></li>
        <li><a href="https://www.vivalia.be" target="_blank">Гуманітарна допомога – Червоний Хрест</a></li>
    </ul>

    <h2>Освіта та інтеграція</h2>
    <ul>
        <li><a href="https://www.integration.brussels" target="_blank">Мовні курси – Atlas Брюгге</a></li>
        <li><a href="https://www.brussels.be/schools" target="_blank">Освіта для дітей</a></li>
    </ul>

    <h2>Працевлаштування</h2>
    <ul>
        <li><a href="https://www.actiris.be" target="_blank">Служба зайнятості – VDAB</a></li>
        <li><a href="https://www.buildingjobs.be" target="_blank">Можливості роботи – UNHCR Бельгія</a></li>
    </ul>

    <h2>Психологічна підтримка</h2>
    <ul>
        <li><a href="https://www.mentalhealth.brussels" target="_blank">Ментальне здоров'я – Mental Health Belgium</a></li>
        <li><a href="https://www.caritas.be" target="_blank">Групи підтримки – Карітас Бельгія</a></li>
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
