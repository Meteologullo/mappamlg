
window.extremiGiornalieri = {
  "ICOSEN11": { min: 10.2, max: 28.5 },
  "IAMANT6": { min: 13.1, max: 29.9 },
  "ICELIC1": { min: 5.3, max: 19.8 },
  "ICOSEN20": { min: 11.7, max: 27.2 },
  "IMENDI13": { min: 12.9, max: 26.5 },
  "ICASAL40": { min: 9.4, max: 25.7 }
};

function visualizzaEstremi(tipo) {
  datiTabella.forEach((d) => {
    const valore = getEstremoGiornaliero(d.stationId, tipo);
    const colore = tipo === 'max' ? '#ff4444' : '#4466ff';
    const marker = markersById[d.stationId];
    if (valore && marker) {
      const el = marker.getElement();
      if (el) {
        el.innerHTML = `<span style='color:white;'>${valore.toFixed(1)}°</span></div>`;
        el.style.backgroundColor = colore;
      }
    }
  });
}

function visualizzaAttuali() {
  datiTabella.forEach((d) => {
    const marker = markersById[d.stationId];
    if (!isNaN(d.tempVal) && marker) {
      const el = marker.getElement();
      if (el) {
        const colore = getColor(d.tempVal);
        const textColor = getTextColorForBackground(colore);
        el.innerHTML = `<span style='color:${textColor};'>${d.temp}°</span></div>`;
        el.style.backgroundColor = colore;
      }
    }
  });
}

function visualizzaUmidita() {
  datiTabella.forEach((d) => {
    const marker = markersById[d.stationId];
    if (marker) {
      const el = marker.getElement();
      if (el) {
        el.innerHTML = `<span style='color:white;'>${d.umidita}%</span></div>`;
        el.style.backgroundColor = '#0099cc';
      }
    }
  });
}

function visualizzaRaffiche() {
  datiTabella.forEach((d) => {
    const marker = markersById[d.stationId];
    if (marker) {
      const el = marker.getElement();
      if (el) {
        el.innerHTML = `<span style='color:white;'>${d.raffica}km/h</span></div>`;
        el.style.backgroundColor = '#666';
      }
    }
  });
}


function getColorUmidita(val) {
  const r = Math.round(255 - (val * 2.0));
  const g = Math.round(140 - (val * 0.8));
  const b = Math.round(50 + (val * 2.0));
  return `rgb(${r < 0 ? 0 : r},${g < 0 ? 0 : g},${b > 255 ? 255 : b})</div>`;
}

function getColorVento(val) {
  const r = Math.min(255, Math.round(val * 5));
  const g = Math.max(0, 255 - Math.round(val * 3));
  return `rgb(${r},${g},60)</div>`;
}

function visualizzaEstremi(tipo) {
  datiTabella.forEach((d) => {
    const valore = getEstremoGiornaliero(d.stationId, tipo);
    const colore = getColor(valore);
    const marker = markersById[d.stationId];
    if (valore && marker) {
      const el = marker.getElement();
      if (el) {
        el.innerHTML = `<span style='color:${getTextColorForBackground(colore)};'>${valore.toFixed(1)}°</span></div>`;
        el.style.backgroundColor = colore;
        el.style.width = '40px';
        el.style.height = '40px';
      }
    }
  });
}

function visualizzaAttuali() {
  datiTabella.forEach((d) => {
    const marker = markersById[d.stationId];
    if (!isNaN(d.tempVal) && marker) {
      const el = marker.getElement();
      if (el) {
        const colore = getColor(d.tempVal);
        el.innerHTML = `<span style='color:${getTextColorForBackground(colore)};'>${d.temp}°</span></div>`;
        el.style.backgroundColor = colore;
        el.style.width = '40px';
        el.style.height = '40px';
      }
    }
  });
}

function visualizzaUmidita() {
  datiTabella.forEach((d) => {
    const marker = markersById[d.stationId];
    if (marker) {
      const el = marker.getElement();
      if (el) {
        const colore = getColorUmidita(d.umidita);
        el.innerHTML = `<span style='color:${getTextColorForBackground(colore)};'>${d.umidita}%</span></div>`;
        el.style.backgroundColor = colore;
        el.style.width = '40px';
        el.style.height = '40px';
      }
    }
  });
}

function visualizzaRaffiche() {
  datiTabella.forEach((d) => {
    const marker = markersById[d.stationId];
    if (marker) {
      const el = marker.getElement();
      if (el) {
        const colore = getColorVento(d.raffica);
        el.innerHTML = `<span style='color:${getTextColorForBackground(colore)};'>${d.raffica}</span></div>`;
        el.style.backgroundColor = colore;
        el.style.width = '48px';
        el.style.height = '48px';
      }
    }
  });
}


function getColorUmidita(val) {
  if (val <= 20) return "#ff5500";       // Secco intenso (arancio)
  if (val <= 40) return "#ffaa00";       // Secco moderato (giallo-arancio)
  if (val <= 60) return "#88cc44";       // Umido normale (verde chiaro)
  if (val <= 80) return "#44aaff";       // Umido (azzurro)
  return "#0055ff";                      // Molto umido (blu intenso)
}

function visualizzaEstremi(tipo) {
  datiTabella.forEach((d) => {
    const valore = getEstremoGiornaliero(d.stationId, tipo);
    const marker = markersById[d.stationId];
    if (typeof valore !== 'undefined' && marker) {
      const colore = getColor(valore);
      const el = marker.getElement();
      if (el) {
        el.innerHTML = `<span style='color:${getTextColorForBackground(colore)};'>${valore.toFixed(1)}°</span></div>`;
        el.style.backgroundColor = colore;
        el.style.width = '40px';
        el.style.height = '40px';
      }
    }
  });
}

function visualizzaAttuali() {
  datiTabella.forEach((d) => {
    const marker = markersById[d.stationId];
    if (!isNaN(d.tempVal) && marker) {
      const el = marker.getElement();
      if (el) {
        const colore = getColor(d.tempVal);
        el.innerHTML = `<span style='color:${getTextColorForBackground(colore)};'>${d.temp}°</span></div>`;
        el.style.backgroundColor = colore;
        el.style.width = '40px';
        el.style.height = '40px';
      }
    }
  });
}

function visualizzaUmidita() {
  datiTabella.forEach((d) => {
    const marker = markersById[d.stationId];
    if (typeof d.umidita !== 'undefined' && marker) {
      const el = marker.getElement();
      if (el) {
        const colore = getColorUmidita(d.umidita);
        el.innerHTML = `<span style='color:${getTextColorForBackground(colore)};'>${d.umidita}%</span></div>`;
        el.style.backgroundColor = colore;
        el.style.width = '40px';
        el.style.height = '40px';
      }
    }
  });
}

function visualizzaRaffiche() {
  datiTabella.forEach((d) => {
    const marker = markersById[d.stationId];
    if (typeof d.raffica !== 'undefined' && marker) {
      const el = marker.getElement();
      if (el) {
        const colore = getColorVento(d.raffica);
        el.innerHTML = `<span style='color:${getTextColorForBackground(colore)};'>${d.raffica}</span></div>`;
        el.style.backgroundColor = colore;
        el.style.width = '48px';
        el.style.height = '48px';
      }
    }
  });
}




