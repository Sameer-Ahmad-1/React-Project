import jobsData from '../jobs.json';

const JOBS_KEY = 'jobs';

export const getJobs = () => {
  const jobs = localStorage.getItem(JOBS_KEY);
  if (!jobs) {
    localStorage.setItem(JOBS_KEY, JSON.stringify(jobsData));
    return jobsData;
  }
  return JSON.parse(jobs);
};

export const addJob = (newJob) => {
  const jobs = getJobs();
  jobs.push(newJob);
  localStorage.setItem(JOBS_KEY, JSON.stringify(jobs));
};

export const updateJob = (updatedJob) => {
  const jobs = getJobs();
  const index = jobs.findIndex(job => job.id === updatedJob.id);
  if (index !== -1) {
    jobs[index] = updatedJob;
    localStorage.setItem(JOBS_KEY, JSON.stringify(jobs));
  }
};

export const deleteJob = (id) => {
  const jobs = getJobs();
  const filteredJobs = jobs.filter(job => job.id !== id);
  localStorage.setItem(JOBS_KEY, JSON.stringify(filteredJobs));
};

export const getJobById = (id) => {
  const jobs = getJobs();
  return jobs.find(job => job.id === id);
};
