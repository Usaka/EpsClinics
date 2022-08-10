const url = 'http://animalgeek.sytes.net';
const port = 11005;

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

const LoginUser = (username, password) => {
  const urlFetch = `${url}:${port}/users?user=${username}&pass=${password}`;
  const configFetch = { ...config, method: 'GET' };

  return fetch(urlFetch, configFetch)
    .then((result) => {
      if (!result) {
        return undefined;
      }

      return result.json();
    }).then((userData) => {
      if (!userData) {
        return undefined;
      }

      return userData[0];
    }).catch((err) => {
      fetch(`${url}:${port}/err`, {
        ...configFetch,
        method: 'POST',
        body: JSON.stringify({
          err,
          url: urlFetch,
          config: configFetch,
        }),
      });

      return undefined;
    });
};

const CreateUser = (
  id,
  user,
  name,
  pass,
) => {
  const urlFetch = `${url}:${port}/users`;
  const configFetch = {
    ...config,
    method: 'POST',
    body: JSON.stringify({
      id,
      user,
      name,
      pass,
    }),
  };

  return fetch(urlFetch, configFetch)
    .then((result) => {
      if (!result) {
        return undefined;
      }

      return result.json();
    }).then((userData) => {
      if (!userData) {
        return undefined;
      }

      return userData.length > 0;
    }).catch(() => undefined);
};

export {
  LoginUser,
  CreateUser,
};
