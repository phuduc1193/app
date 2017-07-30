'use strict';

var mysql = require('mysql');

class Repository {
  constructor(connection) {
    this.connection = connection
  }

  getCountries() {
    return new Promise((resolve, reject) => {

      this.connection.query('SELECT country_code, country_name FROM apps_countries', (err, results) => {
        if(err) {
          return reject(new Error("An error occured getting the countries: " + err));
        }

        resolve((results || []).map((country) => {
          return {
            name: country.country_name,
            code: country.country_code
          };
        }));

      });

    });
  }

  getCountryByCode(code) {
    return new Promise((resolve, reject) => {

      this.connection.query('SELECT country_code, country_name FROM apps_countries WHERE country_code = ?', [code], (err, results) => {

        if(err) {
          return reject(new Error("An error occured getting the country: " + err));
        }

        if(results.length === 0) {
          resolve(undefined);
        } else {
          resolve({
            name: results[0].country_name,
            code: results[0].country_code
          });
        }

      });

    });
  }

  getCountryByName(name) {
    return new Promise((resolve, reject) => {

      //  Fetch the customer.
      this.connection.query('SELECT country_code, country_name FROM apps_countries WHERE country_name LIKE ?', ['%' + name + '%'], (err, results) => {

        if(err) {
          return reject(new Error("An error occured getting the country: " + err));
        }

        if(results.length === 0) {
          resolve(undefined);
        } else {
          resolve({
            name: results[0].country_name,
            code: results[0].country_code
          });
        }

      });

    });
  }

  getPhoneTypes() {
    return new Promise((resolve, reject) => {

      this.connection.query('SELECT type FROM apps_phone_types', (err, results) => {
        if(err) {
          return reject(new Error("An error occured getting the phone types: " + err));
        }

        resolve((results || []).map((phoneType) => {
          return {
            name: phoneType.type
          };
        }));

      });

    });
  }

  getGenders() {
    return new Promise((resolve, reject) => {

      this.connection.query('SELECT gender FROM apps_genders', (err, results) => {
        if(err) {
          return reject(new Error("An error occured getting the genders: " + err));
        }

        resolve((results || []).map((gender) => {
          return {
            name: gender.gender
          };
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