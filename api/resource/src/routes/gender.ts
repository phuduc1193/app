module.exports = (app, db) => {
  app.get('/gender',function(req, res, next){
    const Gender = db.models.gender;
    Gender.findAll({
      order: [
        ['id', 'ASC']
      ]
    }).then(genders => {
      return res.status(200).json(genders);
    });
  });

  app.get('/gender/:id',function(req, res, next){
    const Gender = db.models.gender;
    Gender.findById(req.params.id).then(gender => {
      return res.status(200).json(gender);
    });
  });

};