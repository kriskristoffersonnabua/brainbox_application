import Config from 'react-native-config';

export const signupUser = body => {
  return fetch(`${Config.API}/api/user`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(body),
  })
    .then(response => response.json())
    .then(response => {
      if (response) {
        return {
          userId: response.id,
          authToken: response.token,
        };
      }
    });
};

export const loginUser = body => {
  return fetch(`${Config.API}/auth/signin`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(body),
  })
    .then(response => {
      if(response.status != 401){
        return response.json();
      }
      else if (response.status == 401){
        return {
          error: "Incorrect email/password."
        }
      }
    })
    .then(response => {
      if (response.token && response.id) {
        return {
          userId: response.id,
          authToken: response.token,
        };
      } else {
        return {
          error: response.error,
        };
      }
    });
};
