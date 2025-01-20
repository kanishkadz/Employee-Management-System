localStorage.clear()

const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        taskNumber: 1,
        newTask: true,
        taskNumber: 2,
        completed: false,
        taskNumber: 3,
        failed: false,
        taskNumber: 4,
        taskTitle: "Complete Monthly Report",
        taskDescription: "Prepare and submit the monthly report for the finance team.",
        taskDate: "2025-01-20",
        category: "Finance",
      },
      {
        active: false,
        taskNumber: 1,
        newTask: false,
        taskNumber: 2,
        completed: true,
        taskNumber: 3,
        failed: false,
        taskNumber: 4,
        taskTitle: "Team Meeting",
        taskDescription: "Attend the weekly team meeting to discuss project updates.",
        taskDate: "2025-01-15",
        category: "Management",
      },
      {
        active: false,
        taskNumber: 1,
        newTask: false,
        taskNumber: 2,
        completed: false,
        taskNumber: 3,
        failed: true,
        taskNumber: 4,
        taskTitle: "Submit Timesheet",
        taskDescription: "Fill and submit timesheet for the week.",
        taskDate: "2025-01-10",
        category: "Administration",
      },
    ],
  },
  {
    id: 2,
    firstName: "Ishaan",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        taskNumber: 1,
        newTask: true,
        taskNumber: 2,
        completed: false,
        taskNumber: 3,
        failed: false,
        taskNumber: 4,
        taskTitle: "Client Presentation",
        taskDescription: "Prepare and deliver a presentation for the new client project.",
        taskDate: "2025-01-21",
        category: "Client Relations",
      },
      {
        active: true,
        taskNumber: 1,
        newTask: false,
        taskNumber: 2,
        completed: false,
        taskNumber: 3,
        failed: false,
        taskNumber: 4,
        taskTitle: "Data Analysis",
        taskDescription: "Analyze sales data for the previous quarter.",
        taskDate: "2025-01-22",
        category: "Analytics",
      },
      {
        active: false,
        taskNumber: 1,
        newTask: false,
        taskNumber: 2,
        completed: true,
        taskNumber: 3,
        failed: false,
        taskNumber: 4,
        taskTitle: "Submit Travel Expenses",
        taskDescription: "Submit travel expense reports for reimbursement.",
        taskDate: "2025-01-15",
        category: "Finance",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};

//add taskCounts
