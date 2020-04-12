import axios from 'axios';

const resources = {};

const makeRequestCreator = () => {
  let cancel;

  const token = process.env.REACT_APP_ACCESS_TOKEN;
      const config =  {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+token
    }
  }

  return async query => {
    if (cancel) {
      cancel.cancel();
    }

    cancel = axios.CancelToken.source();
    try {
      if (resources[query]) {
        return resources[query];
      }
      const res = await axios(query, config, { cancelToken: cancel.token });

      const result = res.data.results;
      resources[query] = result;

      return result;
    } catch (error) {
      if (axios.isCancel(error)) {
        // Logging error message
      } else {
        // Logging error message
      }
    }
  };
};

export const search = makeRequestCreator()