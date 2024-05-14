import express from "express";
import cors from "cors";

const app = express();
import { createUserRouter } from "./routes/createUser_route";
import { deleteUserRouter } from "./routes/deleteUser_route";
import { updateUserRouter } from "./routes/updateUser_route";
import { getUsersRouter } from "./routes/getUsers_route";
import { getUsersByIdRouter } from "./routes/getUsersById_route";
import { searchUserByNameRouter } from "./routes/searchUserByName_route";

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "http://127.0.0.1:3000"],
  })
);

app.use("/createUser", createUserRouter);
app.use("/deleteUser", deleteUserRouter);
app.use("/updateUser", updateUserRouter);
app.use("/getUsers", getUsersRouter);
app.use("/getUsersByID", getUsersByIdRouter);
app.use("/searchUserByName", searchUserByNameRouter);

app.listen(5000, () => {
  console.log("Server is running on 5000");
});
