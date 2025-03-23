import { useLoaderData, useParams } from "react-router-dom";

type Job = {
  id: number;
  title: string;
  salary: string;
  location: string;
  workMode: string;
};

const CareersDesc = () => {
  const { id } = useParams<{ id: string }>();
  const job = useLoaderData() as Job;
  return (
    <div className="career-details">
      <h2>Career Details for {job.title}</h2>
      <p>Salary: {job.salary}</p>
      <p>Location: {job.location}</p>
      <p>Job Type:{job.workMode}</p>
    </div>
  );
};

export default CareersDesc;

export const careerDetailsLoader = async ({
  params,
}: {
  params: { id: string };
}) => {
  const { id } = params;
  const res = await fetch("http://localhost:4000/jobs" + id);
  return res.json();
};
