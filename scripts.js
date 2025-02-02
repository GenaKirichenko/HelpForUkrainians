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
          name: "Пошук житла через офіційний сайт допомоги для біженців (Відень)",
          url: "https://www.refugee.info",
        },

        {
          name: "Житлова допомога від Caritas Інсбрук (Інсбрук)",
          url: "https://www.caritas-linz.at",
        },
        {
          name: "Інформація про житло у Інсбрук – офіційний портал (Інсбрук)",
          url: "https://www.linz.at",
        },
      ],

      legal: [
        {
          name: "Юридична допомога у Інсбрук – UNHCR  (Інсбрук)",
          url: "https://www.unhcr.org",
        },
        {
          name: "Юридичні консультації для біженців – Asylkoordination Österreich  (Інсбрук)",
          url: "https://www.asyl.at",
        },
      ],
    };

    const modalLinksContainer = document.getElementById("modalLinks");
    modalLinksContainer.innerHTML = "";

    if (cityLinks[selectedService]) {
      cityLinks[selectedService].forEach((link) => {
        const linkElement = document.createElement("a");
        linkElement.href = link.url;
        linkElement.target = "_blank";
        linkElement.textContent = link.name;
        modalLinksContainer.appendChild(linkElement);
        modalLinksContainer.appendChild(document.createElement("br"));
      });
    }
  }

  function openModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "block";
  }

  function closeModal() {
    const modal = document.getElementById("modal");
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
});
