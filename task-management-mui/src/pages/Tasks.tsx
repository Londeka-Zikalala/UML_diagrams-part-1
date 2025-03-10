import { useEffect, useState } from "react";
import { Container, Typography, List, ListItem, ListItemText } from "@mui/material";
import axios from "axios";
import { Task } from "../Types/Task";
import { User } from "../Types/User";

interface TasksProps {
  user: User;
}

const Tasks: React.FC<TasksProps> = ({ user }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get<Task[]>(`http://localhost:3011/${user.id}/tasks`);
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks");
      }
    };
    fetchTasks();
  }, [user]);

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Tasks</Typography>
      <List>
        {tasks.map((task) => (
          <ListItem key={task.id}>
            <ListItemText primary={task.title} secondary={task.description} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Tasks;
