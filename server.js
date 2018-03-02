const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname + '/public'));

app.listen(PORT, () => console.log(`App running at ${PORT}`));