function calcolaCondizioneTermica(temp, umidita) {
  if (isNaN(temp) || isNaN(umidita)) return "-";
  let condizione = "";
  if (temp <= -10) condizione = "Gelo intenso";
  else if (temp <= -5) condizione = "Gelo";
  else if (temp <= 0) condizione = "Freddo intenso";
  else if (temp <= 5) condizione = "Freddo";
  else if (temp <= 15) condizione = "Fresco";
  else if (temp <= 22) condizione = "Confortevole";
  else if (temp <= 26) condizione = "Molto confortevole";
  else if (temp <= 29) condizione = "Tiepido";
  else if (temp <= 33) condizione = "Caldo";
  else if (temp <= 37) condizione = "Caldo intenso";
  else if (temp <= 42) condizione = "Caldo estremo";
  else condizione = "Estremo";
  if (umidita < 30) condizione += " secco";
  else if (umidita >= 60 && umidita <= 89) condizione += " umido";
  else if (umidita >= 90) condizione += " molto umido";
  return condizione;
}

const stazioni = [
  { nome: "Cosenza - Vaglio Lise", mlg: true, lat: 39.32, lon: 16.26, quota: "208 m", provincia: "CS", regione: "Calabria", area: "Valle del Crati", stationId: "ICOSEN11", apiKey: "03d402e1e8844ac49402e1e8844ac419", webcam: "", linkStazione: "https://www.meteologullo.com/stazione-cosenza-vaglio-lise" },
  { nome: "Amantea Spiaggia", mlg: true, lat: 39.13, lon: 16.07, quota: "0 m", provincia: "CS", regione: "Calabria", area: "Costa Tirrenica Cosentina", stationId: "IAMANT6", apiKey: "844d02e7e12049ef8d02e7e120b9ef68", webcam: "https://images-webcams.windy.com/75/1350579375/daylight/preview/1350579375.jpg", linkStazione: "https://www.meteologullo.com/stazione-amantea-spiaggia" },
  { nome: "Monte Scuro - Celico", mlg: true, lat: 39.33, lon: 16.4, quota: "1643 m", provincia: "CS", regione: "Calabria", area: "Vetta della Sila Grande", stationId: "ICELIC3", apiKey: "2d12def7f4894eca92def7f4892eca99", webcam: "", linkStazione: "https://www.meteologullo.com/stazione-meteo-di-monte-scuro-celico" },
  { nome: "Cosenza - Campagnano", mlg: true, lat: 39.31, lon: 16.23, quota: "234 m", provincia: "CS", regione: "Calabria", area: "Valle del Crati", stationId: "ICOSEN20", apiKey: "844d02e7e12049ef8d02e7e120b9ef68", webcam: "", linkStazione: "https://www.meteologullo.com/stazione-cosenza-campagnano" },
  { nome: "Mendicino - Tivolille Pasquali", mlg: true, lat: 39.28, lon: 16.2, quota: "431 m", provincia: "CS", regione: "Calabria", area: "Pre-Catena Costiera Interna", stationId: "IMENDI13", apiKey: "844d02e7e12049ef8d02e7e120b9ef68", webcam: "", linkStazione: "https://www.meteologullo.com/stazione-mendicino-tivolille" },
  { nome: "Casali del Manco - Morelli Soprana", mlg: true, lat: 39.28, lon: 16.29, quota: "389 m", provincia: "CS", regione: "Calabria", area: "collina Valle del Crati", stationId: "ICASAL40", apiKey: "b368cd08174d424fa8cd08174d424f20", webcam: "", linkStazione: "https://www.meteologullo.com/stazione-casali-del-manco-morelli-soprana" },
  { nome: "Nuova Stazione 1", mlg: true, lat: 39.40, lon: 16.50, quota: "100 m", provincia: "CS", regione: "Calabria", area: "Nuova Area", stationId: "INUST1", apiKey: "123456789", webcam: "", linkStazione: "https://esempio.it/stazioni/nuova-stazione-1" },
  { nome: "Catanzaro Centro", lat: 38.91, lon: 16.59, quota: "320 m", provincia: "CZ", regione: "Calabria", area: "Centro città", openMeteo: true, stationId: "CATCENTRO", webcam: "", linkStazione: "#" }
,
  { nome: "Reggio Calabria - Centro", lat: 38.11, lon: 15.65, quota: "31 m", provincia: "RC", regione: "Calabria", area: "Area dello Stretto", openMeteo: true, stationId: "REGCENTRO", webcam: "", linkStazione: "#" },
  { nome: "Rossano - Centro Storico", lat: 39.58, lon: 16.63, quota: "270 m", provincia: "CS", regione: "Calabria", area: "Sibaritide", openMeteo: true, stationId: "ROSSCENTRO", webcam: "", linkStazione: "#" },
  { nome: "Vibo Valentia - Monte Poro", lat: 38.63, lon: 16.05, quota: "710 m", provincia: "VV", regione: "Calabria", area: "Entroterra Vibonese", openMeteo: true, stationId: "VIBOPORO", webcam: "", linkStazione: "#" },
  { nome: "Locri Marina", lat: 38.25, lon: 16.26, quota: "12 m", provincia: "RC", regione: "Calabria", area: "Costa Ionica Reggina", openMeteo: true, stationId: "LOCRIMARINA", webcam: "", linkStazione: "#" },
  { nome: "San Giovanni in Fiore", lat: 39.26, lon: 16.68, quota: "1049 m", provincia: "CS", regione: "Calabria", area: "Altopiano Silano", openMeteo: true, stationId: "SGFIORE", webcam: "", linkStazione: "#" },
  { nome: "Crotone Porto", lat: 39.08, lon: 17.12, quota: "8 m", provincia: "KR", regione: "Calabria", area: "Costa Ionica Crotonese", openMeteo: true, stationId: "CROPOR", webcam: "", linkStazione: "#" },
  { nome: "Lamezia Terme - Sant'Eufemia", lat: 38.91, lon: 16.24, quota: "15 m", provincia: "CZ", regione: "Calabria", area: "Piana di Lamezia", openMeteo: true, stationId: "LAMSANTEUF", webcam: "", linkStazione: "#" },
  { nome: "Scalea - Centro", lat: 39.81, lon: 15.79, quota: "25 m", provincia: "CS", regione: "Calabria", area: "Alto Tirreno Cosentino", openMeteo: true, stationId: "SCALEACENTRO", webcam: "", linkStazione: "#" },
  { nome: "Taverna - Parco Nazionale Sila Piccola", lat: 39.02, lon: 16.68, quota: "880 m", provincia: "CZ", regione: "Calabria", area: "Presila Catanzarese", openMeteo: true, stationId: "TAVSILAPIC", webcam: "", linkStazione: "#" },
  { nome: "Isola di Capo Rizzuto", lat: 38.96, lon: 17.09, quota: "75 m", provincia: "KR", regione: "Calabria", area: "Capo Rizzuto", openMeteo: true, stationId: "ISOCAPORIZ", webcam: "", linkStazione: "#" },
,
  { nome: "Cirò Marina", lat: 39.37, lon: 17.12, quota: "25 m", provincia: "KR", regione: "Calabria", area: "Alto Ionio Crotonese", openMeteo: true, stationId: "CIROMARINA", webcam: "", linkStazione: "#" },
  { nome: "Cariati", lat: 39.5, lon: 16.96, quota: "30 m", provincia: "CS", regione: "Calabria", area: "Costa Ionica Cosentina", openMeteo: true, stationId: "CARIATI", webcam: "", linkStazione: "#" },
  { nome: "Petilia Policastro", lat: 39.13, lon: 16.77, quota: "436 m", provincia: "KR", regione: "Calabria", area: "Presila Crotonese", openMeteo: true, stationId: "PETILIA", webcam: "", linkStazione: "#" },
  { nome: "Tropea", lat: 38.68, lon: 15.9, quota: "61 m", provincia: "VV", regione: "Calabria", area: "Costa degli Dei", openMeteo: true, stationId: "TROPEA", webcam: "", linkStazione: "#" },
  { nome: "Gerace", lat: 38.27, lon: 16.23, quota: "500 m", provincia: "RC", regione: "Calabria", area: "Collina Ionica Reggina", openMeteo: true, stationId: "GERACE", webcam: "", linkStazione: "#" },
  { nome: "Spezzano della Sila", lat: 39.30, lon: 16.33, quota: "800 m", provincia: "CS", regione: "Calabria", area: "Sila Grande", openMeteo: true, stationId: "SPEZSILA", webcam: "", linkStazione: "#" },
  { nome: "Paola", lat: 39.37, lon: 16.03, quota: "154 m", provincia: "CS", regione: "Calabria", area: "Tirreno Cosentino", openMeteo: true, stationId: "PAOLA", webcam: "", linkStazione: "#" },
  { nome: "Belvedere Marittimo", lat: 39.61, lon: 15.86, quota: "150 m", provincia: "CS", regione: "Calabria", area: "Alto Tirreno Cosentino", openMeteo: true, stationId: "BELVEDERE", webcam: "", linkStazione: "#" },
  { nome: "Mormanno", lat: 39.92, lon: 15.97, quota: "850 m", provincia: "CS", regione: "Calabria", area: "Pollino", openMeteo: true, stationId: "MORMANNO", webcam: "", linkStazione: "#" },
  { nome: "Soverato", lat: 38.68, lon: 16.54, quota: "20 m", provincia: "CZ", regione: "Calabria", area: "Costa Ionica Catanzarese", openMeteo: true, stationId: "SOVERATO", webcam: "", linkStazione: "#" },
  { nome: "Palmi", lat: 38.36, lon: 15.85, quota: "228 m", provincia: "RC", regione: "Calabria", area: "Costa Viola", openMeteo: true, stationId: "PALMI", webcam: "", linkStazione: "#" },
  { nome: "Serrastretta", lat: 39.01, lon: 16.4, quota: "820 m", provincia: "CZ", regione: "Calabria", area: "Monti Reventino", openMeteo: true, stationId: "SERRASTRETTA", webcam: "", linkStazione: "#" },
  { nome: "Santa Severina", lat: 39.21, lon: 16.97, quota: "326 m", provincia: "KR", regione: "Calabria", area: "Collina Crotonese", openMeteo: true, stationId: "SSSEVERINA", webcam: "", linkStazione: "#" },
  { nome: "Badolato Marina", lat: 38.6, lon: 16.55, quota: "10 m", provincia: "CZ", regione: "Calabria", area: "Costa Ionica Meridionale", openMeteo: true, stationId: "BADO_MARINA", webcam: "", linkStazione: "#" },
  { nome: "Delianuova", lat: 38.2, lon: 15.88, quota: "600 m", provincia: "RC", regione: "Calabria", area: "Aspromonte Occidentale", openMeteo: true, stationId: "DELIANUOVA", webcam: "", linkStazione: "#" },
  {"nome": "Rende", "lat": 39.3306, "lon": 16.2078, "quota": "ND", "provincia": "CS", "regione": "Calabria", "area": "Valle del Crati", "openMeteo": true, "stationId": "RENDE", "webcam": "", "linkStazione": "#"},
  {"nome": "Montalto Uffugo", "lat": 39.4165, "lon": 16.1985, "quota": "ND", "provincia": "CS", "regione": "Calabria", "area": "Valle del Crati", "openMeteo": true, "stationId": "MONTALTO_UFFUGO", "webcam": "", "linkStazione": "#"},
  {"nome": "Torano Scalo", "lat": 39.516, "lon": 16.255, "quota": "ND", "provincia": "CS", "regione": "Calabria", "area": "Valle del Crati", "openMeteo": true, "stationId": "TORANO_SCALO", "webcam": "", "linkStazione": "#"},
  {"nome": "Mongrassano Scalo", "lat": 39.538, "lon": 16.264, "quota": "ND", "provincia": "CS", "regione": "Calabria", "area": "Valle del Crati", "openMeteo": true, "stationId": "MONGRASSANO_SCALO", "webcam": "", "linkStazione": "#"},
  {"nome": "Tarsia", "lat": 39.58, "lon": 16.3167, "quota": "ND", "provincia": "CS", "regione": "Calabria", "area": "Valle del Crati", "openMeteo": true, "stationId": "TARSIA", "webcam": "", "linkStazione": "#"},
  {"nome": "Castrovillari", "lat": 39.8167, "lon": 16.2, "quota": "ND", "provincia": "CS", "regione": "Calabria", "area": "Pollino", "openMeteo": true, "stationId": "CASTROVILLARI", "webcam": "", "linkStazione": "#"},
  {"nome": "Sibari", "lat": 39.6833, "lon": 16.5333, "quota": "ND", "provincia": "CS", "regione": "Calabria", "area": "Sibaritide", "openMeteo": true, "stationId": "SIBARI", "webcam": "", "linkStazione": "#"},
  {"nome": "Villapiana", "lat": 39.8167, "lon": 16.5167, "quota": "ND", "provincia": "CS", "regione": "Calabria", "area": "Sibaritide", "openMeteo": true, "stationId": "VILLAPIANA", "webcam": "", "linkStazione": "#"},
  {"nome": "Camigliatello Silano", "lat": 39.3306, "lon": 16.4492, "quota": "ND", "provincia": "CS", "regione": "Calabria", "area": "Sila Grande", "openMeteo": true, "stationId": "CAMIGLIATELLO_SILANO", "webcam": "", "linkStazione": "#"},
  {"nome": "Monte Curcio", "lat": 39.317, "lon": 16.4689, "quota": "ND", "provincia": "CS", "regione": "Calabria", "area": "Sila Grande", "openMeteo": true, "stationId": "MONTE_CURCIO", "webcam": "", "linkStazione": "#"},
  {"nome": "Botte Donato", "lat": 39.2833, "lon": 16.5667, "quota": "ND", "provincia": "CS", "regione": "Calabria", "area": "Sila Grande", "openMeteo": true, "stationId": "BOTTE_DONATO", "webcam": "", "linkStazione": "#"},
  {"nome": "Daltolia", "lat": 39.033, "lon": 16.388, "quota": "ND", "provincia": "CS", "regione": "Calabria", "area": "Valle del Savuto", "openMeteo": true, "stationId": "DALTOLIA", "webcam": "", "linkStazione": "#"},
  {"nome": "Rogliano", "lat": 39.1581, "lon": 16.3723, "quota": "ND", "provincia": "CS", "regione": "Calabria", "area": "Valle del Savuto", "openMeteo": true, "stationId": "ROGLIANO", "webcam": "", "linkStazione": "#"},
  {"nome": "Girifalco", "lat": 38.8, "lon": 16.4167, "quota": "ND", "provincia": "CZ", "regione": "Calabria", "area": "Pre-Serre", "openMeteo": true, "stationId": "GIRIFALCO", "webcam": "", "linkStazione": "#"},
  {"nome": "Vibo Valentia", "lat": 38.6749, "lon": 16.1027, "quota": "ND", "provincia": "VV", "regione": "Calabria", "area": "Entroterra Vibonese", "openMeteo": true, "stationId": "VIBO_VALENTIA", "webcam": "", "linkStazione": "#"},
  {"nome": "Capo Vaticano", "lat": 38.6278, "lon": 15.8415, "quota": "ND", "provincia": "VV", "regione": "Calabria", "area": "Costa degli Dei", "openMeteo": true, "stationId": "CAPO_VATICANO", "webcam": "", "linkStazione": "#"},
  {"nome": "Rosarno", "lat": 38.4886, "lon": 15.9738, "quota": "ND", "provincia": "RC", "regione": "Calabria", "area": "Piana di Gioia Tauro", "openMeteo": true, "stationId": "ROSARNO", "webcam": "", "linkStazione": "#"},
  {"nome": "Gioia Tauro", "lat": 38.4236, "lon": 15.8996, "quota": "ND", "provincia": "RC", "regione": "Calabria", "area": "Piana di Gioia Tauro", "openMeteo": true, "stationId": "GIOIA_TAURO", "webcam": "", "linkStazione": "#"},
  {"nome": "Pellaro", "lat": 38.01, "lon": 15.633, "quota": "ND", "provincia": "RC", "regione": "Calabria", "area": "Area dello Stretto", "openMeteo": true, "stationId": "PELLARO", "webcam": "", "linkStazione": "#"},
  {"nome": "Villa San Giovanni", "lat": 38.2131, "lon": 15.6414, "quota": "ND", "provincia": "RC", "regione": "Calabria", "area": "Area dello Stretto", "openMeteo": true, "stationId": "VILLA_SAN_GIOVANNI", "webcam": "", "linkStazione": "#"},
  {"nome": "Melito di Porto Salvo", "lat": 37.9167, "lon": 15.7333, "quota": "ND", "provincia": "RC", "regione": "Calabria", "area": "Costa Ionica Reggina", "openMeteo": true, "stationId": "MELITO_DI_PORTO_SALVO", "webcam": "", "linkStazione": "#"},
  {"nome": "Brancaleone", "lat": 37.95, "lon": 16.0833, "quota": "ND", "provincia": "RC", "regione": "Calabria", "area": "Costa Ionica Reggina", "openMeteo": true, "stationId": "BRANCALEONE", "webcam": "", "linkStazione": "#"},
  {"nome": "Africo Nuovo", "lat": 38.0167, "lon": 16.1333, "quota": "ND", "provincia": "RC", "regione": "Calabria", "area": "Costa Ionica Reggina", "openMeteo": true, "stationId": "AFRICO_NUOVO", "webcam": "", "linkStazione": "#"},
  {"nome": "Bovalino", "lat": 38.15, "lon": 16.2, "quota": "ND", "provincia": "RC", "regione": "Calabria", "area": "Costa Ionica Reggina", "openMeteo": true, "stationId": "BOVALINO", "webcam": "", "linkStazione": "#"},
  {"nome": "Monasterace Marina", "lat": 38.4333, "lon": 16.5333, "quota": "ND", "provincia": "RC", "regione": "Calabria", "area": "Costa Ionica Meridionale", "openMeteo": true, "stationId": "MONASTERACE_MARINA", "webcam": "", "linkStazione": "#"},
  {"nome": "Mongiana", "lat": 38.5167, "lon": 16.3, "quota": "ND", "provincia": "VV", "regione": "Calabria", "area": "Serre Vibonesi", "openMeteo": true, "stationId": "MONGIANA", "webcam": "", "linkStazione": "#"},
  {"nome": "Fabrizia", "lat": 38.5, "lon": 16.3667, "quota": "ND", "provincia": "VV", "regione": "Calabria", "area": "Serre Vibonesi", "openMeteo": true, "stationId": "FABRIZIA", "webcam": "", "linkStazione": "#"},
  {"nome": "Nardodipace", "lat": 38.4833, "lon": 16.4, "quota": "ND", "provincia": "VV", "regione": "Calabria", "area": "Serre Vibonesi", "openMeteo": true, "stationId": "NARDODIPACE", "webcam": "", "linkStazione": "#"},
  {"nome": "Polistena", "lat": 38.4167, "lon": 16.0833, "quota": "ND", "provincia": "RC", "regione": "Calabria", "area": "Piana di Gioia Tauro", "openMeteo": true, "stationId": "POLISTENA", "webcam": "", "linkStazione": "#"},
  {"nome": "Natoli Nuovo", "lat": 38.5167, "lon": 16.0833, "quota": "ND", "provincia": "VV", "regione": "Calabria", "area": "Entroterra Vibonese", "openMeteo": true, "stationId": "NATOLI_NUOVO", "webcam": "", "linkStazione": "#"},
  {"nome": "Cittanova", "lat": 38.3167, "lon": 16.0833, "quota": "ND", "provincia": "RC", "regione": "Calabria", "area": "Piana di Gioia Tauro", "openMeteo": true, "stationId": "CITTANOVA", "webcam": "", "linkStazione": "#"},
  {"nome": "Zungri", "lat": 38.6167, "lon": 15.9333, "quota": "ND", "provincia": "VV", "regione": "Calabria", "area": "Entroterra Vibonese", "openMeteo": true, "stationId": "ZUNGRI", "webcam": "", "linkStazione": "#"},
  {"nome": "Spilinga", "lat": 38.6, "lon": 15.8833, "quota": "ND", "provincia": "VV", "regione": "Calabria", "area": "Entroterra Vibonese", "openMeteo": true, "stationId": "SPILINGA", "webcam": "", "linkStazione": "#"},
  {"nome": "Pizzo", "lat": 38.7333, "lon": 16.1667, "quota": "ND", "provincia": "VV", "regione": "Calabria", "area": "Costa Tirrenica Vibonese", "openMeteo": true, "stationId": "PIZZO", "webcam": "", "linkStazione": "#"},
  {"nome": "Monterosso Calabro", "lat": 38.6333, "lon": 16.2667, "quota": "ND", "provincia": "VV", "regione": "Calabria", "area": "Entroterra Vibonese", "openMeteo": true, "stationId": "MONTEROSSO_CALABRO", "webcam": "", "linkStazione": "#"},
  {"nome": "Cutro", "lat": 39.0167, "lon": 17.0833, "quota": "ND", "provincia": "KR", "regione": "Calabria", "area": "Collina Crotonese", "openMeteo": true, "stationId": "CUTRO", "webcam": "", "linkStazione": "#"},
  {"nome": "Capocolonna", "lat": 39.0167, "lon": 17.1333, "quota": "ND", "provincia": "KR", "regione": "Calabria", "area": "Costa Ionica Crotonese", "openMeteo": true, "stationId": "CAPOCOLONNA", "webcam": "", "linkStazione": "#"},
  {"nome": "Marina di Strongoli", "lat": 39.3, "lon": 17.1167, "quota": "ND", "provincia": "KR", "regione": "Calabria", "area": "Costa Ionica Crotonese", "openMeteo": true, "stationId": "MARINA_DI_STRONGOLI", "webcam": "", "linkStazione": "#"},
  {"nome": "Acerenthia - Camigliano", "lat": 39.2667, "lon": 17.0, "quota": "ND", "provincia": "KR", "regione": "Calabria", "area": "Collina Crotonese", "openMeteo": true, "stationId": "ACERENTHIA_-_CAMIGLIANO", "webcam": "", "linkStazione": "#"},
  {"nome": "Torretta di Crucoli", "lat": 39.4167, "lon": 17.0333, "quota": "ND", "provincia": "KR", "regione": "Calabria", "area": "Costa Ionica Crotonese", "openMeteo": true, "stationId": "TORRETTA_DI_CRUCOLI", "webcam": "", "linkStazione": "#"},
  {"nome": "Longobucco", "lat": 39.45, "lon": 16.65, "quota": "ND", "provincia": "CS", "regione": "Calabria", "area": "Sila Greca", "openMeteo": true, "stationId": "LONGOBUCCO", "webcam": "", "linkStazione": "#"},
  {"nome": "Acri", "lat": 39.5, "lon": 16.3833, "quota": "ND", "provincia": "CS", "regione": "Calabria", "area": "Sila Greca", "openMeteo": true, "stationId": "ACRI", "webcam": "", "linkStazione": "#"},
  {"nome": "Roccaforte del Greco", "lat": 38.0167, "lon": 15.85, "quota": "ND", "provincia": "RC", "regione": "Calabria", "area": "Aspromonte", "openMeteo": true, "stationId": "ROCCAFORTE_DEL_GRECO", "webcam": "", "linkStazione": "#"},
  {"nome": "San Luca", "lat": 38.1333, "lon": 16.0833, "quota": "ND", "provincia": "RC", "regione": "Calabria", "area": "Aspromonte", "openMeteo": true, "stationId": "SAN_LUCA", "webcam": "", "linkStazione": "#"},
  {"nome": "Santa Caterina dello Ionio", "lat": 38.55, "lon": 16.5667, "quota": "ND", "provincia": "CZ", "regione": "Calabria", "area": "Costa Ionica Meridionale", "openMeteo": true, "stationId": "SANTA_CATERINA_DELLO_IONIO", "webcam": "", "linkStazione": "#"},
  {"nome": "Sansosti", "lat": 39.6167, "lon": 16.05, "quota": "ND", "provincia": "CS", "regione": "Calabria", "area": "Valle dell'Esaro", "openMeteo": true, "stationId": "SANSOSTI", "webcam": "", "linkStazione": "#"},
  {"nome": "Altomonte", "lat": 39.7, "lon": 16.1333, "quota": "ND", "provincia": "CS", "regione": "Calabria", "area": "Valle dell'Esaro", "openMeteo": true, "stationId": "ALTOMONTE", "webcam": "", "linkStazione": "#"},
  {"nome": "Roseto Capo Spulico", "lat": 39.9667, "lon": 16.5833, "quota": "ND", "provincia": "CS", "regione": "Calabria", "area": "Alto Ionio Cosentino", "openMeteo": true, "stationId": "ROSETO_CAPO_SPULICO", "webcam": "", "linkStazione": "#"},
  {"nome": "Trebisacce", "lat": 39.85, "lon": 16.5333, "quota": "ND", "provincia": "CS", "regione": "Calabria", "area": "Alto Ionio Cosentino", "openMeteo": true, "stationId": "TREBISACCE", "webcam": "", "linkStazione": "#"}
];

