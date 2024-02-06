require('./modals/index')()
const express = require('express');
const app = express();
const cors = require('cors')
const config = require('./core-services/config/config');
const mongoService = require('./core-services/db/mongodb/connection');
const requestMiddleware = require('./helpers/middlewares/requestMiddleware');
const homeRoutes = require('./src/modules/v1/home/index');
const weatherRoutes = require('./src/modules/v1/weather/index');
const geoRoutes = require('./src/modules/v1/geo/index');
const tourismRoutes = require('./src/modules/v1/tourism/index')
const populationRoutes = require('./src/modules/v1/population/index')
const employmentRoutes = require('./src/modules/v1/employment/index')
const healthRoutes = require('./src/modules/v1/health/index');
const responseHandler = require('./helpers/responseHandler');


//load models


//services
mongoService.connect();

app.use(cors())
// app.options('*', cors());
app.use(requestMiddleware);

app.use('/api/v1', homeRoutes);
app.use('/api/v1', weatherRoutes);
app.use('/api/v1', geoRoutes);
app.use('/api/v1', tourismRoutes);
app.use('/api/v1', populationRoutes);
app.use('/api/v1', employmentRoutes);
app.use('/api/v1', healthRoutes);

app.get('/healthcheck', (req, res) => {
    res.status(200).send("better life api running");
})

app.use(responseHandler.successHandler, responseHandler.notFoundError, responseHandler.errorHandler);


app.listen(config.port, () => {
    console.log(`app listening on port: ${config.port}`)
})