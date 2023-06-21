/* Losjes gebaseerd op https://socket.io/get-started/chat */

import * as path from "path";
import { createServer } from "http";
import express, { response } from "express";
import fetch from "node-fetch";
import { log } from "console";

const app = express();
const http = createServer(app);
const port = process.env.PORT || 8000;
const dashboardUrl =
  "https://s3.eu-west-1.amazonaws.com/data.theoceancleanup.com/systems-dashboard/realtime-data-river.json";

//   standaard functie voor een random getal, de min en max worden later gedefinieerd
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

// Serveer client-side bestanden
app.use(express.static(path.resolve("public")));

// view engine
app.set("view engine", "ejs");
app.set("views", "./views");

// hoe json gebruikt moet worden
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES
// Route voor index
app.get("/", (request, response) => {
  response.render("index");
});

// Route voor interceptors

app.get("/interceptor-001", (request, response) => {
  // json bestand wordt opgehaald uit de variabele
  fetchJson(dashboardUrl).then((data) => {
    // een variabel met enriched data erin waarbij data.systems worden samengevoegd
    // In map() maak ik het item "interceptor" aan
    const enrichedData = data.systems.map((interceptor) => {
      // Aan dit item geef ik het object met de null waarde aan
      // vervolgens roep ik de standaard funtie getRandom.. aan en defenier ik het minimum en maximum getal.
      interceptor["debris_extracted_last_30d"] = getRandomIntInclusive(0, 1000);
      interceptor["debris_extracted_total"] = getRandomIntInclusive(1000, 5000);
      //   Daarna wordt het item interceptor teruggestuurd met de nieuwe waarden teruggestuurd
      return interceptor;
    });

    //   pagina wordt gerenderd met de data erop
    response.render("interceptor-001", { data: enrichedData });
  });
});

app.get("/interceptor-002", (request, response) => {
  // json bestand wordt opgehaald uit de variabele
  fetchJson(dashboardUrl).then((data) => {
    // een variabel met enriched data erin waarbij data.systems worden samengevoegd
    // In map() maak ik het item "interceptor" aan
    const enrichedData = data.systems.map((interceptor) => {
      // Aan dit item geef ik het object met de null waarde aan
      // vervolgens roep ik de standaard funtie getRandom.. aan en defenier ik het minimum en maximum getal.
      interceptor["debris_extracted_last_30d"] = getRandomIntInclusive(0, 1000);
      interceptor["debris_extracted_total"] = getRandomIntInclusive(1000, 5000);
      //   Daarna wordt het item interceptor teruggestuurd met de nieuwe waarden teruggestuurd
      return interceptor;
    });

    //   pagina wordt gerenderd met de data erop
    response.render("interceptor-002", { data: enrichedData });
  });
});
app.get("/interceptor-003", (request, response) => {
  // json bestand wordt opgehaald uit de variabele
  fetchJson(dashboardUrl).then((data) => {
    // een variabel met enriched data erin waarbij data.systems worden samengevoegd
    // In map() maak ik het item "interceptor" aan
    const enrichedData = data.systems.map((interceptor) => {
      // Aan dit item geef ik het object met de null waarde aan
      // vervolgens roep ik de standaard funtie getRandom.. aan en defenier ik het minimum en maximum getal.
      interceptor["debris_extracted_last_30d"] = getRandomIntInclusive(0, 1000);
      interceptor["debris_extracted_total"] = getRandomIntInclusive(1000, 5000);
      //   Daarna wordt het item interceptor teruggestuurd met de nieuwe waarden teruggestuurd
      return interceptor;
    });

    //   pagina wordt gerenderd met de data erop
    response.render("interceptor-003", { data: enrichedData });
  });
});
app.get("/interceptor-004", (request, response) => {
  // json bestand wordt opgehaald uit de variabele
  fetchJson(dashboardUrl).then((data) => {
    // een variabel met enriched data erin waarbij data.systems worden samengevoegd
    // In map() maak ik het item "interceptor" aan
    const enrichedData = data.systems.map((interceptor) => {
      // Aan dit item geef ik het object met de null waarde aan
      // vervolgens roep ik de standaard funtie getRandom.. aan en defenier ik het minimum en maximum getal.
      interceptor["debris_extracted_last_30d"] = getRandomIntInclusive(0, 1000);
      interceptor["debris_extracted_total"] = getRandomIntInclusive(1000, 5000);
      //   Daarna wordt het item interceptor teruggestuurd met de nieuwe waarden teruggestuurd
      return interceptor;
    });

    //   pagina wordt gerenderd met de data erop
    response.render("interceptor-004", { data: enrichedData });
  });
});
app.get("/interceptor-005", (request, response) => {
  // json bestand wordt opgehaald uit de variabele
  fetchJson(dashboardUrl).then((data) => {
    // een variabel met enriched data erin waarbij data.systems worden samengevoegd
    // In map() maak ik het item "interceptor" aan
    const enrichedData = data.systems.map((interceptor) => {
      // Aan dit item geef ik het object met de null waarde aan
      // vervolgens roep ik de standaard funtie getRandom.. aan en defenier ik het minimum en maximum getal.
      interceptor["debris_extracted_last_30d"] = getRandomIntInclusive(0, 1000);
      interceptor["debris_extracted_total"] = getRandomIntInclusive(1000, 5000);
      //   Daarna wordt het item interceptor teruggestuurd met de nieuwe waarden teruggestuurd
      return interceptor;
    });

    //   pagina wordt gerenderd met de data erop
    response.render("interceptor-005", { data: enrichedData });
  });
});
app.get("/interceptor-006", (request, response) => {
  // json bestand wordt opgehaald uit de variabele
  fetchJson(dashboardUrl).then((data) => {
    // een variabel met enriched data erin waarbij data.systems worden samengevoegd
    // In map() maak ik het item "interceptor" aan
    const enrichedData = data.systems.map((interceptor) => {
      // Aan dit item geef ik het object met de null waarde aan
      // vervolgens roep ik de standaard funtie getRandom.. aan en defenier ik het minimum en maximum getal.
      interceptor["debris_extracted_last_30d"] = getRandomIntInclusive(0, 1000);
      interceptor["debris_extracted_total"] = getRandomIntInclusive(1000, 5000);
      //   Daarna wordt het item interceptor teruggestuurd met de nieuwe waarden teruggestuurd
      return interceptor;
    });

    //   pagina wordt gerenderd met de data erop
    response.render("interceptor-006", { data: enrichedData });
  });
});
app.get("/interceptor-007", (request, response) => {
  // json bestand wordt opgehaald uit de variabele
  fetchJson(dashboardUrl).then((data) => {
    // een variabel met enriched data erin waarbij data.systems worden samengevoegd
    // In map() maak ik het item "interceptor" aan
    const enrichedData = data.systems.map((interceptor) => {
      // Aan dit item geef ik het object met de null waarde aan
      // vervolgens roep ik de standaard funtie getRandom.. aan en defenier ik het minimum en maximum getal.
      interceptor["debris_extracted_last_30d"] = getRandomIntInclusive(0, 1000);
      interceptor["debris_extracted_total"] = getRandomIntInclusive(1000, 5000);
      //   Daarna wordt het item interceptor teruggestuurd met de nieuwe waarden teruggestuurd
      return interceptor;
    });

    //   pagina wordt gerenderd met de data erop
    response.render("interceptor-007", { data: enrichedData });
  });
});
app.get("/interceptor-008", (request, response) => {
  // json bestand wordt opgehaald uit de variabele
  fetchJson(dashboardUrl).then((data) => {
    // een variabel met enriched data erin waarbij data.systems worden samengevoegd
    // In map() maak ik het item "interceptor" aan
    const enrichedData = data.systems.map((interceptor) => {
      // Aan dit item geef ik het object met de null waarde aan
      // vervolgens roep ik de standaard funtie getRandom.. aan en defenier ik het minimum en maximum getal.
      interceptor["debris_extracted_last_30d"] = getRandomIntInclusive(0, 1000);
      interceptor["debris_extracted_total"] = getRandomIntInclusive(1000, 5000);
      //   Daarna wordt het item interceptor teruggestuurd met de nieuwe waarden teruggestuurd
      return interceptor;
    });

    //   pagina wordt gerenderd met de data erop
    response.render("interceptor-008", { data: enrichedData });
  });
});

