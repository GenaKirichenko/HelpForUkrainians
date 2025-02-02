// cityList.js
export function closeCityList() {
    document.getElementById("cityList").style.display = "none";
  }
  
  export function openCityList() {
    document.getElementById("cityList").style.display = "block";
  }
  
  export function initializeCityListClose() {
    document.querySelector(".close-city-list").addEventListener("click", () => {
      closeCityList();
    });
  
    window.addEventListener("click", (event) => {
      const cityList = document.getElementById("cityList");
      if (
        event.target !== cityList &&
        !cityList.contains(event.target) &&
        event.target.tagName !== "A"
      ) {
        closeCityList();
      }
    });
  
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeCityList();
      }
    });
  }
  