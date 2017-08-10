import axios from 'axios';
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLFloat
} from 'graphql';
import * as lodash from 'lodash';

var CityType = new GraphQLObjectType({
  name: 'City',
  fields: {
    id: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    latitude: {
      type: GraphQLFloat
    },
    longitude: {
      type: GraphQLFloat
    }
  }
});

var RegionType = new GraphQLObjectType({
  name: 'Region',
  fields: {
    id: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    code: {
      type: GraphQLString
    }
  }
});

// Define the Country type
var CountryType = new GraphQLObjectType({
  name: 'Country',
  fields: {
    id: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    code: {
      type: GraphQLString
    },
    region: {
      type: new GraphQLList(RegionType),
      description: 'List of regions within the country.',
      args: {
        code: {
          type: GraphQLString,
          description: 'Optional region code.'
        },
        name: {
          type: GraphQLString,
          description: 'Optional name of a region (example: \'New\' to find \'New York\').'
        }
      },
      resolve: function (_, args) {
        return axios.get(process.env.API_URL + '/resource/country/' + _.id + '/region')
          .then(response => {
            var data = response.data;
            if (args.code && args.name)
              return lodash.filter(data, (item: any) => {
                return item.code.toLowerCase().indexOf(args.code.toLowerCase()) > -1 &&
                  item.name.toLowerCase().indexOf(args.name.toLowerCase()) > -1;
              });
            if (args.code)
              return lodash.filter(data, (item: any) => {
                return item.code.toLowerCase().indexOf(args.code.toLowerCase()) > -1;
              });
            if (args.name)
              return lodash.filter(data, (item: any) => {
                return item.name.toLowerCase().indexOf(args.name.toLowerCase()) > -1;
              });

            return data;
          });
      }
    },
    city: {
      type: new GraphQLList(CityType),
      description: 'List of cities within the country.',
      args: {
        name: {
          type: GraphQLString,
          description: 'Optional name of a city (example: \'New\' to find \'New York City\').'
        }
      },
      resolve: function (_, args) {
        return axios.get(process.env.API_URL + '/resource/country/' + _.id + '/city')
          .then(response => {
            var data = response.data;
            if (args.name)
              return lodash.filter(data, (item: any) => {
                return item.name.toLowerCase().indexOf(args.name.toLowerCase()) > -1;
              });

            return data;
          });
      }
    }
  }
});

// Define the Query type
var QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    country: {
      type: new GraphQLList(CountryType),
      description: 'Get a list of all countries or any specific countries.',
      args: {
        id: {
          type: GraphQLInt,
          description: 'Optional ID of a country.'
        },
        code: {
          type: GraphQLString,
          description: 'Optional code of a country (example: \'us\' is for United States of America).'
        },
        name: {
          type: GraphQLString,
          description: 'Optional name of a country (example: \'United\' to find United States of America).'
        }
      },
      resolve: function (_, args) {
        return axios.get(process.env.API_URL + '/resource/country')
          .then(response => {
            var data = response.data;
            if (args.id)
              return lodash.filter(data, ['id', args.id]);
            if (args.code && args.name)
              return lodash.filter(data, (item: any) => {
                return item.code.toLowerCase().indexOf(args.code.toLowerCase()) > -1 &&
                  item.name.toLowerCase().indexOf(args.name.toLowerCase()) > -1;
              });
            if (args.code)
              return lodash.filter(data, (item: any) => {
                return item.code.toLowerCase().indexOf(args.code.toLowerCase()) > -1;
              });
            if (args.name)
              return lodash.filter(data, (item: any) => {
                return item.name.toLowerCase().indexOf(args.name.toLowerCase()) > -1;
              });

            return data;
          });
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: QueryType
});