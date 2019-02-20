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
