const url = 'http://192.168.1.60';
const port = 3000;

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

const GetHospitals = () => {
  const urlFetch = `${url}:${port}/hospitals`;
  const configFetch = { ...config, method: 'GET' };

  return fetch(urlFetch, configFetch)
    .then((result) => {
      if (!result) {
        return undefined;
      }

      return result.json();
    }).then((hospitals) => {
      if (!hospitals) {
        return undefined;
      }

      return hospitals;
    }).catch(() => undefined);
};

export {
  GetHospitals,
};
