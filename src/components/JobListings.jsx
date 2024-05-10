import {  useState, useEffect } from 'react';
import JobListing from './JobListing'

const JobListings = ({ isHome = false }) => {

  const [jobs, setJobs] = useState( [] );
  const [isLoading, setIsLoading] = useState(true);

  // useEffect to fetch data from mock backend
  useEffect( () => {
    const fetchJobs = async () => {
      try {

        const res = await fetch('http://localhost:3001/jobs')
        let data = await res.json();
        data = isHome ? data.slice(0, 3) : data
        setJobs(data);

      } catch (error) {
        console.log("Error fetching data...",error);
      }finally {
        setIsLoading(false);
      }
    }

    // call the fetchJobs function
    fetchJobs();
  }, [])

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          { isHome ? "Recent Jobs" : "Browse Jobs" }
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        { isLoading ? "Loading Jobs..." : 
          <>
            {jobs.map((job)=>(
              <JobListing key={job.id} job={job} />
            ))}
          </>
        }
        </div>
      </div>
    </section>
  )
}

export default JobListings