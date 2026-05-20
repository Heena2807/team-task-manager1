const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Team Task Manager API is running' });
});

app.get('/api/dashboard', (req, res) => {
  res.json({
    totalTasks: 10,
    completedTasks: 4,
    pendingTasks: 6,
    overdueTasks: 1
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
