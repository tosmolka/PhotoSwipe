const express = require('express');
const app = express();
const PORT = 3000;

// http://localhost:3000/umd/demo.html
app.use(express.static('../dist', {
  setHeaders: (res) => { res.set('Content-Security-Policy-Report-Only', "require-trusted-types-for 'script'"); }
}));

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
