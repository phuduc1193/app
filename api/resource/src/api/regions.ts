module.exports = (app, options) => {

  app.get('/resource/region', (req, res, next) => {
    options.repository.getRegions().then((regions) => {
      res.status(200).send(regions);
    })
    .catch(next);
  });

  app.get('/resource/region/:id(\\d+)', (req, res, next) => {

    let id = req.params.id;

    options.repository.getRegionByID(id).then((region) => {
      res.status(200).send(region);
    })
    .catch(next);
  });

  app.get('/resource/country/:id(\\d+)/region', (req, res, next) => {

    let countryID = req.params.id;

    if (!countryID) {
      throw new Error("When searching for regions within an country, the id of that country should be specified.");
    }
    
    if (countryID){
      options.repository.getRegionsByCountryID(countryID).then((regions) => {

        if(!regions) { 
          res.status(404).send('Region not found.');
        } else {
          res.status(200).send(regions);
        }

      })
      .catch(next);
    }

  });

  app.get('/resource/region/search', (req, res, next) => {

    let name = req.query.name;
    if (!name) {
      throw new Error("When searching for a region, the name must be specified, e.g: '/search?name=Vietnam'.");
    }

    if (name) {
      options.repository.getRegionsByName(name).then((regions) => {

        if(!regions) { 
          res.status(404).send('Region not found.');
        } else {
          res.status(200).send(regions);
        }

      })
      .catch(next);
    }

  });

};