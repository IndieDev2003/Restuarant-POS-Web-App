import TableModel from "../../models/TableModel.js";

export const Table = (req, res) => {
    return res.send('Table Controller');
}

export const AddTable = async  (req, res) => {
    const { tableNumber, capacity, status,premium } = req.body;
    if (!tableNumber || !capacity || !status) return res.status(400).send({ success: false, message: "All fields are required" }) 
    try {
        const existingTable = await TableModel.findOne({ number: tableNumber })
        if (existingTable) return res.status(400).send({ success: false, message: "Table number already exists" })
        
        const table = new TableModel({ number: tableNumber, capacity: capacity, status: status,premium:premium });
        await table.save();
         return res.status(201).json({ success: true, message: "Table added successfully" });

    } catch (error) {
        console.error(error);
        return res.status(400).json({ success: false, message: error.message })
    }
}

export const ListTables = async (req, res) => {
    
    try {
        const tables = await TableModel.find();
        return res.status(200).json({ success: true, tables });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Server Error" });
    }
}

export const UpdateTableStatus = async (req, res) => {
    const { tableNumber, status } = req.body;
    if (!tableNumber ||!status) return res.status(400).send({ success: false, message: "Table number and status are required" }) 
    try {
        const table = await TableModel.findOneAndUpdate({ number: tableNumber }, { status: status }, { new: true });
        if (!table) return res.status(404).send({ success: false, message: "Table not found" })
        return res.status(200).json({ success: true, message: "Table status updated successfully", table });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Server Error" });
    }
}
 
export const DeleteTable = async (req, res) => { 
    const number = req.body;

    try {

        const table = await TableModel.findOneAndDelete({ number: number });
        
        if (!table) return res.status(400).send({ success: false, message: "Table not found" });

        return res.status(200).json({ success: true, message: "Table Deleted successfully" });
        
    } catch (error) {
        console.log(error.message);
        return res.status(500).send('Server Error');
    }
}