const express = require('express');
const path = require('path');

const app = express();

// Serve static SVG files from the "svgs" folder
app.use('/svgs', express.static(path.join(__dirname, 'svgs')));

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