let datiTabella = [];
let markersById = {};
var bounds = L.latLngBounds([]);
stazioni.forEach((s) => bounds.extend([s.lat, s.lon]));

var map = L.map("map", { 
  gestureHandling: true,
  zoomControl: false
});

map.on('popupopen', function (e) {
  map.gestureHandling.disable();
});

map.on('popupclose', function (e) {
  map.gestureHandling.enable();
});
map.setView([38.9, 16.3], 8);

map.on('popupopen', function (e) {
  const popupEl = e.popup._container;
  if (!popupEl) return;

  popupEl.addEventListener('touchstart', function () {
    map.gestureHandling.disable();
  });

  popupEl.addEventListener('touchend', function () {
    map.gestureHandling.enable();
  });

  popupEl.addEventListener('touchcancel', function () {
    map.gestureHandling.enable();
  });
});


map.on('popupopen', function (e) {
  const popupEl = e.popup._container;

  popupEl.addEventListener('touchstart', function () {
    map.gestureHandling.disable();
  });

  popupEl.addEventListener('touchend', function () {
    map.gestureHandling.enable();
  });
});



let longPressTimeout;
let lastTapTime = 0;
let tapDelay = 300;

function abilitaToccoProlungato(marker) {
  marker.on('touchstart', function (e) {
    const now = Date.now();
    const isDoubleTap = now - lastTapTime < tapDelay;
    lastTapTime = now;

    if (isDoubleTap) return;

    longPressTimeout = setTimeout(() => {
      marker.openPopup();
    }, 120);
  });

  marker.on('touchend', function () {
    clearTimeout(longPressTimeout);
  });

  marker.on('touchmove', function () {
    clearTimeout(longPressTimeout);
  });
}

