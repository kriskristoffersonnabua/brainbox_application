import Config from 'react-native-config';

export const signupUser = body => {
  return fetch(`${Config.API}/api/user`,{
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(body),
  })
    .then(response => response.json())
    .then(response => {
      if (response && response.token) {
        const newToken = response.token;
        return newToken;
      }
    });
};
