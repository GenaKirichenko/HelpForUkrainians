document.addEventListener("DOMContentLoaded", function () {
  function showLinksByService() {
    const selectedService =
      document.getElementById("serviceFilter").value;
    console.log("Selected service:", selectedService); // Проверяем, что мы правильно получаем выбранную услугу

    const cityLinks = {
      housing: [
        {
          name: "Житлова допомога для українців в Австрії – інформація від Caritas (Відень)",
          url: "https://www.caritas.at",
        },
        {
          name: "Пошук житла через офіційний сайт допомоги для біженців (Грац)",
          url: "https://www.refugee.info",
        },

        {
          name: "Житлова допомога від Caritas Лінц (Лінц)",
          url: "https://www.caritas-linz.at",
        },
        {
          name: "Житлова допомога від Caritas Інсбурк(Інсбрук)",
          url: "https://www.linz.at",
        },
        {
          name: "Житлова допомога від Caritas Зальцбург (Зальцбург)",
          url: "https://www.caritas-salzburg.at",
        },
        {
          name: "Програма міської ради – CITY OF BRUSSELS (Брюсель)",
          url: "https://www.brussels.be/refugees",
        },
        {
          name: "Проживання та житлова допомога(Антверпен)",
          url: "https://www.cgvs.be/en",
        },
        {
          name: "Проживання та житлова допомога (Брюгге)",
          url: "https://www.brussels.be/refugees",
        },
        {
          name: "Пошук житла через офіційний сайт допомоги для біженців(Льєж)",
          url: "https://www.fedasil.be",
        },
        {
          name: "Житлова допомога в місті Гент (Гент)",
          url: "https://www.ukrainiandistrict.be",
        },
        {
          name: "Забезпечує гуманітарну допомогу(Софія)",
          url: "https://www.redcross.bg",
        },
        {
          name: "Житлова допомога від Caritas Русе",
          url: "https://www.caritas-linz.at",
        },
        {
          name: "Група у Facebook Безкоштовне житло та оренда для громадян України в Болгарії(Варна)",
          url: "https://www.facebook.com/groups/freehousingbg",
        },
        {
          name: "Підтримка в інтеграції та пошуку житла(Пловдив)",
          url: "https://www.unhcr.bg",
        },
        {
          name: "Інформація про безкоштовні програми житла(Бургас)",
          url: "https://www.visitukraine.bg",
        },
        {
          name: "Житлова допомога – United for Ukraine (Дубровник)",
          url: "https://ufuplattform.com",
        },
        {
          name: "Житлова допомога – Intereses Legitimos (Осієк)",
          url: "https://legitimateinterests.com.ua",
        },
        {
          name: "Пошук житла – SVOJA (Рієка)",
          url: "https://svoja.hr",
        },
        {
          name: "Продукти харчування, одяг – Карітас Хорватії(Спліт)",
          url: "https://caritas.hr",
        },
        {
          name: "Тимчасовий захист – Міністерство внутрішніх справ(Загреб)",
          url: "https://hrvatskazaukrajinu.gov.hr",
        },
      ],

      legal: [
        {
          name: "Юридична допомога у Інсбрук – UNHCR  (Інсбрук)",
          url: "https://www.unhcr.org",
        },
        {
          name: " Інформація про права біженців в Австрії – UNHCR (Грац)",
          url: "https://www.unhcr.org",
        },
        {
          name: "Юридична допомога у Лінці – UNHCR  (Лінц)",
          url: "https://www.unhcr.org",
        },
        {
          name: "Юридична допомога для українців у Відні – UNHCR  (Відень)",
          url: "https://www.unhcr.org",
        },
        {
          name: "Юридична допомога у Зальцбурзі – UNHCR (Зальцбург)",
          url: "https://www.unhcr.org",
        },
        {
          name: "Отримання статусу біженця  (Антверпен)",
          url: "https://www.brussels.be/registration",
        },
        {
          name: " Допомога з реєстрацією – CITY OF BRUSSELS(Брюссель)",
          url: "https://www.brussels.be/registration",
        },
        {
          name: "Юридичні послуги – UA.SUPPORT Бельгія(Брюгге)",
          url: "https://www.brussels.be/registration",
        },
        {
          name: "Юридична підтримка – Vluchtelingenwerk Vlaanderen(Гент)",
          url: "https://www.refugeestatus.be",
        },
        {
          name: "Консультації – UNHCR Бельгія (Льєж)",
          url: "https://www.unhcr.be",
        },
        {
          name: "Юридична та соціальна підтримка (Бургас)",
          url: "https://www.far.bg",
        },
        {
          name: "Болгарська рада у справах біженців і мігрантів(Пловдив)",
          url: "https://www.bulrefcouncil.org",
        },
        {
          name: "Юридична допомога у Русе – UNHCR(Русе)",
          url: "https://www.unhcr.org",
        },
        {
          name: "Болгарський Гельсінський Комітет (Софія)",
          url: "https://www.bghelsinki.org",
        },
        {
          name: "Юридична та соціальна підтримка (Варна)",
          url: "https://www.caritas.bg",
        },
        {
          name: "Юридичні послуги – Центр досліджень проблем миру (Дубровник)",
          url: "https://cms.hr",
        },
        {
          name: "Юридична допомога – DPP(Осієк)",
          url: "https://dpp.hr",
        },
        {
          name: "Юридичні консультації – Єзуїтська служба для біженців  (Рієка)",
          url: "https://jrs.hr",
        },
        {
          name: "Консультації – Асоціація МІ(Спліт)",
          url: "https://irh.hr",
        },
        {
          name: "Юридичні послуги – Червоний Хрест (Загреб)",
          url: "https://hck.hr",
        },
      ],
      financial: [
        {
          name: "одробиці про фінансову допомогу на офіційному урядовому порталі(Грац)",
          url: "https://www.bundeskanzleramt.gv.at",
        },
        {
          name: "Фінансова допомога від Caritas Інсбрук(Інсбрук)",
          url: "https://www.caritas-linz.at",
        },
        {
          name: "Фінансова допомога від Caritas Лінц(Лінц)",
          url: "https://www.caritas-linz.at",
        },
        {
          name: "Соціальна допомога у Відні – офіційний урядовий портал (Відень)",
          url: "https://www.bundeskanzleramt.gv.at",
        },
        {
          name: "Фінансова допомога у Зальцбурзі – Caritas (Зальцбург)",
          url: "https://www.caritas-salzburg.at",
        },
        {
          name: "Матеріальна допомога(Антверпен)",
          url: "https://www.cpas.brussels",
        },
        {
          name: "Матеріальна підтримка – The CPAS (Брюссель)",
          url: "https://www.cpas.brussels",
        },
        {
          name: "Соціальна підтримка – OCMW Бельгія(Брюгге)",
          url: "https://www.actiris.be",
        },
        {
          name: "Матеріальна допомога – CPAS Гент (Гент)",
          url: "https://www.financialhelp.be",
        },
        {
          name: "Матеріальна допомога – CPAS Льєж (Льєж)",
          url: "https://www.cpasgent.be",
        },
        {
          name: "Допомога волонтерів (Бургас)",
          url: "https://move.bg",
        },
        {
          name: "Безкоштовний одяг та медичне обслуговування (Пловдив)",
          url: "https://www.unicef.bg",
        },
        {
          name: "Фінансова допомога від Caritas Русе(Русе)",
          url: "https://www.caritas-linz.at",
        },
        {
          name: " Підтримка українських дітей-біженців через ЮНІСЕФ Болгарія (Софія)",
          url: "https://refugeelight.bg",
        },
        {
          name: "Соціальна та гуманітарна допомога (Варна)",
          url: "https://www.unhcr.bg",
        },
        {
          name: "Соціальна та гуманітарна допомога(Дубровник)",
          url: "https://www.unhcr.bg",
        },
        {
          name: "Благодійні організації Хорватії (Осієк)",
          url: "https://www.unhcr.org",
        },
        {
          name: "Інтеграційні послуги – Єзуїтська служба для біженців(Рієка)",
          url: "https://www.unhcr.org",
        },
        {
          name: "Підтримка – Червоний Хрес (Спліт)",
          url: "https://www.unhcr.org",
        },
        {
          name: "Інтеграційні послуги – Єзуїтська служба для біженців(Загреб)",
          url: "https://www.unhcr.org",
        },
      ],
      medical: [
        {
          name: "Медичні послуги для біженців – UNHCR(Відень)",
          url: "https://www.unhcr.org",
        },
        {
          name: "Медична допомога у Відні – Gesundheitsdienst Wien(Відень)",
          url: "https://www.gesundheitsdienst.wien",
        },
        {
          name: "Медичні послуги для біженців – UNHCR(Грац)",
          url: "https://www.unhcr.org",
        },
        {
          name: "Інформація про медичну допомогу від Червоного Хреста(Грац)",
          url: "https://www.roteskreuz.at",
        },
        {
          name: "Медична підтримка у Зальцбурзі – UNHCR(Зальцбург)",
          url: "https://www.unhcr.org",
        },
        {
          name: "Медичні послуги – Червоний Хрест Зальцбург(Зальцбург)",
          url: "https://www.roteskreuz.at",
        },
        {
          name: "Медичні послуги для біженців – UNHCR(Лінц)",
          url: "https://www.unhcr.org",
        },
        {
          name: "Інформація про медичну допомогу – Caritas Лінц(Лінц)",
          url: "https://www.caritas-linz.at",
        },
        {
          name: "Медичні послуги для біженців – UNHCR(Інсбрук)",
          url: "https://www.unhcr.org",
        },
        {
          name: "Соціальна підтримка – офіційний урядовий портал(Інсбрук)",
          url: "https://www.caritas-linz.at",
        },
        {
          name: "Екстрена допомога – Медичне обслуговування українських біженців(Брюссель)",
          url: "https://www.brussels.be/healthcare",
        },
        {
          name: "Медичні послуги для біженців – UNHCR(Антверпен)",
          url: "https://www.brussels.be/healthcare",
        },
        {
          name: "Медичні послуги – Doctors of the World Belgium(Брюгге)",
          url: "https://www.brussels.be/healthcare",
        },
        {
          name: "Медичні послуги – Doctors of the World(Гент)",
          url: "https://www.doctorsoftheworld.be",
        },
        {
          name: "Медичні послуги – Doctors of the World Belgium(Льєж)",
          url: "https://www.doctorsoftheworld.be",
        },
        {
          name: "Агенція з питань біженців(Бургас)",
          url: "https://www.refugee.bg",
        },
        {
          name: "Фонд Добро(Пловдив)",
          url: "https://www.dobro.bg",
        },
        {
          name: "Медичні послуги для біженців – UNHCR(Русе)",
          url: "https://www.unhcr.org",
        },
        {
          name: "Український Дім у Варні(Софія)",
          url: "https://ukrdom.bg",
        },
        {
          name: "Медичні установи Болгарії(Варна)",
          url: "https://www.medical.bg",
        },
        {
          name: "Медичні послуги – Ufuplatform(Дубровник)",
          url: "https://hck.hr",
        },
        {
          name: "Медична підтримка – UNHCR Хорватія(Рієка)",
          url: "https://unhcr.hr",
        },
        {
          name: "Екстрена допомога – Червоний Хрест(Спліт)",
          url: "https://roteskreuz.at",
        },
        {
          name: "Медичні послуги – Міністерство охорони здоров'я(Загреб)",
          url: "https://zdravstvo.gov.hr",
        },
      ],
      education: [
        {
          name: "Інтеграційні програми в Австрії – Austria Integration Fund(Грац)",
          url: "https://www.integrationsfonds.at",
        },
        {
          name: "Освіта для біженців у Інсбрук – BMBWF(Інсбрук)",
          url: "https://www.bmbwf.gv.at",
        },

        {
          name: "Освіта для біженців у Лінці – BMBWF(Лінц)",
          url: "https://www.bmbwf.gv.at",
        },

        {
          name: "Освіта для біженців у Відні – BMBWF(Відень)",
          url: "https://www.bmbwf.gv.at",
        },

        {
          name: "Освіта та школи для біженців – BMBWF(Зальцбург)",
          url: "https://www.bmbwf.gv.at",
        },

        {
          name: "Інтеграційні програми(Антверпен)",
          url: "https://www.integration.brussels",
        },
        {
          name: "Ознайомлення з Брюсселем(Брюссель)",
          url: "https://www.integration.brussels",
        },
        {
          name: "Мовні курси – Atlas Брюгге(Брюгге)",
          url: "https://www.integration.brussels",
        },
        {
          name: "Фламандська служба зайнятості – VDAB(Гент)",
          url: "https://www.vdab.be",
        },
        {
          name: "Мовні курси – Atlas Льєж(Льєж)",
          url: "https://www.highereducation.be",
        },
        {
          name: "ЮНІСЕФ Болгарія(Бургас)",
          url: "https://unicef.bg",
        },
        {
          name: "Курси болгарської мови(Пловдив)",
          url: "https://www.caritas.bg",
        },
        {
          name: "Освіта для біженців у Русе – BMBWF(Русе)",
          url: "https://www.bmbwf.gv.at",
        },
        {
          name: "Освітньо-інтеграційний центр(Софія)",
          url: "https://www.facebook.com/ukrainianvul",
        },
        {
          name: "Освітні програми для біженців(Варна)",
          url: "https://egov.bg",
        },
        {
          name: "Мовні курси – Хорватський юридичний центр(Дубровник)",
          url: "https://hpc.hr",
        },
        {
          name: "Мовні курси – Хорватський юридичний центр(Осієк)",
          url: "https://hpc.hr",
        },
        {
          name: "Інтеграційні послуги – Єзуїтська служба для біженців(Рієка)",
          url: "https://jrs.hr",
        },
        {
          name: "Навчання дітей – BMBWF(Спліт)",
          url: "https://bmbwf.gv.at",
        },
        {
          name: "Мовні курси – SVOJA(Загреб)",
          url: "https://svoja.hr",
        },
      ],

      psychological: [
        {
          name: "Психологічна підтримка від Caritas(Грац)",
          url: "https://www.caritas.at",
        },
        {
          name: "Психологічна допомога у Інсбрук – Carita(Інсбрук)",
          url: "https://www.caritas-linz.at",
        },

        {
          name: "Психологічна допомога у Лінці – Caritas(Лінц)",
          url: "https://www.caritas-linz.at",
        },

        {
          name: "Психологічна допомога у Відні – Червоний Хрест(Відень)",
          url: "https://www.roteskreuz.at",
        },

        {
          name: "Психологічна допомога – Caritas Зальцбург(Зальцбург)",
          url: "https://www.caritas-salzburg.at",
        },

        {
          name: "Психологічна підтримка – Mental Health Brussels(Антверпен)",
          url: "https://www.actiris.be",
        },
        {
          name: "Психологічна підтримка – Mental Health Brussels(Брюссель)",
          url: "https://www.mentalhealth.brussels",
        },
        {
          name: "Ментальне здоров'я – Mental Health Belgium(Брюгге)",
          url: "https://www.mentalhealth.brussels",
        },
        {
          name: "Ментальне здоров'я – Mental Health Belgium(Гент)",
          url: "https://www.mentalhealth.be",
        },
        {
          name: "Ментальне здоров'я – Mental Health Belgium(Льєж)",
          url: "https://www.mentalhealth.be",
        },
        {
          name: "Фонд Асоціації “Анімус”(Бургас)",
          url: "https://animus.bg",
        },
        {
          name: "Асоціація ENERGY: Психологічна підтримка.(Пловдив)",
          url: "https://www.nrg.bg",
        },
        {
          name: "Психологічна допомога у Русе – Caritas(Русе)",
          url: "https://www.caritas-linz.at",
        },
        {
          name: "Рада жінок-біженок у Болгарії(Софія)",
          url: "https://crw-bg.bg",
        },
        {
          name: "ЮНІСЕФ Болгарія(Варна)",
          url: "https://www.unicef.bg",
        },
        {
          name: "Психологічна підтримка – СВОЯ(Дубровник)",
          url: "https://rct.h",
        },
        {
          name: "Реабілітаційний центр після стресу – RCT(Осієк)",
          url: "https://rct.h",
        },
        {
          name: "Реабілітаційний центр після стресу – RCT(Рієка)",
          url: "https://rct.h",
        },
        {
          name: "Підтримка – Червоний Хрест(Спліт)",
          url: "https://europa.eu",
        },
        {
          name: "Консультації психологів – Служба невідкладної допомоги(Загреб)",
          url: "https://bolnica-vrapce.hr",
        },
      ],
    };

    const modalLinksContainer = document.getElementById("modalLinks");
    modalLinksContainer.innerHTML = "";

    if (cityLinks[selectedService]) {
      const list = document.createElement("ol"); // Створюємо список з нумерацією
      cityLinks[selectedService].forEach((link) => {
        const listItem = document.createElement("li");
        const linkElement = document.createElement("a");

        linkElement.href = link.url;
        linkElement.target = "_blank";
        linkElement.textContent = link.name;
        linkElement.classList.add("link-style"); // Додаємо клас для стилів

        listItem.appendChild(linkElement);
        list.appendChild(listItem);
      });

      modalLinksContainer.appendChild(list);
    }
  }

  function openModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "block";
    modal.classList.add("fade-in"); // Додаємо ефект появи
  }

  function closeModal() {
    const modal = document.getElementById("modal");
    modal.classList.remove("fade-in");
    modal.style.display = "none";
  }

  showLinksByService();

  document
    .getElementById("serviceFilter")
    .addEventListener("change", function () {
      showLinksByService();
      openModal();
    });

  document
    .getElementById("closeModal")
    .addEventListener("click", closeModal);

  window.onclick = function (event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
      closeModal();
    }
  };

  // Додаємо стилі прямо в JS
  const style = document.createElement("style");
  style.innerHTML = `
    ol {
      padding-left: 20px;
      font-size: 18px;
      color: #333;
    }

    li {
      margin-bottom: 10px;
    }

    .link-style {
      text-decoration: none;
      color: rgb(179, 138, 62);
      transition: color 0.3s ease-in-out;
    }

    .link-style:hover {
      color: #ff6600;
      text-decoration: underline;
    }

    #modal {
  display: none; /* Приховано за замовчуванням */
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;
}


    #modalContent {
      background-color: white;
      padding: 20px;
      border-radius: 10px;
      width: 60%;
      max-width: 500px;
      text-align: center;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    #closeModal {
      margin-top: 10px;
      cursor: pointer;
      padding: 8px 12px;
      background-color: #dc3545;
      color: white;
      border: none;
      border-radius: 5px;
      font-size: 16px;
      transition: background 0.3s ease;
    }

    #closeModal:hover {
      background-color: #c82333;
    }

    .fade-in {
      animation: fadeIn 0.5s ease-in-out;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `;
  document.head.appendChild(style);
});
