import dotenv from "dotenv";
import mongoose from "mongoose";
import { Todo } from "./schema.js";

const todos = [
  {
    _id: "000000000000000000000000",
    description: "Learn JS",
    isComplete: true,
    dueDate: "2024-05-24",
  },
  {
    _id: "000000000000000000000001",
    description: "Learn HTML",
    isComplete: true,
    dueDate: "2024-05-25",
  },
  {
    _id: "000000000000000000000002",
    description: "Learn CSS",
    isComplete: true,
    dueDate: "2024-05-26",
  },
  {
    _id: "000000000000000000000003",
    description: "Build an HTML/CSS/JS mini-project",
    isComplete: true,
    dueDate: "2024-05-27",
  },
  {
    _id: "000000000000000000000004",
    description: "Learn the command line",
    isComplete: true,
    dueDate: "2024-05-28",
  },
  {
    _id: "000000000000000000000005",
    description: "Learn Git",
    isComplete: true,
    dueDate: "2024-05-29",
  },
  {
    _id: "000000000000000000000006",
    description: "Learn Node",
    isComplete: true,
    dueDate: "2024-05-30",
  },
  {
    _id: "000000000000000000000007",
    description: "Learn React",
    isComplete: false,
    dueDate: "2024-05-31",
  },
  {
    _id: "000000000000000000000008",
    description: "Build a Node/CLI mini-project",
    isComplete: false,
    dueDate: "2024-06-01",
  },
  {
    _id: "000000000000000000000009",
    description: "Build a React mini-project",
    isComplete: false,
    dueDate: "2024-06-02",
  },
  {
    _id: "000000000000000000000010",
    description: "Learn Next",
    isComplete: false,
    dueDate: "2024-06-03",
  },
  {
    _id: "000000000000000000000011",
    description: "Onboard onto a full project",
    isComplete: false,
    dueDate: "2024-06-04",
  },
  {
    _id: "000000000000000000000012",
    description: "Learn Express",
    isComplete: false,
    dueDate: "2024-06-05",
  },
  {
    _id: "000000000000000000000013",
    description: "Learn MongoDB",
    isComplete: false,
    dueDate: "2024-06-06",
  },
];

dotenv.config();
await mongoose.connect(process.env.DB_URL);
console.log(`Connected to MongoDB at ${process.env.DB_URL}`);

try {
  await Todo.deleteMany({});
  await Todo.insertMany(todos);
  console.log("Database initialized successfully");
} finally {
  await mongoose.disconnect();
  console.log("Disconnected from MongoDB");
}
