import { connect } from "mongoose";

const dbConnection = async () => {
  try {
    await connect(
      "mongodb+srv://hossam-heroe:39hQwXVJ6Nhdw7Zn@cluster0.c22k1.mongodb.net/"
    );
    console.log("connected to db");
  } catch (error) {
    console.error("error connecting to db", error.message);
    process.exit(1);
  }
};

export default { dbConnection, mongose };
