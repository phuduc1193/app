module.exports = (app, options) => {

  app.get('resource/countries', (req, res, next) => {
    options.repository.getCountries().then((countries) => {
      res.status(200).send(countries.map((country) => { return {
          name: country.name,
          code: country.code
        };
      }));
    })
    .catch(next);
  });

  app.get('resource/country/search', (req, res, next) => {

    let code = req.query.code;
    let name = req.query.name;
    if (!code && !name) {
      throw new Error("When searching for a country, the code or name must be specified, e.g: '/search?code=VN', '/search?name=Vietnam'.");
    }

    if (code){
      options.repository.getCountryByCode(code).then((country) => {

        if(!country) { 
          res.status(404).send('Country not found.');
        } else {
          res.status(200).send({
            name: country.name,
            code: country.code
          });
        }

      })
      .catch(next);
    }

    if (name) {
      options.repository.getCountryByName(name).then((country) => {

        if(!country) { 
          res.status(404).send('Country not found.');
        } else {
          res.status(200).send({
            name: country.name,
            code: country.code
          });
        }

      })
      .catch(next);
    }
  });
};