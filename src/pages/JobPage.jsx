import { useLoaderData } from "react-router-dom"

// eslint-disable-next-line react-refresh/only-export-components
const JobPage = () => {

    const job = useLoaderData();

  return (
    <div>{job.title}</div>
  )
}

const jobLoader = async ( {params} ) => {
    const res = await fetch(`/api/jobs/${params.id}`);
    const data = res.json();
    return data;
};

export { JobPage as default, jobLoader}