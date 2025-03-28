import { useLoaderData, Link } from "react-router-dom";

type Job = {
  id: number;
  title: string;
  salary: string;
  location: string;
  workMode: string;
};

const Careers = () => {
  const jobs = useLoaderData() as Job[];
  return (
    <div className="careers">
      {jobs.map((job) => (
        <Link to={job.id.toString()} key={job.id}>
          <div className="desc">
            <p>{job.title}</p>
            <p className="bas">Based in {job.location}</p>
          </div>
          <div className="sal">
            <p>{job.salary}</p>
            <p className="bas">{job.workMode}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export const careerLoaders = async () => {
  const res = await fetch("http://localhost:4000/jobs");
  if (!res.ok) {
    throw Error("Could not fetch the data!");
  }
  return res.json();
};

export default Careers;
