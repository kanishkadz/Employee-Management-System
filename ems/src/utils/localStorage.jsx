const employees = [
    {
      id: 1,
      email: "employee1@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Complete Monthly Report",
          taskDescription: "Prepare and submit the monthly report for the finance team.",
          taskDate: "2025-01-20",
          category: "Finance"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Team Meeting",
          taskDescription: "Attend the weekly team meeting to discuss project updates.",
          taskDate: "2025-01-15",
          category: "Management"
        },
        {
          active: false,
          newTask: false,
          completed: false,
          failed: true,
          taskTitle: "Submit Timesheet",
          taskDescription: "Fill and submit timesheet for the week.",
          taskDate: "2025-01-10",
          category: "Administration"
        }
      ]
    },
    {
      id: 2,
      email: "employee2@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Client Presentation",
          taskDescription: "Prepare and deliver a presentation for the new client project.",
          taskDate: "2025-01-21",
          category: "Client Relations"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Data Analysis",
          taskDescription: "Analyze sales data for the previous quarter.",
          taskDate: "2025-01-22",
          category: "Analytics"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Submit Travel Expenses",
          taskDescription: "Submit travel expense reports for reimbursement.",
          taskDate: "2025-01-15",
          category: "Finance"
        }
      ]
    },
    {
      id: 3,
      email: "employee3@example.com",
      password: "123",
      tasks: [
        {
          active: false,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "System Maintenance",
          taskDescription: "Perform scheduled maintenance on the server.",
          taskDate: "2025-01-18",
          category: "IT"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Backup Data",
          taskDescription: "Ensure all critical data is backed up.",
          taskDate: "2025-01-14",
          category: "IT"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Inventory Check",
          taskDescription: "Perform an inventory check and restock supplies as needed.",
          taskDate: "2025-01-19",
          category: "Operations"
        }
      ]
    },
    {
      id: 4,
      email: "employee4@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Create Marketing Plan",
          taskDescription: "Draft a marketing plan for the upcoming product launch.",
          taskDate: "2025-01-23",
          category: "Marketing"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Email Campaign",
          taskDescription: "Set up and launch the email campaign for January.",
          taskDate: "2025-01-10",
          category: "Marketing"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Budget Review",
          taskDescription: "Review and finalize the department budget.",
          taskDate: "2025-01-20",
          category: "Finance"
        }
      ]
    },
    {
      id: 5,
      email: "employee5@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Update Website",
          taskDescription: "Update the company website with the latest news.",
          taskDate: "2025-01-22",
          category: "IT"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "User Feedback Analysis",
          taskDescription: "Analyze user feedback and prepare a report.",
          taskDate: "2025-01-13",
          category: "Customer Support"
        },
        {
          active: false,
          newTask: false,
          completed: false,
          failed: true,
          taskTitle: "Deliver Package",
          taskDescription: "Deliver the package to the warehouse.",
          taskDate: "2025-01-12",
          category: "Logistics"
        }
      ]
    }
  ];
  
  const admin = [
    {
      id: 1,
      email: "admin@example.com",
      password: "123"
    }
  ];

export const setLocalStorage = () =>{
    localStorage.setItem('employees', JSON.stringify(employees))
}

export const getLocalStorage = () =>{

}