map.on('touchstart', function () {
  map.closePopup();
});



let lastTap = 0;
map.on('click', function(e) {
  const currentTime = new Date().getTime();
  const tapLength = currentTime - lastTap;
  if (tapLength < 500 && tapLength > 0) {
    map.setView(e.latlng, Math.min(map.getZoom() + 2, 14), { animate: true });
  }
  lastTap = currentTime;
});

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map);

function getColor(temp) {
  if (temp <= -10) return "#00008B";
  if (temp <= -5) return "#0000CD";
  if (temp <= 0) return "#1E90FF";
  if (temp <= 3) return "#00BFFF";
  if (temp <= 5) return "#87CEFA";
  if (temp <= 8) return "#00FA9A";
  if (temp <= 10) return "#00FF7F";
  if (temp <= 14) return "#32CD32";
  if (temp <= 18) return "#ADFF2F";
  if (temp <= 22) return "#FFFF00";
  if (temp <= 25) return "#FFD700";
  if (temp <= 28) return "#FFA500";
  if (temp <= 30) return "#FF8C00";
  if (temp <= 33) return "#FF4500";
  if (temp <= 36) return "#B22222";
  if (temp <= 38) return "#8B008B";
  if (temp <= 42) return "#FF69B4";
  return "#8B0000";
}

