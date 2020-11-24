const express = require('express');
const cors = require('cors');
const citaRoute = require('./rutas/citasRoute');



const app = express();
app.use(cors());
app.use('/', express.static('public'));
app.use('/api/citarandom', citaRoute)


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Conectado al puerto " + 5000);
})