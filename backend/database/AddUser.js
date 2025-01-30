import UserModel from "../models/CutomerModel.js";

const AddUser = async (data) => {
  const { name, email, phone } = data;
  try {
    const newUser = new UserModel({
      name: name,
      email: email,
      phone: phone,
    });

    await newUser.save();
    console.log("User Created", newUser);
  } catch (error) {
    console.log(error);
  }
};

export { AddUser };