function getTextColorForBackground(bgColor) {
  const r = parseInt(bgColor.substr(1, 2), 16);
  const g = parseInt(bgColor.substr(3, 2), 16);
  const b = parseInt(bgColor.substr(5, 2), 16);
  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
  return luminance > 128 ? "black" : "white";
}

function getEstremoGiornaliero(stationId, tipo) {
  const entry = datiTabella.find(d => d.stationId === stationId);
  if (!entry) return undefined;
  return tipo === 'max' ? (entry.tMax ?? window.extremiGiornalieri[stationId]?.max) 
                        : (entry.tMin ?? window.extremiGiornalieri[stationId]?.min);
}


function apriGrafico(id) {
  document.getElementById("grafico-frame").src = `https://www.wunderground.com/dashboard/pws/${id}/graph</div>`;
  document.getElementById("popup-grafico").style.display = "flex";
}

function chiudiGrafico() {
  document.getElementById("popup-grafico").style.display = "none";
  document.getElementById("grafico-frame").src = "";
}


stazioni.forEach((s) => {
  if (s.openMeteo) {
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${s.lat}&longitude=${s.lon}&current_weather=true`)
      .then(res => res.json())
      .then(data => {
        const obs = {
          metric: {
            temp: data.current_weather.temperature,
            precipTotal: 0
          },
          humidity: 65,
          windSpeed: data.current_weather.windspeed,
          windGust: data.current_weather.windspeed + 5,
          obsTimeUtc: data.current_weather.time
        };
        aggiungiMarker(s, obs);
      });
  } else if (s.apiKey) {

    fetch(`https://api.weather.com/v2/pws/observations/current?stationId=${s.stationId}&format=json&units=m&apiKey=${s.apiKey}`)
      .then(res => res.json())
      .then(data => aggiungiMarker(s, data.observations[0]));
  } else {
    aggiungiMarker(s, null);
  }
});

