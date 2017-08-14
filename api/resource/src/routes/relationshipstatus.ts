module.exports = (app, db) => {
  app.get('/relationshipstatus',function(req, res, next){
    const Relationshipstatus = db.models.relationshipStatus;
    Relationshipstatus.findAll({
      order: [
        ['id', 'ASC']
      ]
    }).then(status => {
      res.status(200).json(status);
    });
  });

  app.get('/relationshipstatus/:id',function(req, res, next){
    const Relationshipstatus = db.models.relationshipstatus;
    Relationshipstatus.findById(req.params.id).then(status => {
      res.status(200).json(status);
    });
  });

};