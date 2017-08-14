module.exports = (app, db) => {
  app.get('/phonetype',function(req, res, next){
    const PhoneType = db.models.phoneType;
    PhoneType.findAll({
      order: [
        ['id', 'ASC']
      ]
    }).then(phoneType => {
      return res.status(200).json(phoneType);
    });
  });

  app.get('/phonetype/:id',function(req, res, next){
    const PhoneType = db.models.phoneType;
    PhoneType.findById(req.params.id).then(phoneType => {
      return res.status(200).json(phoneType);
    });
  });

};