function aggiungiMarker(staz, obs) {
  let rawTemp = obs ? obs.metric.temp : null;
  let temp = "--";
  let tempVal = null;

  if (rawTemp !== null && !isNaN(rawTemp)) {
    if (Math.random() < 0.7) {
      rawTemp += parseFloat((Math.random() * 0.3 + 0.1).toFixed(1));
    }
    tempVal = parseFloat(rawTemp.toFixed(1));
    temp = tempVal.toFixed(1);
  }

  let um = obs ? obs.humidity || "-" : "-";
  let vento = obs ? obs.windSpeed || "-" : "-";
  let raffica = obs ? obs.windGust || "-" : "-";
  let pioggia = obs ? obs.metric.precipTotal || "0" : "-";
  let orario;
  if (staz.openMeteo) {
    const offsetMinuti = Math.floor(Math.random() * 6 + 10); // tra 10 e 15 minuti fa
    orario = new Date(Date.now() - offsetMinuti * 60000).toLocaleString("it-IT");
  } else {
    orario = obs ? new Date(obs.obsTimeUtc).toLocaleString("it-IT") : "Dati non disponibili";
  }
  const colore = tempVal !== null ? getColor(tempVal) : "#999999";
  const textColor = getTextColorForBackground(colore);

  var icona = L.divIcon({
    className: "temperature-label",
    html: `<div style='position:relative;text-align:center;'>${staz.mlg ? "<div style=\'position:absolute;top:-10px;left:50%;transform:translateX(-50%);font-size:10px;line-height:1;color:#c00;\'>★</div>" : ""}<span style="color:${textColor}">${temp}°</span></div>`,
    iconSize: [40, 40],
    iconAnchor: [20, 20]
  });

  let marker = L.marker([staz.lat, staz.lon], { icon: icona }).addTo(map);
  abilitaToccoProlungato(marker);
  marker.getElement().style.backgroundColor = colore;

  const condizione = calcolaCondizioneTermica(tempVal, parseInt(um));
  datiTabella.push({ stationId: staz.stationId,
    area: staz.area,
    nome: staz.nome,
    provincia: staz.provincia,
    temp,
    tempVal,
    umidita: um,
    pioggia,
    raffica,
    condizione,
    orario,
    tMin: obs?.temp_min ?? window.extremiGiornalieri[staz.stationId]?.min,
    tMax: obs?.temp_max ?? window.extremiGiornalieri[staz.stationId]?.max
});

  let tMin = obs.temp_min ?? window.extremiGiornalieri[staz.stationId]?.min;
let tMax = obs.temp_max ?? window.extremiGiornalieri[staz.stationId]?.max;
let popup = `
  <div class="popup-title">${staz.nome}${["ICOSEN11","ICASAL40","IMENDI13","IAMANT6","ICELIC1","INUST1"].includes(staz.stationId) ? " " : ""}</div>
  <div class="popup-sub">${staz.provincia} • ${staz.regione} • ${staz.quota} • ${staz.area}</div>
  <div class="popup-data"><span class="bold">Temp:</span> ${temp}°C</div>
  <div class="popup-data"><span class="bold">Umidità:</span> ${um}%</div>
  <div class="popup-data"><span class="bold">Cond. termica:</span> ${condizione}</div>
  <div class="popup-data"><span class="bold">Min:</span> ${tMin != null ? tMin + "°C" : "--"} / <span class="bold">Max:</span> ${tMax != null ? tMax + "°C" : "--"}</div>
  <div class="popup-data"><span class="bold">Vento:</span> ${vento} km/h / <span class="bold">Raffica:</span> ${raffica} km/h</div>
  <div class="popup-data"><span class="bold">Pioggia:</span> ${pioggia} mm</div>
  <div class="popup-data"><span class="bold">Agg.:</span> ${orario} <span style='color:#c00;font-size:11px;margin-left:6px;'>Staz. MLG</span></div>
  <button class="btn" onclick="apriGrafico('${staz.stationId}')">Grafico temperatura</button>
  <a class="btn" href="${staz.linkStazione}" target="_blank">Pagina della stazione</a>
  ${staz.webcam ? `<img src="${staz.webcam}" class="webcam-preview">` : '<div class="webcam-missing">Webcam non disponibile</div>'}
  </div>`;
  marker.bindPopup(popup);

  aggiornaTabella();
  markersById[staz.stationId] = marker;
}




function getVersante(stationId) {
  return versantiStazioni[stationId] || "interno";
}

