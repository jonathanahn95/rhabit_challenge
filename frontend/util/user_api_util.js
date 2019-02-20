export const fetchAllUsers = () => {
  return $.ajax({
    method: "GET",
    url: `api/users/`
  });
};

export const addUser = user => {
  return $.ajax({
    method: "POST",
    url: `api/users/`,
    data: { user }
  });
};

export const deleteUser = userId => {
  return $.ajax({
    method: "DELETE",
    url: `api/users/${userId}`
  });
};

export const fetchUser = userId => {
  return $.ajax({
    method: "GET",
    url: `api/users/${userId}`
  });
};
