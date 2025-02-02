// cities/vidn.js
export function openVidnInfo() {
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
          
        <h1>Допомога Україні в місті Відень, Австрія</h1>
        <p>Місто Відень надає широкий спектр послуг та допомоги для українців, які через війну змушені були залишити свої домівки. Ви можете отримати підтримку у питаннях проживання, юридичної допомоги, інтеграції, працевлаштування та інших важливих сфер.</p>

        <h2>Що ми пропонуємо:</h2>

        <h3>Проживання та житлова допомога</h3>
        <p>У Відні доступні державні та волонтерські програми для пошуку житла. Місцеві організації допомагають знайти тимчасове або довгострокове житло.</p>
        <ul>
          <li><a href="https://www.caritas.at" target="_blank">Інформація про житлову допомогу у Відні – Caritas</a></li>
          <li><a href="https://www.wienerhilfswerk.at" target="_blank">Житло для біженців у Відні – Wiener Hilfswerk</a></li>
        </ul>

        <h3>Юридична підтримка</h3>
        <p>У Відні діють спеціалізовані центри, які надають юридичні консультації щодо оформлення статусу тимчасового захисту, дозволів на роботу та інших документів.</p>
        <ul>
          <li><a href="https://www.unhcr.org" target="_blank">Юридична допомога для українців у Відні – UNHCR</a></li>
          <li><a href="https://www.asyl.at" target="_blank">Підтримка біженців в Австрії – Asylkoordination Österreich</a></li>
        </ul>

        <h3>Фінансова допомога</h3>
        <p>Українські біженці можуть отримати фінансову підтримку через державні програми або організації, які діють у Відні.</p>
        <ul>
          <li><a href="https://www.bundeskanzleramt.gv.at" target="_blank">Соціальна допомога у Відні – офіційний урядовий портал</a></li>
          <li><a href="https://www.caritas.at" target="_blank">Фінансова підтримка від Caritas</a></li>
        </ul>

        <h3>Медична допомога</h3>
        <p>У Відні доступні медичні послуги для українців, включаючи екстрену допомогу, вакцинацію та консультації сімейних лікарів.</p>
        <ul>
          <li><a href="https://www.unhcr.org" target="_blank">Медичні послуги для біженців – UNHCR</a></li>
          <li><a href="https://www.gesundheitsdienst.wien" target="_blank">Медична допомога у Відні – Gesundheitsdienst Wien</a></li>
        </ul>

        <h3>Освіта та інтеграція</h3>
        <p>У Відні діти українських біженців можуть безкоштовно відвідувати школи. Також для дорослих пропонуються курси німецької мови та програми інтеграції.</p>
        <ul>
          <li><a href="https://www.bmbwf.gv.at" target="_blank">Освіта для біженців у Відні – BMBWF</a></li>
          <li><a href="https://www.austria-integration-fund.at" target="_blank">Інтеграційні програми у Відні – Austria Integration Fund</a></li>
        </ul>

        <h3>Працевлаштування</h3>
        <p>Відень пропонує ресурси для пошуку роботи, консультації щодо працевлаштування та адаптації до австрійського ринку праці.</p>
        <ul>
          <li><a href="https://www.ams.at" target="_blank">Працевлаштування для українців – AMS Відень</a></li>
          <li><a href="https://www.unhcr.org" target="_blank">Доступ до ринку праці – UNHCR</a></li>
        </ul>

        <h3>Психологічна підтримка</h3>
        <p>У Відні доступні безкоштовні консультації психологів та спеціалістів із подолання стресу.</p>
        <ul>
          <li><a href="https://www.roteskreuz.at" target="_blank">Психологічна допомога у Відні – Червоний Хрест</a></li>
          <li><a href="https://www.caritas.at" target="_blank">Підтримка від Caritas</a></li>
        </ul>

        <h3>Контакти:</h3>
        <p>Адреса: [Вкажіть вашу адресу у Відні]</p>
        <p>Телефон: [Вкажіть номер телефону]</p>
        <p>Електронна пошта: [Вкажіть e-mail для зв’язку]</p>
        <p>Години роботи: [Вкажіть години роботи]</p>

        <h3>Як отримати допомогу?</h3>
        <p>Зв’яжіться з нами за контактами, вказаними вище. Ми організуємо консультацію, щоб визначити, яка підтримка буде найбільш корисною для вас. Разом ми знайдемо рішення для ваших потреб.</p>

        <h3>Корисні ресурси:</h3>
        <p>ЄС підтримує Україну: <a href="https://euneighbourseast.eu/uk/standwithukraine/refugees" target="_blank">euneighbourseast.eu/uk/standwithukraine/refugees</a></p>
        <p>Австрійський Червоний Хрест: <a href="https://www.roteskreuz.at" target="_blank">www.roteskreuz.at</a></p>
        <p>Caritas Австрія: <a href="https://www.caritas.at" target="_blank">www.caritas.at</a></p>
      
        </body>
        </html>
      `);
      newWindow.document.close();
    } else {
      alert("Не вдалося відкрити нове вікно. Можливо, ваш браузер блокує спливаючі вікна.");
    }
  }
  