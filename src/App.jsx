import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import HomeCards from "./components/HomeCards"
import JobListings from "./components/JobListings"
import ViewAllJobs from "./components/ViewAllJobs"

const App = () => {

  return (

    <>  
      <Navbar /> 
      {/* Hero */}
      <Hero title="Find your Dream Job" />
      {/* Developers and Employers */}
      <HomeCards /> 
      {/* Browse Jobs */}
      <JobListings /> 
      <ViewAllJobs /> 
    </>

  )
}

export default App