app.get("/interceptor-009", (request, response) => {
  // json bestand wordt opgehaald uit de variabele
  fetchJson(dashboardUrl).then((data) => {
    // een variabel met enriched data erin waarbij data.systems worden samengevoegd
    // In map() maak ik het item "interceptor" aan
    const enrichedData = data.systems.map((interceptor) => {
      // Aan dit item geef ik het object met de null waarde aan
      // vervolgens roep ik de standaard funtie getRandom.. aan en defenier ik het minimum en maximum getal.
      interceptor["debris_extracted_last_30d"] = getRandomIntInclusive(0, 1000);
      interceptor["debris_extracted_total"] = getRandomIntInclusive(1000, 5000);
      //   Daarna wordt het item interceptor teruggestuurd met de nieuwe waarden teruggestuurd
      return interceptor;
    });

    //   pagina wordt gerenderd met de data erop
    response.render("interceptor-009", { data: enrichedData });
  });
});

app.get("/interceptor-010", (request, response) => {
  // json bestand wordt opgehaald uit de variabele
  fetchJson(dashboardUrl).then((data) => {
    // een variabel met enriched data erin waarbij data.systems worden samengevoegd
    // In map() maak ik het item "interceptor" aan
    const enrichedData = data.systems.map((interceptor) => {
      // Aan dit item geef ik het object met de null waarde aan
      // vervolgens roep ik de standaard funtie getRandom.. aan en defenier ik het minimum en maximum getal.
      interceptor["debris_extracted_last_30d"] = getRandomIntInclusive(0, 1000);
      interceptor["debris_extracted_total"] = getRandomIntInclusive(1000, 5000);
      //   Daarna wordt het item interceptor teruggestuurd met de nieuwe waarden teruggestuurd
      return interceptor;
    });

    //   pagina wordt gerenderd met de data erop
    response.render("interceptor-010", { data: enrichedData });
  });
});
// Start een http server op het ingestelde poortnummer en log de url
http.listen(port, () => {
  console.log("listening on http://localhost:" + port);
});

/**
 * Wraps the fetch api and returns the response body parsed through json
 * @param {*} url the api endpoint to address
 * @returns the json response from the api endpoint
 */
async function fetchJson(url) {
  return await fetch(url)
    .then((response) => response.json())
    .catch((error) => error);
}
