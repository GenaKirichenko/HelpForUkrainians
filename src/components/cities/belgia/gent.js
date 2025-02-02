export function openGentInfo() {
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
              <h1>Допомога Україні у місті Гент</h1>
    <p>Місто Гент підтримує українців через програми житлової, юридичної, фінансової та медичної допомоги, освіту та працевлаштування.</p>

    <h2>Проживання та житлова допомога</h2>
    <ul>
        <li><a href="https://www.ukrainiandistrict.be" target="_blank">Житлові програми – Fedasil</a></li>
        <li><a href="https://www.socialservices.be" target="_blank">Соціальна допомога – OCMW Гент</a></li>
    </ul>

    <h2>Юридична підтримка</h2>
    <ul>
        <li><a href="https://www.refugeestatus.be" target="_blank">Юридична підтримка – Vluchtelingenwerk Vlaanderen</a></li>
        <li><a href="https://www.registrationcenter.be" target="_blank">Консультації – UNHCR Бельгія</a></li>
    </ul>

    <h2>Фінансова допомога</h2>
    <ul>
        <li><a href="https://www.financialhelp.be" target="_blank">Матеріальна допомога – CPAS Гент</a></li>
        <li><a href="https://www.caritas.be" target="_blank">Допомога в кризових ситуаціях – Карітас Бельгія</a></li>
    </ul>

    <h2>Медична допомога</h2>
    <ul>
        <li><a href="https://www.doctorsoftheworld.be" target="_blank">Медичні послуги – Doctors of the World</a></li>
        <li><a href="https://www.redcross.be" target="_blank">Гуманітарна допомога – Червоний Хрест</a></li>
    </ul>

    <h2>Освіта та інтеграція</h2>
    <ul>
        <li><a href="https://www.integration.be" target="_blank">Вища освіта – Навчання у Бельгії</a></li>
        <li><a href="https://www.universities.be" target="_blank">Освіта для дітей</a></li>
    </ul>

    <h2>Працевлаштування</h2>
    <ul>
        <li><a href="https://www.vdab.be" target="_blank">Фламандська служба зайнятості – VDAB</a></li>
        <li><a href="https://www.jobinbelgium.be" target="_blank">Можливості працевлаштування – UNHCR Бельгія</a></li>
    </ul>

    <h2>Психологічна підтримка</h2>
    <ul>
        <li><a href="https://www.mentalhealth.be" target="_blank">Ментальне здоров'я – Mental Health Belgium</a></li>
        <li><a href="https://www.projects.be" target="_blank">Консультації – Карітас Бельгія</a></li>
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
