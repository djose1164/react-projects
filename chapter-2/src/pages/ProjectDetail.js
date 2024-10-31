import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProjectDetail({ username }) {
  const [loading, setLoading] = useState(false);
  const [project, setProject] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        `https://api.github.com/repos/${username}/${name}`
      );
      const result = await data.json();

      if (result) {
        setProject(result);
        setLoading(false);
      }
    }

    if (username && name) {
      fetchData();
    }
  }, [username, name]);

  return (
    <div className="Project-container">
      <h2>Project: {project.name}</h2>
      {loading ? <span>Loading...</span> : <div></div>}
    </div>
  );
}
