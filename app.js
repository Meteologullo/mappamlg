export function aggiornaMappa(tipo) {
  console.log("Visualizza mappa:", tipo);
  // Qui andrà la logica di aggiornamento dei marker in base al tipo selezionato
}

// Caricamento iniziale
window.addEventListener('DOMContentLoaded', () => {
  aggiornaMappa('attuali');
});