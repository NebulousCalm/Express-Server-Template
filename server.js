/* =============================== */
/*        Required Modules         */
const express = require('express');
const ejs = require('ejs');

/* =============================== */
/*        Configuring Server        */
const app = express();
app.engine('html', ejs.renderFile);
app.use('/static/', express.static('./static'));

const server_settings={
    port: 3000,
    host: 'localhost'
}

/* =============================== */
require('./passport');
require('./routes/auth')(app);


app.listen(server_settings.port, () => {
    console.log(`Server started @ ${server_settings.host}:${server_settings.port}`);
})