import Config from 'react-native-config';
import {AsyncStorage} from 'react-native';

export const insertLPRAndBookedSchedules = async (body, appointmentId) => {
  const authToken = await AsyncStorage.getItem('bboxAuthToken');
  return fetch(
    `${Config.API}/api/appointment/${appointmentId}?access_token=${authToken}`,
    {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      method: 'PUT',
      body: JSON.stringify(body),
    },
  )
    .then(response => response.json())
    .then(response => {
      if (response) {
        return response;
      }
    })
    .catch(error => console.log(error));
};

export const createGeneratedLPR = async body => {
  const authToken = await AsyncStorage.getItem('bboxAuthToken');
  return fetch(`${Config.API}/api/lpr?access_token=${authToken}`, {
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
        return response;
      }
    })
    .catch(error => console.log(error));
};

export const createBookedSchedule = async body => {
  const authToken = await AsyncStorage.getItem('bboxAuthToken');
  return fetch(`${Config.API}/api/bookedSchedule?access_token=${authToken}`, {
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
        return response;
      }
    })
    .catch(error => console.log(error));
};

export const createAppointment = async body => {
  const authToken = await AsyncStorage.getItem('bboxAuthToken');
  return fetch(`${Config.API}/api/appointment?access_token=${authToken}`, {
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
        return response;
      }
    })
    .catch(error => console.log(error));
};

export const getAllTutorsWithBookedTutorials = async date => {
  const authToken = await AsyncStorage.getItem('bboxAuthToken');
  return fetch(`${Config.API}/api/bookedSchedule?access_token=${authToken}`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    method: 'GET',
  })
    .then(response => response.json())
    .then(response => {
      if (response) {
        // return response;
      }
    })
    .catch(error => console.log(error));
};

export const searchByNameAndSubject = async searchString => {
  const authToken = await AsyncStorage.getItem('bboxAuthToken');
  return fetch(
    `${
      Config.API
    }/api/user/search?access_token=${authToken}&search=${searchString}`,
    {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      method: 'GET',
    },
  )
    .then(response => response.json())
    .then(response => {
      if (response) {
        return response;
      }
    })
    .catch(error => console.log(error));
};

export const getTutorSchedule = async () => {
  const authToken = await AsyncStorage.getItem('bboxAuthToken');
  return fetch(`${Config.API}/api/user/me?access_token=${authToken}`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    method: 'GET',
  })
    .then(response => response.json())
    .then(response => {
      if (response) {
        return response.schedule;
      }
    })
    .catch(error => console.log(error));
};

export const getTutorInformation = async tutorId => {
  const authToken = await AsyncStorage.getItem('bboxAuthToken');
  return fetch(`${Config.API}/api/user/${tutorId}?access_token=${authToken}`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    method: 'GET',
  })
    .then(response => response.json())
    .then(response => {
      if (response) {
        return {
          user: response,
        };
      }
    })
    .catch(error => console.log(error));
};

export const getLoginUserInformation = async () => {
  const authToken = await AsyncStorage.getItem('bboxAuthToken');
  if (authToken != undefined && authToken != null) {
    return fetch(`${Config.API}/api/user/me?access_token=${authToken}`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then(response => response.json())
      .then(response => {
        if (response) {
          return {
            user: response,
          };
        }
      })
      .catch(error => console.log(error));
  }
};

export const updateUserInformation = async body => {
  const authToken = await AsyncStorage.getItem('bboxAuthToken');
  const userId = await AsyncStorage.getItem('bboxUserId');
  return fetch(`${Config.API}/api/user/${userId}?access_token=${authToken}`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    method: 'PUT',
    body: JSON.stringify(body),
  })
    .then(response => response.json())
    .then(response => {
      if (response) {
        return {
          user: response,
        };
      }
    })
    .catch(error => console.log(error));
};

export const allTutors = async () => {
  const authToken = await AsyncStorage.getItem('bboxAuthToken');
  return fetch(`${Config.API}/api/user/tutors?access_token=${authToken}`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    method: 'GET',
  })
    .then(response => response.json())
    .then(response => {
      if (response) {
        return {
          tutors: response,
        };
      }
    })
    .catch(error => console.log(error));
};

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
    })
    .catch(error => console.log(error));
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
      if (response.status != 401) {
        return response.json();
      } else if (response.status == 401) {
        return {
          error: 'Incorrect email/password.',
        };
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
    })
    .catch(error => console.log(error));
};
