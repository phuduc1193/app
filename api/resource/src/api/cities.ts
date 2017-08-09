module.exports = (app, options) => {

  app.get('/resource/city', (req, res, next) => {
    
    let pageSize = req.query.size;
    let pageNumber = req.query.page;

    if (pageSize <= 0 || pageNumber <= 0 || pageSize > 1000) {
      throw new Error("When searching for cities, the page number and size of the expected result should be greater than 0, page size should be less than 1000.");
    }

    if (!pageSize) {
      pageSize = 1000;
    }

    if (!pageNumber) {
      pageNumber = 1;
    }

    options.repository.getCities(pageSize, pageNumber).then((regions) => {
      res.status(200).send(regions);
    })
    .catch(next);
  });

  app.get('/resource/city/:id(\\d+)', (req, res, next) => {

    let id = req.params.id;

    options.repository.getCityByID(id).then((city) => {
      res.status(200).send(city);
    })
    .catch(next);
  });

  app.get('/resource/country/:id(\\d+)/city', (req, res, next) => {

    let countryID = req.params.id;

    if (!countryID) {
      throw new Error("When searching for cities within an country, the id of that country should be specified.");
    }
    
    if (countryID){
      options.repository.getCitiesByCountryID(countryID).then((cities) => {

        if(!cities) { 
          res.status(404).send('City not found.');
        } else {
          res.status(200).send(cities);
        }

      })
      .catch(next);
    }

  });

  app.get('/resource/region/:id(\\d+)/city', (req, res, next) => {

    let regionID = req.params.id;

    if (!regionID) {
      throw new Error("When searching for cities within an region, the id of that region should be specified.");
    }
    
    if (regionID){
      options.repository.getCitiesByRegionID(regionID).then((cities) => {

        if(!cities) { 
          res.status(404).send('City not found.');
        } else {
          res.status(200).send(cities);
        }

      })
      .catch(next);
    }

  });

  app.get('/resource/city/search', (req, res, next) => {

    let name = req.query.name;
    if (!name) {
      throw new Error("When searching for a city, the name must be specified, e.g: '/search?name=new york'.");
    }

    if (name) {
      options.repository.getCitiesByName(name).then((cities) => {

        if(!cities) { 
          res.status(404).send('Country not found.');
        } else {
          res.status(200).send(cities);
        }

      })
      .catch(next);
    }

  });

};