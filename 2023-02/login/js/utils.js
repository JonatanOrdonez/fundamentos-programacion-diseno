const USERS_KEY = "users";
const USER_LOGGED_KEY = "userLogged";

export const getUsers = () => {
  const usersString = localStorage.getItem(USERS_KEY);
  let users = [];

  if (usersString) {
    users = JSON.parse(usersString);
  }

  return users;
};

export const register = (email, password) => {
  const users = getUsers();

  for (const user of users) {
    if (user.email === email) {
      return user;
    }
  }

  const user = {
    email: email,
    password: password,
  };

  users.push(user);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));

  return null;
};

export const login = (email, password) => {
  const users = getUsers();

  for (const user of users) {
    if (user.email === email && user.password === password) {
      localStorage.setItem(USER_LOGGED_KEY, email);
      return user;
    }
  }

  return null;
};

export const getUserLogged = () => {
  const userLogged = localStorage.getItem(USER_LOGGED_KEY);

  return userLogged;
};

export const logout = () => {
  localStorage.removeItem(USER_LOGGED_KEY);
};
