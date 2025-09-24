const user = [
  {
    id: 1,
    FirstName: "Gopal",
    LastName: "Shukla",
    department: "BCA",
    username: "gopalshukla0018",
  },
];

export const getUserData = (_, res) => {
  return res.status(200).json({
    message: "data fetch successfully",
    user,
  });
};

export const createUserData = (req, res) => {
  const newUser = req.body;
  user.push(newUser);
  return res.status(200).json({
    message: "user Create Successfully",
    user: newUser,
  });
};

export const deleteUserData = (req, res) => {
  const { id } = req.body;
  const index = user.findIndex((u) => u.id === id);
  user.splice(index, 1);
  return res.status(200).json({
    message: "user delete Successfully",
    user,
  });
};
