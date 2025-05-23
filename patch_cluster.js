document.addEventListener('DOMContentLoaded', () => {
  const waitForMap = () => {
    if (window.mymap && window.markersById) {
      try {
        const clusterGroup = L.markerClusterGroup({ chunkedLoading: true });
        // sposta tutti i marker esistenti nel cluster
        Object.values(window.markersById).forEach(marker => {
          if (window.mymap.hasLayer(marker)) {
            window.mymap.removeLayer(marker);
          }
          clusterGroup.addLayer(marker);
        });
        window.mymap.addLayer(clusterGroup);
        console.log('[ClusterPatch] MarkerCluster inizializzato con', Object.keys(window.markersById).length, 'marker');
      } catch (e) {
        console.error('[ClusterPatch] Errore', e);
      }
    } else {
      setTimeout(waitForMap, 150);
    }
  };
  waitForMap();
});