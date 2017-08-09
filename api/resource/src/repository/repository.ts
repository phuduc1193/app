const mysql = require('mysql');

class Repository {
  private connection;
  constructor(connection) {
    this.connection = connection
  }

  getCountries() {
    return new Promise((resolve, reject) => {

      this.connection.query('SELECT * FROM countries', (err, results) => {
        if(err) {
          return reject(new Error("An error occured getting the countries: " + err));
        }

        resolve(results);

      });

    });
  }

  getCountryByID(id) {
    return new Promise((resolve, reject) => {

      this.connection.query('SELECT * FROM countries WHERE id = ?', [id], (err, results) => {

        if(err) {
          return reject(new Error("An error occured getting the country by id: " + err));
        }

        if(results.length === 0) {
          resolve(undefined);
        } else {
          resolve(results);
        }

      });

    });
  }

  getCountriesByCode(code) {
    return new Promise((resolve, reject) => {

      this.connection.query('SELECT * FROM countries WHERE code LIKE ?', ['%' + code + '%'], (err, results) => {

        if(err) {
          return reject(new Error("An error occured getting the countries by code: " + err));
        }

        if(results.length === 0) {
          resolve(undefined);
        } else {
          resolve(results);
        }

      });

    });
  }

  getCountriesByName(name) {
    return new Promise((resolve, reject) => {

      this.connection.query('SELECT * FROM countries WHERE name LIKE ?', ['%' + name + '%'], (err, results) => {

        if(err) {
          return reject(new Error("An error occured getting the countries by name: " + err));
        }

        if(results.length === 0) {
          resolve(undefined);
        } else {
          resolve(results);
        }

      });

    });
  }

  getRegions() {
    return new Promise((resolve, reject) => {

      this.connection.query('SELECT * FROM regions', (err, results) => {

        if(err) {
          return reject(new Error("An error occured getting the regions: " + err));
        }

        resolve((results || []).map((results) => {
          return results;
        }));

      });

    });
  }

  getRegionByID(id) {
    return new Promise((resolve, reject) => {

      this.connection.query('SELECT * FROM regions WHERE id = ?', [id], (err, results) => {

        if(err) {
          return reject(new Error("An error occured getting the region by id: " + err));
        }

        if(results.length === 0) {
          resolve(undefined);
        } else {
          resolve(results);
        }

      });

    });
  }

  getRegionsByName(name) {
    return new Promise((resolve, reject) => {

      this.connection.query('SELECT * FROM regions WHERE name LIKE ?', ['%' + name + '%'], (err, results) => {

        if(err) {
          return reject(new Error("An error occured getting the regions by name: " + err));
        }

        if(results.length === 0) {
          resolve(undefined);
        } else {
          resolve(results);
        }

      });

    });
  }

  getRegionsByCountryID(countryID) {
    return new Promise((resolve, reject) => {

      this.connection.query('SELECT * FROM regions WHERE country_id = ?', [countryID], (err, results) => {
        if(err) {
          return reject(new Error("An error occured getting the regions by country: " + err));
        }

        resolve(results);

      });

    });
  }

  getCities(pageSize, pageNumber) {
    return new Promise((resolve, reject) => {

      this.connection.query('SELECT * FROM cities LIMIT ?, ?', [(pageNumber - 1) * pageSize, pageNumber * pageSize ],  (err, results) => {

        if(err) {
          return reject(new Error("An error occured getting the cities: " + err));
        }

        resolve((results || []).map((results) => {
          return results;
        }));

      });

    });
  }

  getCityByID(id) {
    return new Promise((resolve, reject) => {

      this.connection.query('SELECT * FROM cities WHERE id = ?', [id], (err, results) => {

        if(err) {
          return reject(new Error("An error occured getting the city by id: " + err));
        }

        if(results.length === 0) {
          resolve(undefined);
        } else {
          resolve(results);
        }

      });

    });
  }

  getCitiesByName(name) {
    return new Promise((resolve, reject) => {

      this.connection.query('SELECT * FROM cities WHERE name LIKE ?', ['%' + name + '%'], (err, results) => {

        if(err) {
          return reject(new Error("An error occured getting the cities by name: " + err));
        }

        if(results.length === 0) {
          resolve(undefined);
        } else {
          resolve(results);
        }

      });

    });
  }

  getCitiesByCountryID(countryID) {
    return new Promise((resolve, reject) => {

      this.connection.query('SELECT * FROM cities WHERE country_id = ?', [countryID], (err, results) => {
        if(err) {
          return reject(new Error("An error occured getting the cities by country: " + err));
        }

        resolve(results);

      });

    });
  }

  getCitiesByRegionID(regionID) {
    return new Promise((resolve, reject) => {

      this.connection.query('SELECT * FROM cities WHERE region_id = ?', [regionID], (err, results) => {
        if(err) {
          return reject(new Error("An error occured getting the cities by country: " + err));
        }

        resolve(results);

      });

    });
  }

  getPhoneTypes() {
    return new Promise((resolve, reject) => {

      this.connection.query('SELECT * FROM phone_types', (err, results) => {
        if(err) {
          return reject(new Error("An error occured getting the phone types: " + err));
        }

        resolve((results || []).map((phoneType) => {
          return phoneType;
        }));

      });

    });
  }

  getGenders() {
    return new Promise((resolve, reject) => {

      this.connection.query('SELECT * FROM genders', (err, results) => {
        if(err) {
          return reject(new Error("An error occured getting the genders: " + err));
        }

        resolve((results || []).map((gender) => {
          return gender;
        }));

      });

    });
  }

  getRelationshipStatus() {
    return new Promise((resolve, reject) => {

      this.connection.query('SELECT * FROM relationship_status', (err, results) => {
        if(err) {
          return reject(new Error("An error occured getting the relationship status: " + err));
        }

        resolve((results || []).map((status) => {
          return status;
        }));

      });

    });
  }

  disconnect() {
    this.connection.end();
  }
}

module.exports.connect = (connectionSettings) => {  
  return new Promise((resolve, reject) => {
    if(!connectionSettings.host) throw new Error("A host must be specified.");
    if(!connectionSettings.user) throw new Error("A user must be specified.");
    if(!connectionSettings.password) throw new Error("A password must be specified.");
    if(!connectionSettings.port) throw new Error("A port must be specified.");

    resolve(new Repository(mysql.createConnection(connectionSettings)));
  });
};