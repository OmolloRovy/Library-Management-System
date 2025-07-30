const express = require('express');
const app = express();

// other middlewares and routes...

app.get('/', (req, res) => {
  res.send('API is running');
});

// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
