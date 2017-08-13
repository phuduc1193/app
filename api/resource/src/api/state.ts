module.exports = (app, db) => {
  app.get('/state',function(req, res, next){
    const State = db.models.State;
    State.findAll({
      order: [
        ['CountryId', 'ASC'],
        ['id', 'ASC']
      ]
    }).then(states => {
      res.status(200).json(states);
    });
  });

  app.get('/country/:countryId/state',function(req, res, next){
    const countryId = req.params.countryId;
    const State = db.models.State;
    State.findAll({
      where: { CountryId: countryId },
      order: [
        ['id', 'ASC']
      ]
    }).then(states => {
      res.status(200).json(states);
    });
  });

  app.get('state/:id',function(req, res, next){
    const id = req.params.id;
    const State = db.models.State;
    State.findById(id).then(state => {
      res.status(200).json(state);
    })
  });

}

