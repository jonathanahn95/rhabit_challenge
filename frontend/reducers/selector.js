/// function to find user in the users arr
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

/// function to grab all users info
export const getAllUsers = users => {
  let userNames = [];
  for (let i = 0; i < users.length; i++) {
    userNames.push(users[i]);
    const result = getAllUsers(users[i].direct_reports);
    userNames = userNames.concat(result);
  }
  return userNames;
};

/// function to filter out the users info in the functions argument inside the users arr
export const getUsers = (users, userId) => {
  let userNames = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].id !== userId) {
      userNames.push(users[i]);
    }
    const result = getUsers(users[i].direct_reports, userId);
    userNames = userNames.concat(result);
  }
  return userNames;
};

/// function to grab the users subordinates info
export const getSubordinates = user => {
  let userNames = [];
  for (let i = 0; i < user.direct_reports.length; i++) {
    userNames.push(user.direct_reports[i].id);
    const result = getSubordinates(user.direct_reports[i]);
    userNames = userNames.concat(result);
  }
  return userNames;
};

/// will filter out the userSubs out of the users array
export const getFilteredUsers = (users, userSubs) => {
  let userNames = [];
  for (let i = 0; i < users.length; i++) {
    if (!userSubs.includes(users[i].id)) {
      userNames.push(users[i]);
    }
  }

  return userNames;
};