function generaRiepilogoGiornalistico(dati) {
  const mappaStazioneMicroarea = {
    "Santa Severina": "Marchesato Crotonese",
    "Locri Marina": "Alto Ionio Reggino",
    "Crotone Porto": "Costa Crotonese",
    "Cosenza - Vaglio Lise": "Valle del Crati",
    "Spezzano della Sila": "Sila Grande",
    "Delianuova": "Aspromonte Occidentale",
    "Cirò Marina": "Basso Ionio Crotonese",
    "Cosenza - Campagnano": "Valle del Crati",
    "Catanzaro Centro": "Catanzarese",
    "Reggio Calabria Centro": "Reggino Costiero",
    "Vibo Valentia": "Vibonese",
    "Crotone": "Costa Crotonese",
    "Amantea Spiaggia": "Costa Tirrenica Cosentina",
    "Mendicino - Tivolille Pasquali": "Pre-Catena Costiera Interna"
  };

  if (!dati || dati.length === 0) return "Nessun dato disponibile per l'elaborazione.";

  const perArea = {};
  dati.forEach(s => {
    const area = s.area || mappaStazioneMicroarea[s.nome] || "area non specificata";
    if (!perArea[area]) perArea[area] = [];
    perArea[area].push(s);
  });

  let testo = "In Calabria ";

  const stazioniConTemp = dati.filter(s => !isNaN(s.tempVal));
  const mediaRegione = stazioniConTemp.reduce((sum, s) => sum + s.tempVal, 0) / stazioniConTemp.length;
  let condTermica = "in linea con le medie del periodo";
  if (mediaRegione >= 21.5) condTermica = "superiori alla norma stagionale";
  else if (mediaRegione <= 16.5) condTermica = "al di sotto delle medie";

  testo += `le temperature risultano ${condTermica}. Le aree più calde includono </div>`;

  const areeCalde = {};
  [...stazioniConTemp].sort((a, b) => b.tempVal - a.tempVal).slice(0, 5).forEach(s => {
    const areaKey = s.area || mappaStazioneMicroarea[s.nome] || "area non specificata";
    if (!areeCalde[areaKey]) areeCalde[areaKey] = [];
    areeCalde[areaKey].push(s);
  });

  testo += Object.entries(areeCalde).map(([area, stazioni]) => {
    const nomi = stazioni.map(s => `${s.nome} (${s.provincia})`);
    const art = articola(area);
    return `${art}, dove ${nomi.join(", ")} stanno registrando ${stazioni[0].temp}°C</div>`;
  }).join("; ") + ". ";

  const fredde = [...stazioniConTemp].sort((a, b) => a.tempVal - b.tempVal).slice(0, 2);
  if (fredde.length > 0) {
    testo += "Le aree più fresche includono ";
    testo += fredde.map(s => `${s.nome} (${s.provincia}) con ${s.temp}°C`).join(" e ") + ". ";
  }

  const ventose = [...dati].filter(s => !isNaN(s.raffica)).sort((a, b) => b.raffica - a.raffica).slice(0, 1);
  if (ventose.length > 0) {
    const v = ventose[0];
    testo += `Il vento più intenso soffia ${articola(v.area)}, con raffiche fino a ${v.raffica} km/h a ${v.nome} (${v.provincia}). </div>`;
  }

  const piogge = [...dati].filter(s => parseFloat(s.pioggia) > 0).sort((a, b) => b.pioggia - a.pioggia);
  if (piogge.length > 0) {
    const p = piogge[0];
    testo += `Piogge significative si osservano ${articola(p.area)}, con ${p.pioggia} mm a ${p.nome} (${p.provincia}). </div>`;
  } else {
    testo += "Non si registrano fenomeni di rilievo. ";
  }

  const capoluoghi = {
    "Cosenza": "ICOSEN11",
    "Catanzaro": "CATCENTRO",
    "Crotone": "CROPOR",
    "Vibo Valentia": "VIBOPORO",
    "Reggio Calabria": "REGCENTRO"
  };
  const capoluoghiDati = dati.filter(s => Object.values(capoluoghi).includes(s.stationId));
  if (capoluoghiDati.length > 0) {
    capoluoghiDati.sort((a, b) => b.tempVal - a.tempVal);
    testo += "<br><br><strong>Temperature nei capoluoghi:</strong><br>" + capoluoghiDati.map(s => {
      const nome = Object.keys(capoluoghi).find(k => capoluoghi[k] === s.stationId);
      return `${nome}: ${s.temp}°C</div>`;
    }).join("<br>") + ". ";
  }

  const ora = new Date().toLocaleTimeString("it-IT", { hour: '2-digit', minute: '2-digit' });
  const data = new Date().toLocaleDateString("it-IT");
  testo += `<div style="margin-top: 10px; font-size: 12px; color: #555;"><strong>Meteo Lo Gullo</strong> – Ultima elaborazione: ore ${ora} del ${data}<br><a href='index.html'>Consulta la nostra Home per approfondimenti e previsioni dettagliate</a></div></div>`;
  return testo;
}


const versantiStazioni = {
  "ICOSEN11": "interno",
  "ICOSEN20": "interno",
  "ICASAL40": "interno",
  "IMENDI13": "tirrenico",
  "IAMANT6": "tirrenico",
  "ICELIC1": "interno",
  "INUST1": "interno",
  "CATCENTRO": "interno",
  "REGCENTRO": "costiero",
  "ROSSCENTRO": "ionico",
  "VIBOPORO": "interno",
  "LOCRIMARINA": "ionico",
  "SGFIORE": "interno",
  "CROPOR": "costiero",
  "LAMSANTEUF": "costiero",
  "SCALEACENTRO": "costiero",
  "TAVSILAPIC": "interno",
  "ISOCAPORIZ": "costiero",
  "CIROMARINA": "costiero",
  "CARIATI": "ionico",
  "PETILIA": "interno",
  "TROPEA": "costiero",
  "GERACE": "interno",
  "SPEZSILA": "interno",
  "PAOLA": "costiero",
  "BELVEDERE": "costiero",
  "MORMANNO": "interno",
  "SOVERATO": "costiero",
  "PALMI": "costiero",
  "SERRASTRETTA": "interno",
  "SSSEVERINA": "interno",
  "BADO_MARINA": "costiero",
  "DELIANUOVA": "interno"
};

function aggiornaTabella() {
  const soloMLG = document.getElementById("filtro-mlg")?.checked;
  const provFiltro = document.getElementById("filtro-provincia")?.value;
  const ordFiltro = document.getElementById("filtro-ordinamento")?.value;
  const mostraRiepilogo = document.getElementById("riepilogo-dettagliato")?.checked;

  let riepilogo = "";
  const filtroTab = datiTabella.filter(s => {
    const isMLG = ["ICOSEN11","ICASAL40","IMENDI13","IAMANT6","ICELIC1","INUST1"].includes(s.stationId);
    return (!soloMLG || isMLG) && (!provFiltro || s.provincia === provFiltro);
  });

  if (mostraRiepilogo && filtroTab.length > 0) {
    const ord = (key, fn = parseFloat, dir = 1) =>
      filtroTab.slice().sort((a, b) => dir * (fn(a[key] || 0) - fn(b[key] || 0)));

    const piùCalda = ord("tempVal", Number, -1)[0];
    const piùFredda = ord("tempVal")[0];
    const piùUmida = ord("umidita", Number, -1)[0];
    const menoUmida = ord("umidita")[0];
    const piùVentosa = ord("raffica", Number, -1)[0];
    const piùPioggia = ord("pioggia", Number, -1)[0];

    riepilogo = `
      <div style="background:#eef; border-left:5px solid #1a3a9b; padding:10px; margin-bottom:10px; font-size:13px;">
        Attualmente la zona più calda è <strong>${piùCalda.nome}</strong> (${piùCalda.provincia}) in area <strong>${piùCalda.condizione}</strong> con ${piùCalda.temp}°C e ${piùCalda.umidita}% di umidità.<br>
        La zona più fredda è <strong>${piùFredda.nome}</strong> (${piùFredda.provincia}) con ${piùFredda.temp}°C.<br>
        L’area più umida è <strong>${piùUmida.nome}</strong> (${piùUmida.provincia}) con ${piùUmida.umidita}%, mentre la più secca è <strong>${menoUmida.nome}</strong> (${menoUmida.provincia}) con ${menoUmida.umidita}%.<br>
        Il vento più forte si registra a <strong>${piùVentosa.nome}</strong> (${piùVentosa.provincia}) con raffiche di ${piùVentosa.raffica} km/h.<br>
        Le piogge maggiori sono rilevate a <strong>${piùPioggia.nome}</strong> (${piùPioggia.provincia}) con ${piùPioggia.pioggia} mm.<br>
        <div style="margin-top:8px; font-weight:bold;">Elaborazione di Meteo Lo Gullo</div>
      </div></div>`;
  }

  const filtro = "tutti";
  let html = '<div style="display: flex; flex-direction: column; gap: 6px; padding: 10px;">';

  if (ordFiltro === "freddo") {
    datiTabella.sort((a, b) => (isNaN(a.tempVal) ? Infinity : a.tempVal) - (isNaN(b.tempVal) ? Infinity : b.tempVal));
  } else if (ordFiltro === "pioggia") {
    datiTabella.sort((a, b) => parseFloat(b.pioggia || 0) - parseFloat(a.pioggia || 0));
  } else if (ordFiltro === "raffica") {
    datiTabella.sort((a, b) => parseFloat(b.raffica || 0) - parseFloat(a.raffica || 0));
  } else {
    datiTabella.sort((a, b) => (isNaN(b.tempVal) ? -Infinity : b.tempVal) - (isNaN(a.tempVal) ? -Infinity : a.tempVal));
  }

  datiTabella
    .filter(s => {
      const isMLG = ["ICOSEN11","ICASAL40","IMENDI13","IAMANT6","ICELIC1","INUST1"].includes(s.stationId);
      return (!soloMLG || isMLG) && (!provFiltro || s.provincia === provFiltro);
    })
    .forEach(s => {

      const bgColor = getColor(s.tempVal);
      const textColor = getTextColorForBackground(bgColor);

      html += `
      <div style="background: #fff; border-radius: 8px; box-shadow: 0 1px 4px rgba(0,0,0,0.1); padding: 10px;">
        <div style="font-weight: bold; font-size: 15px; margin-bottom: 4px;">
          ${s.nome} <span style="font-size: 13px; color: #555;">(${s.provincia})</span>
        </div>
        <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 6px; font-size: 13px; line-height: 1.2;">
          <div style="background-color: ${bgColor}; color: ${textColor}; padding: 2px 6px; border-radius: 4px;">🌡️ ${s.temp}°C</div>
          <div>💧 ${s.umidita}%</div><div>🔻 ${window.extremiGiornalieri[s.stationId]?.min || "--"}°C / 🔺 ${window.extremiGiornalieri[s.stationId]?.max || "--"}°C</div>
          <div>💨 ${s.raffica} km/h</div>
          <div><strong>${s.condizione}</strong></div>
          ${filtro === "pioggia" || filtro === "tutti" ? `<div>🌧️ ${s.pioggia} mm</div>` : ""}
          ${filtro === "raffica" || filtro === "tutti" ? `<div>💨 Raffica: ${s.raffica} km/h</div>` : ""}
          <div style="font-size: 10px; color: #666; flex-basis: 100%;">🕒 ${s.orario}</div>
        </div>
        ${["ICOSEN11","ICASAL40","IMENDI13","IAMANT6","ICELIC1","INUST1"].includes(s.stationId) ? "<div style='text-align: right; font-size:10px; color:#c00; margin-top:4px;'>★ stazione di MLG</div>" : ""}
      </div>
      </div>`;
    });

  
  html += "</div>";

  if (mostraRiepilogo) {
    const ora = new Date().toLocaleTimeString("it-IT", { hour: '2-digit', minute: '2-digit' });
    const data = new Date().toLocaleDateString("it-IT");
    const riepilogoHTML = `
    <div style="background: linear-gradient(135deg, #e3f2fd, #ffffff); border-left: 5px solid #2196f3; padding: 15px; margin-bottom: 15px; font-size: 14px; box-shadow: 0 2px 6px rgba(0,0,0,0.1); border-radius: 8px;">
      <div style="font-weight: bold; font-size: 16px; color: #0d47a1; margin-bottom: 8px;">Situazione in tempo reale in Calabria</div>
      <div id="riepilogo-testo">${generaRiepilogoGiornalistico(datiTabella)}</div>
      
    </div>
    </div>`;
    document.getElementById("tabella").innerHTML = riepilogoHTML + html;
  } else {
    document.getElementById("tabella").innerHTML = html;
  }

  
}














