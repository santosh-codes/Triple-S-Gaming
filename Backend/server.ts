import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

const prisma = new PrismaClient();
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "http://127.0.0.1:3000"],
  })
);

//Simple CRUD

app.get("/getUsers", async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/getUsers/:id", async (req, res) => {
  try {
    const userID = req.params.id;
    const users = await prisma.user.findUnique({
      where: { id: userID },
    });
    if (users) {
      res.json(users);
    } else {
      res.status(404).json({ error: "User not Found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/createUser", async (req, res) => {
  const { id, name, email, role } = req.body;
  try {
    const users = await prisma.user.create({
      data: {
        id,
        name,
        email,
        role,
      },
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.put("/updateUser/:id", async (req, res) => {
  const userID = req.params.id;
  const { name, email, role } = req.body;
  try {
    const users = await prisma.user.update({
      where: { id: userID },
      data: {
        name: name,
        email: email,
        role: role,
      },
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.delete("/deleteUser/:id", async (req, res) => {
  try {
    const userID = req.params.id;
    const users = await prisma.user.delete({
      where: { id: userID },
    });
    if (users) {
      res.status(200).json(users);
    } else {
      res.status(500).json({ error: "Bad Request" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//Search API

app.get("/searchUserByName", async (req: Request, res: Response) => {
  try {
    const name: string = req.body.name as string;
    if (!name) {
      return res.status(404).json({ error: "Please Enter a Name" });
    }
    const users = await prisma.user.findMany({
      where: {
        name: name,
      },
    });
    if (!users.length) {
      return res.status(404).json({ error: "User Not Found" });
    }
    res.send(users);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Image Upload API
// const storageEngine = multer.diskStorage({
//   destination: "./images",
//   filename: function (
//     req: Request,
//     file: Express.Multer.File,
//     cb: (error: Error | null, filename: string) => void
//   ) {
//     cb(null, `${Date.now()}--${file.originalname}`);
//   },
// });

// const upload = multer({ storage: storageEngine, limits: { fileSize: 100000 } });

// API endpoint for uploading image
// app.post(
//   "/upload",
//   upload.single("image"),
//   async (req: Request, res: Response) => {
//     try {
//       if (!req.file) {
//         return res.status(400).json({ error: "No file uploaded" });
//       }
//       const { path, originalname } = req.file;
//       const savedImage = await prisma.user.create({
//         data: {

//         },
//       });
//       res.json(savedImage);
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({ error: "Failed to upload image" });
//     }
//   }
// );

//Server Listing
app.listen(5000, () => {
  console.log("server running on port 5000");
});

export default app;
