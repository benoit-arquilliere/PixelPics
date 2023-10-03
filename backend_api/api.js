const express = require('express');
const apiApp = express();
const apiPort = 3000; // Port API

// Configuration des routes API ici

apiApp.listen(apiPort, () => {
  console.log(`Backend API en écoute sur le port ${apiPort}`);
});
