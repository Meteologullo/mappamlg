# Checklist veloce – Webcam Ecowitt non aggiornata

Usa questa lista **ogni primo del mese** (o quando la foto non si aggiorna).

---

## 1️⃣ Prova rapida

1. Apri (in anonimo)  
   `https://amantea-webcam.agn19278.workers.dev/?debug=1`
2. **Vedi JSON con `"errcode":"0"`** → passa al punto 2  
   **Vedi HTML / 404 / Astro Blog** → il Worker è stato sovrascritto  
   * Vai in Cloudflare › Workers › amantea‑webcam › Quick Edit  
   * Incolla di nuovo `index.js` della webcam  
   * `Save ➜ Deploy` e riprova

---

## 2️⃣ Chiavi Ecowitt valide?

* Nel JSON leggi  
  `{ "errcode": "40001", "errmsg": "invalid device_id" }`
* Copia da Ecowitt (Devices › Camera › Share/API) i nuovi  
  **authorize** e **device_id**
* Sostituiscili nelle prime due costanti del Worker, `Save ➜ Deploy`

---

## 3️⃣ Esistono già foto per il mese nuovo?

* Nel JSON vedi `2025MM01` **con** `picture_url` → probabilmente il browser sta usando cache  
  * Ricarica la tua pagina con **Ctrl + F5**  
* Nessuna chiave del mese nuovo → la HP10 non ha ancora caricato nulla  
  * Aspetta qualche minuto, il Worker userà ancora il mese vecchio

---

## 4️⃣ Il mese nuovo esiste ma il Worker serve ancora quello vecchio

* In `index.js` cambia  
  `const monthsToCheck = 2;` → `3;`  
  `Save ➜ Deploy`

---

## 5️⃣ Ecowitt ha cambiato il nome del campo URL

* Nel JSON il link ora è in `picUrl` / `url` / altro:  
  * In funzione `pickLatest` aggiungi:  
    ```js
    if (r.picUrl) return r.picUrl;
    ```  
  * `Save ➜ Deploy`

---

## 6️⃣ Serve aiuto? Cosa inviare a ChatGPT

1. Screenshot **o** copia delle prime ~40 righe del JSON (`?debug=1`)  
2. L’errore completo se `errcode ≠ 0`  
3. Conferma dell’URL del Worker che stai usando  
4. (Se hai rigenerato link Ecowitt) i nuovi valori di **authorize** e **device_id** – *puoi sostituire gli ultimi caratteri con `***` se preferisci*

Con questi dati posso generare o adattare il codice in pochi minuti.

---

*(Checklist generata: 1 lug 2025 – v2)*