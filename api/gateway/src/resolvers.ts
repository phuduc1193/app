import axios from 'axios';
import * as lodash from 'lodash';

const country = (_, args) => {
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
};

const state = (_, args) => {
  return axios.get(process.env.API_URL + '/resource/country/' + _.id + '/state')
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
};

const phoneType = (_, args) => {
  return axios.get(process.env.API_URL + '/resource/phonetype')
  .then(response => {
    var data = response.data;
    if (args.name)
      return lodash.filter(data, (item: any) => {
        return item.name.toLowerCase().indexOf(args.name.toLowerCase()) > -1;
      });

    return data;
  });
};

const gender = (_, args) => {
  return axios.get(process.env.API_URL + '/resource/gender')
  .then(response => {
    var data = response.data;
    if (args.name)
      return lodash.filter(data, (item: any) => {
        return item.name.toLowerCase().indexOf(args.name.toLowerCase()) > -1;
      });

    return data;
  });
};

const relationshipStatus = (_, args) => {
  return axios.get(process.env.API_URL + '/resource/relationshipstatus')
  .then(response => {
    var data = response.data;
    if (args.name)
      return lodash.filter(data, (item: any) => {
        return item.name.toLowerCase().indexOf(args.name.toLowerCase()) > -1;
      });

    return data;
  });
};

export default {
  country, state,
  phoneType, gender, relationshipStatus
}


