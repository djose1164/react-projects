import useDataFecthing from "../../hooks/useDataFetching";
import Lane from "../../components/Lane/Lane";
import "./Board.css";
import { useEffect, useState } from "react";

function onDragStart(e, id) {
  e.dataTransfer.setData("id", id);
}

function onDragOver(e) {
  e.preventDefault();
}

export default function Board() {
  const [loading, error, data] = useDataFecthing(
    "https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/tasks"
  );
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, [data]);

  const lanes = [
    { id: 1, title: "To Do" },
    { id: 2, title: "In Progress" },
    { id: 3, title: "Review" },
    { id: 4, title: "Done" },
  ];

  function onDrop(e, laneId) {
    const id = e.dataTransfer.getData("id");
    console.log("id:",id)

    const updatedTasks = tasks.filter((task) => {
      console.log("id: "+id+" == "+"task.id: "+task.id.toString())
      if (task.id.toString() == id)
        task.lane = laneId;
      return task;
    });

    setTasks(updatedTasks);
  }

  return (
    <div className="Board-container">
      {lanes.map((lane) => (
        <Lane
          key={lane.id}
          laneId={lane.id}
          title={lane.title}
          loading={loading}
          error={error}
          tasks={tasks.filter((task) => task.lane == lane.id)}
          onDragStart={onDragStart}
          onDragOver={onDragOver}
          onDrop={onDrop}
        />
      ))}
    </div>
  );
}
