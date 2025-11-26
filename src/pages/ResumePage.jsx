import resume from '../assets/My Resume.pdf';

const ResumePage = () => {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold text-center mb-8'>My Resume</h1>
      <div className='flex justify-center'>
        <iframe
          src={`${resume}#toolbar=0`}
          width='100%'
          height='600px'
          title='Resume'
          className='border border-gray-300 rounded-lg'
        />
      </div>
    </div>
  );
};

export default ResumePage;
