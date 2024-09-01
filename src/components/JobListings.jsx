import {  useState, useEffect } from 'react';
import JobListing from './JobListing'
import Spinner from './Spinner';

const JobListings = ({ isHome = false }) => {

  const [jobs, setJobs] = useState( [] );
  const [isLoading, setIsLoading] = useState(true);

  // useEffect to fetch data from mock backend
  useEffect( () => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs';
      try {

        const res = await fetch(apiUrl);
        let data = await res.json();
        setJobs(data);

      } catch (error) {
        console.log("Error fetching data...",error);
      }finally {
        setIsLoading(false);
      }
    }

    // call the fetchJobs function
    fetchJobs();
  }, [isHome])

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          { isHome ? "Recent Jobs" : "Browse Jobs" }
        </h2>  
        { isLoading ? <Spinner loading={isLoading} /> : 
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job)=>(
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        }
      </div>
    </section>
  )
}

export default JobListings