export const findUser = (users, userId) => {
  if (users.length === 0) return [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === userId) {
      return users[i];
    }
    const result = findUser(users[i].direct_reports, userId);
    if (result.id) {
      return result;
    }
  }
  return [];
};

export const getAllUsers = users => {
  let userNames = [];
  for (let i = 0; i < users.length; i++) {
    userNames.push(users[i]);
    const result = getAllUsers(users[i].direct_reports);
    userNames = userNames.concat(result);
  }
  return userNames;
};
