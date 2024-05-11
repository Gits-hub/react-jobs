import { Route, createBrowserRouter,  createRoutesFromElements, RouterProvider} from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import HomePage from "./pages/HomePage"
import JobsPage from "./pages/JobsPage"
import JobPage, { jobLoader } from "./pages/JobPage"
import NotFoundPage from "./pages/NotFoundPage"
import AddJobPage from "./pages/AddJobPage"

const App = () => {

  const addJob = (job) =>{
    console.log(job)
  }
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />,
        <Route path="/jobs" element={<JobsPage />} />,
        <Route path="/jobs/:id" element={<JobPage />} loader={jobLoader} />, //* A dynamic route with a React Data Loader function. 
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />}/>
        <Route path="*" element={<NotFoundPage />}/>
      </Route>
    )
  )

  return <RouterProvider router={router} />

}

export default App