module.exports = (app, db) => {
  app.get('/state',function(req, res, next){
    const State = db.models.state;
    State.findAll({
      order: [
        ['countryId', 'ASC'],
        ['id', 'ASC']
      ]
    }).then(states => {
      return res.status(200).json(states);
    });
  });

  app.get('/country/:countryId/state',function(req, res, next){
    const State = db.models.state;
    State.findAll({
      where: { countryId: req.params.countryId },
      order: [
        ['id', 'ASC']
      ]
    }).then(states => {
      return res.status(200).json(states);
    });
  });

  app.get('state/:id',function(req, res, next){
    const State = db.models.state;
    State.findById(req.params.id).then(state => {
      res.status(200).json(state);
    })
  });

}

