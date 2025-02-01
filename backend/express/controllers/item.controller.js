import ItemModel from "../../models/ItemModel.js";

export const Item = (req, res) => {
  return res.send("Item Controller");
};

export const addItem = async (req, res) => {
  const { name, price, category, image, description } = req.body;
  if (!name || !price || !category)
    return res
      .status(400)
      .send({ success: false, message: "All fields are required" });

  try {
    const existingItem = await ItemModel.findOne({ name });
    if (existingItem)
      return res
        .status(400)
        .send({
          success: false,
          message: "Item with the same name already exists",
        });

    const item = new ItemModel({ name, price, category, image, description });
    await item.save();
    return res
      .status(201)
      .send({ success: true, message: "Item added successfully" });
  } catch (error) {
    console.error(error);
    return res.status(400).send({ success: false, message: error.message });
  }
};

export const updateItem = async (req, res) => {
  const { name, price, category, image, description } = req.body;

  try {
    const item = await ItemModel.findOneAndUpdate(
      { name },
      { name, price, category, image, description },
      { new: true }
    );
    if (!item)
      return res
        .status(400)
        .send({ success: false, message: "Item Not Found" });

    item.save();
    return res
      .status(200)
      .send({ success: true, message: "Item Updated Successfully" });
  } catch (error) {
    console.error(error);
    return res.status(400).send({ success: false, message: error.message });
  }
};

export const deleteItem = async (req, res) => {
  const { id } = req.body;

  if (!id)
    return res
      .status(400)
      .send({ success: false, message: "id is required" });

  try {
    // const item = await ItemModel.findByIdAndDelete(id)
    const item = await ItemModel.findByIdAndDelete(id)
    if (!item)
      return res
        .status(404)
        .send({ success: false, message: "Item Not Found" });

    return res
      .status(200)
      .send({ success: true, message: "Item Deleted Successfully" });
  } catch (error) {
    console.error(error);
    return res.status(400).send({ success: false, message: error.message });
  }
};

export const getAllItems = async (req, res) => {
  try {
    const items = await ItemModel.find({});
    return res.status(200).send({ success: true, items });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ success: false, message: "Server Error" });
  }
};
