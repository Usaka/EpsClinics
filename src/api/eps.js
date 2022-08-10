const url = 'http://animalgeek.sytes.net';
const port = 11005;

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
