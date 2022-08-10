const url = 'http://192.168.1.60';
const port = 3000;

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

const GetEps = () => {
  const urlFetch = `${url}:${port}/eps`;
  const configFetch = { ...config, method: 'GET' };

  return fetch(urlFetch, configFetch)
    .then((result) => {
      if (!result) {
        return undefined;
      }

      return result.json();
    }).then((epsList) => {
      if (!epsList) {
        return undefined;
      }

      return epsList;
    }).catch(() => undefined);
};

export {
  GetEps,
};
