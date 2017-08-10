module.exports = (app, options) => {

  app.get('/resource/country', (req, res, next) => {
    options.repository.getCountries().then((countries) => {
      res.status(200).send(countries);
    })
    .catch(next);
  });

  app.get('/resource/country/:id(\\d+)', (req, res, next) => {

    let id = req.params.id;

    options.repository.getCountryByID(id).then((country) => {
      res.status(200).send(country);
    })
    .catch(next);
  });

  app.get('/resource/country/search', (req, res, next) => {

    let code = req.query.code;
    let name = req.query.name;
    if (!code && !name) {
      throw new Error("When searching for a country, the code or name must be specified, e.g: '/search?code=US', '/search?name=America'.");
    }

    if (code){
      options.repository.getCountriesByCode(code).then((country) => {

        if(!country) { 
          res.status(404).send('Country not found.');
        } else {
          res.status(200).send(country);
        }

      })
      .catch(next);
    }

    if (name) {
      options.repository.getCountriesByName(name).then((country) => {

        if(!country) { 
          res.status(404).send('Country not found.');
        } else {
          res.status(200).send(country);
        }

      })
      .catch(next);
    }

  });

};