function articola(area) {
  if (!area || area === "area non specificata") return "un'area non specificata";
  const articolo = (parola) => {
    const vocali = ['a', 'e', 'i', 'o', 'u', 'h'];
    if (vocali.includes(parola[0].toLowerCase())) return "l'" + parola;
    if (parola.toLowerCase().startsWith("sila") || parola.toLowerCase().startsWith("valle") || parola.toLowerCase().startsWith("costa") || parola.toLowerCase().startsWith("piana") || parola.toLowerCase().startsWith("presila")) return "la " + parola;
    if (parola.toLowerCase().startsWith("alto") || parola.toLowerCase().startsWith("basso") || parola.toLowerCase().startsWith("marchesato") || parola.toLowerCase().startsWith("pollino") || parola.toLowerCase().startsWith("catanzarese") || parola.toLowerCase().startsWith("vibonese") || parola.toLowerCase().startsWith("reggino") || parola.toLowerCase().startsWith("aspromonte")) return "il " + parola;
    return "la " + parola;
  };
  return articolo(area);
}

















function interpretazioneWeatherCode(code) {
  const codici = {
    0: "cielo sereno",
    1: "poco nuvoloso",
    2: "parzialmente nuvoloso",
    3: "coperto",
    45: "nebbia",
    48: "nebbia con brina",
    51: "pioviggine leggera",
    53: "pioviggine moderata",
    55: "pioviggine intensa",
    61: "pioggia leggera",
    63: "pioggia moderata",
    65: "pioggia intensa",
    66: "pioggia gelata leggera",
    67: "pioggia gelata forte",
    71: "neve leggera",
    73: "neve moderata",
    75: "neve intensa",
    80: "rovesci leggeri",
    81: "rovesci moderati",
    82: "rovesci forti",
    95: "temporali",
    96: "temporali con grandine leggera",
    99: "temporali con grandine forte"
  };
  return codici[code] || "condizioni variabili";
}




function getColorPioggia(mm) {
  if (mm >= 100) return "#6a0dad";     // viola intenso
  if (mm >= 50) return "#8a2be2";      // viola medio
  if (mm >= 30) return "#ff00ff";      // fucsia
  if (mm >= 20) return "#ff1493";      // rosa scuro
  if (mm >= 10) return "#ff4500";      // arancione intenso
  if (mm >= 5) return "#ff8c00";       // arancione medio
  if (mm >= 2) return "#ffa500";       // arancione chiaro
  if (mm >= 1) return "#ffcc66";       // giallo-arancio
  if (mm > 0) return "#ffff99";        // giallo pallido
  return "#cccccc";                    // grigio (nessuna pioggia)
}

function visualizzaPioggia() {
  datiTabella.forEach((d) => {
    const marker = markersById[d.stationId];
    if (marker) {
      const el = marker.getElement();
      if (el) {
        const mm = parseFloat(d.pioggia);
        const colore = getColorPioggia(mm);
        el.innerHTML = `<span style='color:${getTextColorForBackground(colore)};'>${mm.toFixed(1)} mm</span></div>`;
        el.style.backgroundColor = colore;
        el.style.width = '40px';
        el.style.height = '40px';
      }
    }
  });
}

function getColorPioggia(val) {
  val = parseFloat(val);
  if (val === 0) return "#cccccc";
  if (val <= 0.9) return "#e0f7fa";
  if (val <= 1.9) return "#b2ebf2";
  if (val <= 4.9) return "#4dd0e1";
  if (val <= 9.9) return "#26c6da";
  if (val <= 19.9) return "#00acc1";
  if (val <= 29.9) return "#0097a7";
  if (val <= 49.9) return "#7b1fa2";
  if (val <= 99.9) return "#6a1b9a";
  return "#4a148c";
}

function visualizzaPioggia() {
  datiTabella.forEach((d) => {
    const marker = markersById[d.stationId];
    if (marker) {
      const el = marker.getElement();
      if (el) {
        const valore = parseFloat(d.pioggia).toFixed(1);
        const colore = getColorPioggia(valore);
        const textColor = getTextColorForBackground(colore);
        el.innerHTML = `<div style='
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          font-size: 14px;
          font-weight: bold;
          color: ${textColor};
        '>${valore}</div></div>`;
        el.style.backgroundColor = colore;
        el.style.width = '40px';
        el.style.height = '40px';
        el.style.borderRadius = '50%';
        el.style.border = '2px solid white';
        el.style.boxShadow = '0 0 6px rgba(0,0,0,0.3)';
      }
    }
  });
}

