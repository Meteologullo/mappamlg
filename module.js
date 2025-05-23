
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
        const mm = parseFloat(d.pioggia) || 0;
        const colore = getColorPioggia(mm);

        // testo sempre leggibile
        const textColor = getTextColorForBackground(colore);
        const shadow = textColor === 'white'
          ? '0 0 3px rgba(0,0,0,0.7)'
          : '0 0 3px rgba(255,255,255,0.7)';

        el.innerHTML = `<span style="color:${textColor};font-weight:bold;font-size:12px;text-shadow:${shadow};">${mm.toFixed(1)}</span>`;
        el.style.backgroundColor = colore;
        el.style.width = '48px';
        el.style.height = '48px';
        el.style.display = 'flex';
        el.style.alignItems = 'center';
        el.style.justifyContent = 'center';
        el.style.borderRadius = '50%';
      }
    }
  });
}

  });
}


async function caricaDatiOpenMeteo() {
  for (const stazione of stazioni.filter(s => s.openMeteo)) {
    try {
      const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${stazione.lat}&longitude=${stazione.lon}&current=temperature_2m,relativehumidity_2m,precipitation`);
      const data = await res.json();
      datiTabella.push({
        stationId: stazione.stationId,
        temp: data.current.temperature_2m,
        tempVal: data.current.temperature_2m,
        pioggia: data.current.precipitation,
        umidita: data.current.relativehumidity_2m
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
