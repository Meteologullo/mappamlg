
let radarLayer = null;
let radarAttivo = false;

async ${path}/256/{z}/{x}/{y}/2/1_1.png`;

      radarLayer = L.tileLayer(tileUrl, {
        attribution: '&copy; <a href="https://www.rainviewer.com">RainViewer</a>',
        opacity: 0.6,
        zIndex: 1000
      });
    } catch (error) {
      console.error('Errore nel caricamento del layer radar:', error);
      return;
    }
  }

  if (!radarAttivo) {
    radarLayer.addTo(map);
  } else {
    map.removeLayer(radarLayer);
  }
  radarAttivo = !radarAttivo;
}



let radarLayers = [];
let radarTimes = [];
let radarIndex = 0;
let radarAnimationInterval = null;
let radarPlaying = false;

async ${path}/256/{z}/{x}/{y}/2/1_1.png`, {
          opacity: 0.6,
          zIndex: 1000,
          attribution: '&copy; <a href="https://www.rainviewer.com">RainViewer</a>'
        })
      );
    } catch (error) {
      console.error('Errore nel caricamento dei frame radar:', error);
      return;
    }
  }

  if (!radarPlaying) {
    radarPlaying = true;
    radarIndex = 0;
    radarLayers[radarIndex].addTo(map);
    radarAnimationInterval = setInterval(() => {
      map.removeLayer(radarLayers[radarIndex]);
      radarIndex = (radarIndex + 1) % radarLayers.length;
      radarLayers[radarIndex].addTo(map);
    }, 700);
  } else {
    clearInterval(radarAnimationInterval);
    radarLayers.forEach(layer => map.removeLayer(layer));
    radarPlaying = false;
  }
}
