const url = 'http://192.168.1.60';
const port = 3000;

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
    }).catch(() => undefined);
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
