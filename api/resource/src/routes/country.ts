module.exports = (app, db) => {
  app.get('/country',function(req, res, next){
    const Country = db.models.country;
    if (req.query.name || req.query.code) {
      let name: string = req.query.name ? req.query.name : '';
      let code: string = req.query.code ? req.query.code : '';
      Country.findAll({
        where: {
          $and: [
            {name: {$iLike: '%'+ name +'%'}},
            {code: {$iLike: '%'+ code +'%'}}
          ]
        }
      }).then(countries => {
        return res.status(200).json(countries);
      });
    } else {
      Country.findAll({
        order: [
          ['id', 'ASC']
        ]
      }).then(countries => {
        return res.status(200).json(countries);
      });
    }
  });

  app.get('/country/:id',function(req, res, next){
    const Country = db.models.country;
    Country.findById(req.params.id).then(country => {
      return res.status(200).json(country);
    });
  });

};