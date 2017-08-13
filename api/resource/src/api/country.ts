module.exports = (app, db) => {
  app.get('/country',function(req, res, next){
    const Country = db.models.Country;
    Country.findAll({
      order: [
        ['id', 'ASC']
      ]
    }).then(countries => {
      res.status(200).json(countries);
    });
  });

  app.get('/country/:id',function(req, res, next){
    const countryId = req.params.id;
    const Country = db.models.Country;
    Country.findById(countryId).then(country => {
      res.status(200).json(country);
    });
  });

};