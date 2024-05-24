const initialTodos = [
  { _id: 1, description: "Learn JS", isComplete: true, dueDate: "2024-05-24" },
  { _id: 2, description: "Learn HTML", isComplete: true, dueDate: "2024-05-25" },
  { _id: 3, description: "Learn CSS", isComplete: true, dueDate: "2024-05-26" },
  { _id: 4, description: "Build an HTML/CSS/JS mini-project", isComplete: true, dueDate: "2024-05-27" },
  { _id: 5, description: "Learn the command line", isComplete: true, dueDate: "2024-05-28" },
  { _id: 6, description: "Learn Git", isComplete: true, dueDate: "2024-05-29" },
  { _id: 7, description: "Learn Node", isComplete: true, dueDate: "2024-05-30" },
  { _id: 8, description: "Learn React", isComplete: false, dueDate: "2024-05-31" },
  { _id: 9, description: "Build a Node/CLI mini-project", isComplete: false, dueDate: "2024-06-01" },
  { _id: 10, description: "Build a React mini-project", isComplete: false, dueDate: "2024-06-02" },
  { _id: 11, description: "Learn Next", isComplete: false, dueDate: "2024-06-03" },
  { _id: 12, description: "Onboard onto a full project", isComplete: false, dueDate: "2024-06-04" },
  { _id: 13, description: "Learn Express", isComplete: false, dueDate: "2024-06-05" },
  { _id: 14, description: "Learn MongoDB", isComplete: false, dueDate: "2024-06-06" },
];

export async function getAllTodos() {
  return initialTodos;
}