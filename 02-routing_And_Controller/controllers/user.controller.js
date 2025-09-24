const user = {
  FirstName: "Gopal",
  LastName: "Shukla",
  department: "BCA",
  username: "gopalshukla0018",
};

export const getUserData = (req, res) => {
  return res.status(200).json({
    message: "data fetch successfully",
    user,
  });
};
