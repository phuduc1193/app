module.exports = (app, db) => {
  app.get('/country',function(req, res, next){
    const Country = db.models.country;
    Country.findAll({
      order: [
        ['id', 'ASC']
      ]
    }).then(countries => {
      res.status(200).json(countries);
    });
  });

  app.get('/country/:id',function(req, res, next){
    const Country = db.models.country;
    Country.findById(req.params.id).then(country => {
      res.status(200).json(country);
    });
  });

};