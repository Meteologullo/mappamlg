
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
  import { getFirestore, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDasXnVu7uIEjpwtQ-XbVilREGmAZSBjVE",
    authDomain: "meteo-estremami.firebaseapp.com",
    projectId: "meteo-estremami",
    storageBucket: "meteo-estremami.firebasestorage.app",
    messagingSenderId: "469441159034",
    appId: "1:469441159034:web:b687adef4a7a742499c0c3"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  window.getExtremesFromFirebase = async function (stationId) {
    const q = query(collection(db, "osservazioni"), where("stationId", "==", stationId));
    const snapshot = await getDocs(q);
    let min = Infinity, max = -Infinity;
    snapshot.forEach(doc => {
      const temp = doc.data().temperatura;
      if (typeof temp === 'number') {
        if (temp < min) min = temp;
        if (temp > max) max = temp;
      }
    });
    return {
      min: min === Infinity ? null : min,
      max: max === -Infinity ? null : max
    };
  };

function visualizzaPioggia() {
  datiTabella.forEach((d) => {
    const marker = markersById[d.stationId];
    if (typeof d.pioggia !== 'undefined' && marker) {
      const el = marker.getElement();
      if (el) {
        const colore = d.pioggia > 5 ? "#003366" : "#3399ff"; // Colore in base alla quantità
        el.innerHTML = `<span style='color:white;'>${d.pioggia.toFixed(1)} mm</span>`;
        el.style.backgroundColor = colore;
        el.style.width = '48px';
        el.style.height = '48px';
      }
    }
  });
}


async function caricaDatiOpenMeteo() {
  for (const stazione of stazioni.filter(s => s.openMeteo)) {
    try {
      const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${stazione.lat}&longitude=${stazione.lon}&current=temperature_2m,precipitation`);
      const data = await res.json();
      datiTabella.push({
        stationId: stazione.stationId,
        temp: data.current.temperature_2m,
        tempVal: data.current.temperature_2m,
        pioggia: data.current.precipitation
      });
    } catch (e) {
      console.error("Errore nel fetch OpenMeteo per", stazione.stationId, e);
    }
  }
}




  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
  import { getFirestore, collection, query, where, getDocs, Timestamp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDasXnVu7uIEjpwtQ-XbVilREGmAZSBjVE",
    authDomain: "meteo-estremami.firebaseapp.com",
    projectId: "meteo-estremami",
    storageBucket: "meteo-estremami.appspot.com",
    messagingSenderId: "469441159034",
    appId: "1:469441159034:web:b687adef4a7a742499c0c3"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  async function caricaEstremiDaFirebase() {
    const oggi = new Date();
    oggi.setHours(0, 0, 0, 0);
    const domani = new Date(oggi);
    domani.setDate(oggi.getDate() + 1);

    const q = query(
      collection(db, "osservazioni"),
      where("timestamp", ">=", Timestamp.fromDate(oggi)),
      where("timestamp", "<", Timestamp.fromDate(domani))
    );

    
    const snapshot = await getDocs(q);
    const extremi = {};

    snapshot.forEach(doc => {
      const d = doc.data();
      const id = d.stationId;
      const t = d.temperatura;

      if (!id || t == null) return;

      if (!extremi[id]) {
        extremi[id] = { min: t, max: t };
      } else {
        if (t < extremi[id].min) extremi[id].min = t;
        if (t > extremi[id].max) extremi[id].max = t;
      }
    });

    window.extremiGiornalieri = extremi;

    if (typeof aggiornaTabella === "function") aggiornaTabella();
  markersById[staz.stationId] = marker;
    if (typeof aggiornaPopup === "function") aggiornaPopup(); // <-- nuova funzione se serve

    if (typeof aggiornaTabella === "function") aggiornaTabella();
  markersById[staz.stationId] = marker;
  }

  window.addEventListener("load", caricaEstremiDaFirebase);



  const firebaseConfig = {
    apiKey: "AIzaSyBlNQX8Y-REPLACE-WITH-YOURS",
    authDomain: "meteo-estremami.firebaseapp.com",
    projectId: "meteo-estremami",
    storageBucket: "meteo-estremami.appspot.com",
    messagingSenderId: "108767339113415539553",
    appId: "1:108767339113415539553:web:dummyappid"
  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  const map = L.map('map').setView([38.9, 16.3], 8);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
  }).addTo(map);

  db.collection("osservazioni").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const lat = data.latitudine;
      const lon = data.longitudine;
      if (lat && lon) {
        const popupContent = `<div class="popup-wrapper" data-station-id="${data.stationId}">\n
          <b>Stazione:</b> ${data.stationId || "N/A"}<br>
          <b>Temperatura:</b> ${data.temperatura || "-"}°C<br>
          <span class="popup-data temp-max"><b>Massima:</b> ${data.Massima || "-"}°C</span><br>
          <span class="popup-data temp-min"><b>Minima:</b> ${data.Minima || "-"}°C</span><br>
          <b>Umidità:</b> ${data.umidita || "-"}%<br>
          <b>Pioggia:</b> ${data.pioggia || "-"} mm<br>
          <b>Raffica:</b> ${data.raffica || "-"} km/h<br>
          <b>Ora:</b> ${new Date(data.timestamp?.seconds * 1000).toLocaleString() || "-"}
        </div>`;
        L.marker([lat, lon]).addTo(map).bindPopup(popupContent);
      }
    });
  });



const firebaseConfig = {
  apiKey: "AIzaSyBlNQX8Y-REPLACE-WITH-YOURS",
  authDomain: "meteo-estremami.firebaseapp.com",
  projectId: "meteo-estremami"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

window.extremiGiornalieri = {};

function aggiornaTabellaConEstremi() {
  const righe = document.querySelectorAll("table tbody tr");
  righe.forEach(row => {
    const stationId = row.getAttribute("data-stationid");
    const dati = window.extremiGiornalieri[stationId];
    if (!dati) return;

    // Aggiunta colonne se mancanti
    if (!row.querySelector(".col-max")) {
      const maxCell = document.createElement("td");
      maxCell.className = "col-max";
      row.appendChild(maxCell);
    }
    if (!row.querySelector(".col-min")) {
      const minCell = document.createElement("td");
      minCell.className = "col-min";
      row.appendChild(minCell);
    }

    row.querySelector(".col-max").innerText = dati.max.toFixed(1);
    row.querySelector(".col-min").innerText = dati.min.toFixed(1);
  });

  const intestazioni = document.querySelectorAll("table thead tr th");
  const headerRow = document.querySelector("table thead tr");
  if (![...intestazioni].some(th => th.innerText === "Tmax")) {
    const thMax = document.createElement("th");
    thMax.innerText = "Tmax";
    headerRow.appendChild(thMax);
  }
  if (![...intestazioni].some(th => th.innerText === "Tmin")) {
    const thMin = document.createElement("th");
    thMin.innerText = "Tmin";
    headerRow.appendChild(thMin);
  }
}

function mostraEstremiNeiPopup() {
  const popupLayer = document.querySelectorAll(".leaflet-popup-content");
  popupLayer.forEach(popup => {
    const match = popup.innerHTML.match(/Stazione:\s(.+?)<br>/);
    if (!match) return;
    const stationId = match[1];
    const dati = window.extremiGiornalieri[stationId];
    if (!dati) return;

    if (!popup.innerHTML.includes("Massima:")) {
      popup.innerHTML += `<b>Massima:</b> ${dati.max} °C<br><b>Minima:</b> ${dati.min} °C<br></div>`;
    }
  });
}

function caricaEstremiDaFirebase() {
  const oggi = new Date().toISOString().slice(0, 10);
  const perStazione = {};

  db.collection("osservazioni").get().then((snapshot) => {
    snapshot.forEach((doc) => {
      const d = doc.data();
      if (!d.timestamp || !d.temperatura || !d.stationId) return;
      const ts = d.timestamp.seconds ? new Date(d.timestamp.seconds * 1000) : new Date(d.timestamp);
      const giorno = ts.toISOString().slice(0, 10);
      if (giorno !== oggi) return;

      if (!perStazione[d.stationId]) {
        perStazione[d.stationId] = { max: d.temperatura, min: d.temperatura };
      } else {
        perStazione[d.stationId].max = Math.max(perStazione[d.stationId].max, d.temperatura);
        perStazione[d.stationId].min = Math.min(perStazione[d.stationId].min, d.temperatura);
      }
    });

    window.extremiGiornalieri = perStazione;
    aggiornaTabellaConEstremi();
    setTimeout(mostraEstremiNeiPopup, 1000);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  caricaEstremiDaFirebase();
});



function aggiornaPopupConEstremi(marker, stazione) {
  marker.on('click', async () => {
    const stationId = stazione.stationId;
    const popup = L.popup().setLatLng([stazione.lat, stazione.lon]);
    let contenuto = `<div class='popup-title'>${stazione.nome}</div>`;

    try {
      const q = firebase.firestore().collection("osservazioni").where("stationId", "==", stationId);
      const snapshot = await q.get();
      let min = Infinity, max = -Infinity;
      let count = 0;
      snapshot.forEach(doc => {
        const data = doc.data();
        const temp = data.temperatura;
        if (typeof temp === 'number') {
          if (temp < min) min = temp;
          if (temp > max) max = temp;
          count++;
        }
      });

      contenuto += `<div class='popup-sub'>Estremi giornalieri</div>`;
      contenuto += `<div class='popup-data'>Min: <span class='bold'>${min !== Infinity ? min.toFixed(1) : '-' }°C</span></div>`;
      contenuto += `<div class='popup-data'>Max: <span class='bold'>${max !== -Infinity ? max.toFixed(1) : '-' }°C</span></div>`;
      contenuto += `<div class='popup-data'><em>Debug: ${count} valori trovati</em></div>`;
    } catch (e) {
      contenuto += `<div class='popup-data'>Errore: ${e.message}</div>`;
    }

    popup.setContent(contenuto);
    popup.openOn(mymap);
  });
}
