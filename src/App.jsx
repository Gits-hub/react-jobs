import { Route, createBrowserRouter,  createRoutesFromElements, RouterProvider} from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import HomePage from "./pages/HomePage"
import JobsPage from "./pages/JobsPage"
import JobPage, { jobLoader } from "./pages/JobPage"
import NotFoundPage from "./pages/NotFoundPage"
import AddJobPage from "./pages/AddJobPage"

const App = () => {

  //*Requests
  //*Post request to add job
  const addJob = async (job) =>{
    await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job)
    })

    return;
  }

  //*Delete request to delete job
  const deleteJob = async ( id ) => {
   await fetch(`/api/jobs/${id}`, {
      method: 'DELETE'
    })
    return;
  }
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />,
        <Route path="/jobs" element={<JobsPage />} />,

        <Route 
          path="/jobs/:id" 
          element={<JobPage deleteJob = { deleteJob } />} 
          loader={jobLoader} 
        />, //* A dynamic route with a React Data Loader function. 

        <Route 
          path="/add-job" 
          element={<AddJobPage addJobSubmit= { addJob } />}
        />

        <Route path="*" element={<NotFoundPage />}/>
      </Route>
    )
  )

  return <RouterProvider router={router} />

}

export default App