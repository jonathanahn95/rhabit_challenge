export const fetchAllUsers = () => {
  return $.ajax({
    method: "GET",
    url: `api/users/`
  });
};

export const addUser = user => {
  debugger;
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

export const updateUser = user => {
  return $.ajax({
    method: "PATCH",
    url: `api/users/${user.id}`,
    data: { user }
  });
};
