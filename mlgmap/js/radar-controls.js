
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
      document.getElementById("radarSlider").max = radarLayers.length - 1;
    } catch (error) {
      console.error('Errore nel caricamento dei frame radar:', error);
      return;
    }
  }

  if (!radarPlaying && controls.style.display === "none") {
    controls.style.display = "block";
    radarIndex = 0;
    radarLayers[radarIndex].addTo(map);
    document.getElementById("radarSlider").value = radarIndex;
  } else {
    stopRadar();
    controls.style.display = "none";
  }
}

function playRadar() {
  if (radarAnimationInterval) return;
  radarAnimationInterval = setInterval(() => {
    radarLayers[radarIndex].remove();
    radarIndex = (radarIndex + 1) % radarLayers.length;
    radarLayers[radarIndex].addTo(map);
    document.getElementById("radarSlider").value = radarIndex;
  }, 700);
  radarPlaying = true;
}

function stopRadar() {
  if (radarAnimationInterval) {
    clearInterval(radarAnimationInterval);
    radarAnimationInterval = null;
  }
  radarLayers.forEach(layer => map.removeLayer(layer));
  radarPlaying = false;
}

function sliderChangeRadar(value) {
  if (radarPlaying) {
    stopRadar();
  }
  radarLayers.forEach(layer => map.removeLayer(layer));
  radarIndex = parseInt(value);
  radarLayers[radarIndex].addTo(map);
}



let radarLayers = [];
let radarTimes = [];
let radarIndex = 0;
let radarAnimationInterval = null;
let radarPlaying = false;

async )
      }));
      radarLayers = radarTimes.map(f =>
        L.tileLayer(`${host}${f.path}/256/{z}/{x}/{y}/2/1_1.png`, {
          opacity: 0.6,
          zIndex: 1000,
          attribution: '&copy; <a href="https://www.rainviewer.com">RainViewer</a>'
        })
      );
      document.getElementById("radarSlider").max = radarLayers.length - 1;
    } catch (error) {
      console.error('Errore nel caricamento dei frame radar:', error);
      return;
    }
  }

  if (!radarPlaying && controls.style.display === "none") {
    controls.style.display = "block";
    radarIndex = 0;
    radarLayers[radarIndex].addTo(map);
    updateRadarTimeLabel(radarIndex);
    document.getElementById("radarSlider").value = radarIndex;
  } else {
    stopRadar();
    controls.style.display = "none";
  }
}

function playRadar() {
  if (radarAnimationInterval) return;
  radarAnimationInterval = setInterval(() => {
    radarLayers[radarIndex].remove();
    radarIndex = (radarIndex + 1) % radarLayers.length;
    radarLayers[radarIndex].addTo(map);
    document.getElementById("radarSlider").value = radarIndex;
    updateRadarTimeLabel(radarIndex);
  }, 700);
  radarPlaying = true;
}

function stopRadar() {
  if (radarAnimationInterval) {
    clearInterval(radarAnimationInterval);
    radarAnimationInterval = null;
  }
  radarLayers.forEach(layer => map.removeLayer(layer));
  radarPlaying = false;
}

function sliderChangeRadar(value) {
  if (radarPlaying) {
    stopRadar();
  }
  radarLayers.forEach(layer => map.removeLayer(layer));
  radarIndex = parseInt(value);
  radarLayers[radarIndex].addTo(map);
  updateRadarTimeLabel(radarIndex);
}

function updateRadarTimeLabel(index) {
  const label = document.getElementById("radar-time-label");
  if (label && radarTimes[index]) {
    label.textContent = `Orario radar: ${radarTimes[index].time}`;
  }
}



let radarLayer = null;
let radarTimes = [];
let radarLayers = [];
let radarIndex = 0;
let radarTimer = null;

async function toggleRadar() {
  const radarControls = document.getElementById("radar-controls");

  if (!radarLayer) {
    try {
      const res = await fetch('https://api.rainviewer.com/public/weather-maps.json');
      const data = await res.json();
      const host = data.host;

      radarTimes = data.radar.past.map(f => ({
        path: f.path,
        time: new Date(f.time * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }));

      radarLayers = radarTimes.map(f =>
        L.tileLayer(`${host}${f.path}/256/{z}/{x}/{y}/2/1_1.png`, {
          opacity: 0.6,
          zIndex: 1000,
          attribution: '&copy; <a href="https://www.rainviewer.com">RainViewer</a>'
        })
      );

      document.getElementById("radarSlider").max = radarLayers.length - 1;

    } catch (error) {
      console.error("Errore nel caricamento del radar:", error);
      return;
    }
  }

  radarControls.style.display = radarControls.style.display === "none" ? "block" : "none";

  if (radarControls.style.display === "block") {
    if (radarLayers[radarIndex]) radarLayers[radarIndex].addTo(map);
    sliderChangeRadar(radarIndex);
  } else {
    if (radarLayers[radarIndex]) radarLayers[radarIndex].remove();
    stopRadar();
  }
}

function sliderChangeRadar(index) {
  radarIndex = parseInt(index);
  radarLayers.forEach(layer => layer.remove());
  radarLayers[radarIndex].addTo(map);
  document.getElementById("radar-time-label").textContent = radarTimes[radarIndex].time;
}

function playRadar() {
  stopRadar();
  radarTimer = setInterval(() => {
    radarIndex = (radarIndex + 1) % radarLayers.length;
    document.getElementById("radarSlider").value = radarIndex;
    sliderChangeRadar(radarIndex);
  }, 800);
}

function stopRadar() {
  if (radarTimer) clearInterval(radarTimer);
  radarTimer = null;
}
