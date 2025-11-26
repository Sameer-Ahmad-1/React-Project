import { useLocation } from 'react-router-dom';
import JobListings from '../components/JobListings';

const JobsPage = () => {
  const location = useLocation();

  return (
    <section className='bg-blue-50 px-4 py-6'>
      <JobListings key={location.key} />
    </section>
  );
};
export default JobsPage;
