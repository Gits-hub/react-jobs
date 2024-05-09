import { Route, createBrowserRouter,  createRoutesFromElements, RouterProvider} from "react-router-dom"
import HomePage from "./pages/HomePage"
import MainLayout from "./layouts/MainLayout"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="/home" element={<HomePage />} />,
    </Route>
    // <Route path="/jobs" element={<JobListings />} />,
    // <Route path="/view-all-jobs" element={<ViewAllJobs />} />,
  )
)

const App = () => {

  return <RouterProvider router={router} />

}

export default App