# Override icone meteo personalizzate

Questo file funziona insieme a `chirr.html` per sostituire le emoji con le icone PNG personalizzate
(caricate in questo repository) usando giorno/notte e un fallback automatico.

## Come funziona

- Le immagini vengono caricate da GitHub raw usando i nomi esatti con encoding (es: `Sereno giorno.PNG` → `Sereno%20giorno.PNG`).
- Se un'immagine non si può caricare, torna all'emoji originale come fallback.
- C'è un override robusto che intercetta i marker e le tabelle (hourly/daily) e inserisce le PNG.

## Nomi attuali usati (esempi)

- `Sereno giorno.PNG` / `Sereno notte.PNG`
- `Poco nuvoloso giorno.PNG` / `Poco nuvoloso notte.PNG`
- `Nuvoloso.PNG`
- `Nebbia nuvole basse.PNG`
- `Pioggia debole.PNG`
- `Pioggia moderata.PNG`
- `Pioggia mista a neve.PNG`
- `Pioggia .PNG` *(attenzione: c'è uno spazio prima del punto)*
- `Possibili piovaschi giorno.PNG`
- `Possibili temporali.PNG`
- `Neve .PNG` *(stesso discorso per lo spazio)*

## Consigli

- In futuro rinomina le icone rimuovendo spazi e maiuscole (es: `sereno_giorno.png`) e aggiorna la mappa per maggiore robustezza.
- Se modifichi una PNG e non si vede, aggiungi `?v=2` al suo URL per forzare il refresh.
