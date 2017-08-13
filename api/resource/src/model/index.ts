import Sequelize from 'sequelize';
import * as fs from 'fs';
import * as path from 'path';
import seed from './seed';

class DbConnection {

  private _sequelize;

  constructor(connectionString) {
    this._sequelize = new Sequelize(connectionString);

    this._sequelize.authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');

      this._sequelize = setup(this._sequelize);
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);

      this.disconnect();
    });

  }

  sequelize() {
    return this._sequelize;
  }

  disconnect() {
    this._sequelize.close();
  }
}

const connect = (connectionString): any => {  
  return new Promise((resolve, reject) => {
    resolve(new DbConnection(connectionString));
  });
};

const setup = (sequelize) => {
  var db: any = {};
  fs.readdirSync(__dirname)
    .filter(function(file: string) {
      return (file.indexOf(".") !== 0) && (file !== 'index.js') && (file !== 'seed.js');
    })
    .forEach(function(file: string) {
      var model = sequelize.import(path.join(__dirname, file));
      db[model.name] = model;
    });

  Object.keys(db).forEach(function(modelName) {
    if ('associate' in db[modelName]) {
      db[modelName].associate(db);
    }
  });

  return seed(db);
};

export default connect;