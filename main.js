// main.js

import {
  openModal,
  closeModal,
  closeOnOutsideClick,
  closeOnEsc,
} from "./src/components/modal.js";
import { initializeCityListClose } from "./src/components/cityList.js";
import { openCityInfo } from "./src/components/cityInfo.js";
import { openVidnInfo } from "./src/components/cities/austria/vidn.js";
import { openGrazInfo } from "./src/components/cities/austria/graz.js";
import { openZalInfo } from "./src/components/cities/austria/zal.js";
import { openLinInfo } from "./src/components/cities/austria/lin.js";
import { openInsInfo } from "./src/components/cities/austria/ins.js";
import { openBruInfo } from "./src/components/cities/belgia/bru.js";
import { openAntInfo } from "./src/components/cities/belgia/ant.js";
import { openGentInfo } from "./src/components/cities/belgia/gent.js";
import { openBrugInfo } from "./src/components/cities/belgia/brug.js";
import { openLiezInfo } from "./src/components/cities/belgia/liez.js";
import { openSofInfo } from "./src/components/cities/bolgaria/sof.js";
import { openPlovInfo } from "./src/components/cities/bolgaria/plov.js";
import { openVarInfo } from "./src/components/cities/bolgaria/var.js";
import { openBurInfo } from "./src/components/cities/bolgaria/bur.js";
import { openRusInfo } from "./src/components/cities/bolgaria/rus.js";
import { openZagInfo } from "./src/components/cities/croatia/zag.js";
import { openSplInfo } from "./src/components/cities/croatia/spl.js";
import { openRieInfo } from "./src/components/cities/croatia/rie.js";
import { openDubInfo } from "./src/components/cities/croatia/dub.js";
import { openOsiInfo } from "./src/components/cities/croatia/osi.js";

// Ініціалізація списку міст
initializeCityListClose();

// Ініціалізація модального вікна
const modalId = "registrationModal";
document.getElementById("openModalBtn").onclick = () =>
  openModal(modalId);
document.querySelectorAll(".close").forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => closeModal(modalId));
});
closeOnOutsideClick(modalId);
closeOnEsc(modalId);

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("registrationForm")
    .addEventListener("submit", (event) => {
      event.preventDefault();

      const emailField = document.querySelector(
        'input[name="user_email"]'
      );
      const emailValue = emailField.value;

      if (!emailValue.includes("@")) {
        alert("Будь ласка, додайте символ @ у вашу email-адресу!");
        emailField.focus();
        return;
      }

      alert("Ваші дані успішно відправлені!");
    });
});
document
  .getElementById("serviceFilter")
  .addEventListener("change", function () {
    showLinksByService();
    openModal();
  });
// Додавання обробників подій для міст
document
  .getElementById("vidn")
  .addEventListener("click", openVidnInfo);
document
  .getElementById("graz")
  .addEventListener("click", openGrazInfo);
document.getElementById("zal").addEventListener("click", openZalInfo);
document.getElementById("lin").addEventListener("click", openLinInfo);
document.getElementById("ins").addEventListener("click", openInsInfo);
document.getElementById("bru").addEventListener("click", openBruInfo);
document.getElementById("ant").addEventListener("click", openAntInfo);
document
  .getElementById("gent")
  .addEventListener("click", openGentInfo);
document
  .getElementById("brug")
  .addEventListener("click", openBrugInfo);
document
  .getElementById("liez")
  .addEventListener("click", openLiezInfo);
document.getElementById("sof").addEventListener("click", openSofInfo);
document
  .getElementById("plov")
  .addEventListener("click", openPlovInfo);
document.getElementById("var").addEventListener("click", openVarInfo);
document.getElementById("bur").addEventListener("click", openBurInfo);
document.getElementById("rus").addEventListener("click", openRusInfo);
document.getElementById("zag").addEventListener("click", openZagInfo);
document.getElementById("spl").addEventListener("click", openSplInfo);
document.getElementById("rie").addEventListener("click", openRieInfo);
document.getElementById("dub").addEventListener("click", openDubInfo);
document.getElementById("osi").addEventListener("click", openOsiInfo);
