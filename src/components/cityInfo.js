// cityInfo.js
export function openCityInfo(cityName, description) {
    const newWindow = window.open(
      "",
      "_blank",
      "width=800,height=600,scrollbars=yes"
    );
    if (newWindow) {
      newWindow.document.write(`
        <html>
        <head>
          <title>Допомога Україні в місті ${cityName}</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              margin: 20px;
              color: #333;
            }
            h1 {
              color: #007bff;
            }
            a {
              color: #007bff;
              text-decoration: none;
            }
            a:hover {
              text-decoration: underline;
            }
          </style>
        </head>
        <body>
          <h1>Допомога Україні в місті ${cityName}</h1>
          <p>${description}</p>
        </body>
        </html>
      `);
      newWindow.document.close();
    } else {
      alert("Не вдалося відкрити нове вікно. Можливо, ваш браузер блокує спливаючі вікна.");
    }
  }
  