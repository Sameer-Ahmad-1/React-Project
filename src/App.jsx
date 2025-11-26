import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, { jobLoader } from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';
import ResumePage from './pages/ResumePage';
import { addJob, deleteJob, updateJob } from './utils/jobs';

const App = () => {
  // Add New Job
  const addJobHandler = async (newJob) => {
    addJob(newJob);
  };

  // Delete Job
  const deleteJobHandler = async (id) => {
    deleteJob(id);
  };

  // Update Job
  const updateJobHandler = async (job) => {
    updateJob(job);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/resume' element={<ResumePage />} />
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJobHandler} />} />
        <Route
          path='/edit-job/:id'
          element={<EditJobPage updateJobSubmit={updateJobHandler} />}
          loader={jobLoader}
        />
        <Route
          path='/jobs/:id'
          element={<JobPage deleteJob={deleteJobHandler} />}
          loader={jobLoader}
        />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};
export default App;
