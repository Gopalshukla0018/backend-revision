let users = [
  { id: 1, name: "Gopal", email: "gopal@gmail.com" },
  { id: 2, name: "Rahul", email: "rahul@gmail.com" },
  { id: 3, name: "Sneha", email: "sneha@gmail.com" },
  { id: 4, name: "Ankit", email: "ankit@yahoo.com" },
  { id: 5, name: "Priya", email: "priya@hotmail.com" },
];

export const getUser = (req, res) => {
  try {
    if (!users) {
      return res.status(500).json({
        message: "internal server error",
      });
    }
    if (users.length === 0) {
      return res.status(200).json({
        message: "no user found",
      });
    }
    res.status(200).json({
      message: "users data fetched successfully",
      users,
    });
  } catch (error) {
    console.log("Error in getUser controller:", error);
    return res.status(500).json({
      message: "Failed to fetching user. Please try again later.",
    });
  }
};

export const createUser = (req, res) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      res.status(400).json({
        message: "all fields required",
      });
    }

    const newUsers = {
      id: users.length + 1,
      name,
      email,
    };
    users.push(newUsers);
    return res.status(200).json({
      message: "user created succesfully",
      users: newUsers,
    });
  } catch (error) {
    console.log("Error in createUser controller:", error); // Terminal par error dekhein
    return res.status(500).json({
      message: "Failed to create user. Please try again later.",
    });
  }
};

export const removeUser = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    users = users.filter((u) => u.id !== id);
    return res.status(200).json({
      message: "user deleted successfully",
      users,
    });
  } catch (error) {
    console.log("Error in removeUser controller:", error);
    return res.status(500).json({
      message: "Failed to remove  user. Please try again later.",
    });
  }
};

export const updateUser = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { name, email } = req.body;
    const user = users.find((u) => u.id === id);
    if (!user) {
      return res.status(404).json({
        message: "user not found",
      });
    }
    if (!name && !email) {
      return res
        .status(400)
        .json({ message: "Provide name or email to update" });
    }

    if (name) user.name = name;

    if (email) user.email = email;

    return res.status(200).json({
      message: "user updates succesfully",
      users,
    });
  } catch (error) {
    console.log("Error in updateUser controller:", error);
    return res.status(500).json({
      message: "Failed to update user. Please try again later.",
    });
  }
};
