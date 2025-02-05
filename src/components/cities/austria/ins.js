export function openInsInfo() {
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
        <body><h1>Допомога Україні у місті Інсбрук, Австрія</h1>
        <p>Місто Інсбрук надає різноманітну підтримку українським біженцям, включаючи житло, соціальні послуги, медичну допомогу та інтеграційні програми.</p>

        <h2>Що ми пропонуємо:</h2>

        <h3>Проживання та житлова допомога</h3>
        <p>У Інсбрук доступна допомога з пошуком тимчасового та довгострокового житла через місцеві організації та волонтерські ініціативи.</p>
        <ul>
          <li><a href="https://www.caritas-linz.at" target="_blank">Житлова допомога від Caritas Інсбрук</a></li>
          <li><a href="https://www.linz.at" target="_blank">Інформація про житло у Інсбрук – офіційний портал</a></li>
        </ul>

        <h3>Юридична підтримка</h3>
        <p>У Інсбрук діють юридичні служби, які допомагають у питаннях легалізації перебування та працевлаштування.</p>
        <ul>
          <li><a href="https://www.unhcr.org" target="_blank">Юридична допомога у Інсбрук – UNHCR</a></li>
          <li><a href="https://www.asyl.at" target="_blank">Юридичні консультації для біженців – Asylkoordination Österreich</a></li>
        </ul>

        <h3>Фінансова допомога</h3>
        <p>Біженці в Інсбрук можуть отримати соціальні виплати та фінансову підтримку через місцеві державні програми.</p>
        <ul>
          <li><a href="https://www.caritas-linz.at" target="_blank">Фінансова допомога від Caritas Інсбрук</a></li>
          <li><a href="https://www.linz.at" target="_blank">Соціальна підтримка – офіційний урядовий портал</a></li>
        </ul>

        <h3>Медична допомога</h3>
        <p>У Інсбрук доступні медичні послуги, включаючи екстрену допомогу та консультації лікарів.</p>
        <ul>
          <li><a href="https://www.unhcr.org" target="_blank">Медичні послуги для біженців – UNHCR</a></li>
          <li><a href="https://www.caritas-linz.at" target="_blank">Інформація про медичну допомогу – Caritas Лінц</a></li>
        </ul>

        <h3>Освіта та інтеграція</h3>
        <p>У Інсбрук діють школи для дітей біженців та курси німецької мови для дорослих.</p>
        <ul>
          <li><a href="https://www.bmbwf.gv.at" target="_blank">Освіта для біженців у Інсбрук – BMBWF</a></li>
          <li><a href="https://www.integrationsfonds.at" target="_blank">Інтеграційні програми у Інсбрук – Austria Integration Fund</a></li>
        </ul>

        <h3>Працевлаштування</h3>
        <p>У Інсбрук доступні послуги для пошуку роботи, консультацій із працевлаштування та професійної адаптації.</p>
        <ul>
          <li><a href="https://www.ams.at" target="_blank">Працевлаштування для українців – AMS Інсбрук</a></li>
          <li><a href="https://www.unhcr.org" target="_blank">Інформація про працевлаштування – UNHCR</a></li>
        </ul>

        <h3>Психологічна підтримка</h3>
        <p>У місті працюють центри психологічної допомоги та групи підтримки.</p>
        <ul>
          <li><a href="https://www.caritas-linz.at" target="_blank">Психологічна допомога у Інсбрук – Caritas</a></li>
          <li><a href="https://www.roteskreuz.at" target="_blank">Послуги психологічної підтримки – Червоний Хрест</a></li>
        </ul>

        <h3>Контакти:</h3>
        <p>Адреса: [Вкажіть вашу адресу у Інсбрук]</p>
        <p>Телефон: [Вкажіть номер телефону]</p>
        <p>Електронна пошта: [Вкажіть e-mail для зв’язку]</p>
        <p>Години роботи: [Вкажіть години роботи]</p>
         </body>
        </html>
      `);
      newWindow.document.close();
    } else {
      alert("Не вдалося відкрити нове вікно. Можливо, ваш браузер блокує спливаючі вікна.");
    }
  }
