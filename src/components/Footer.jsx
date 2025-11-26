import resume from '../assets/My Resume.pdf';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-indigo-700 text-white py-8'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div>
            <h3 className='text-xl font-bold mb-4'>Sameer Ahmad</h3>
            <p className='text-indigo-200'>
              Full-Stack Developer specializing in React and modern web technologies. Passionate about creating innovative solutions.
            </p>
          </div>
          <div>
            <h3 className='text-xl font-bold mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              <li>
                <a href='/' className='text-indigo-200 hover:text-white transition duration-300'>
                  Home
                </a>
              </li>
              <li>
                <a href='/jobs' className='text-indigo-200 hover:text-white transition duration-300'>
                  Jobs
                </a>
              </li>
              <li>
                <a href='/add-job' className='text-indigo-200 hover:text-white transition duration-300'>
                  Add Job
                </a>
              </li>
              <li>
                <a href='/resume' className='text-indigo-200 hover:text-white transition duration-300'>
                  Resume
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-xl font-bold mb-4'>Contact & Social</h3>
            <div className='space-y-2'>
              <p className='text-indigo-200'>
                <span className='font-semibold'>Email:</span> sameerahmad0182@gmail.com
              </p>
              <p className='text-indigo-200'>
                <span className='font-semibold'>Phone:</span> +923451543286
              </p>
              <div className='flex space-x-4'>
                <a
                  href='https://github.com/Sameer-Ahmad-1'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-indigo-200 hover:text-white transition duration-300'
                >
                  GitHub
                </a>
                <a
                  href='https://linkedin.com/in/yourprofile'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-indigo-200 hover:text-white transition duration-300'
                >
                  LinkedIn
                </a>
                <a
                  href='mailto:sameerahmad0182@gmail.com'
                  className='text-indigo-200 hover:text-white transition duration-300'
                >
                  Gmail
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='border-t border-indigo-600 mt-8 pt-8 text-center'>
          <p className='text-indigo-200'>
            &copy; {currentYear} React Jobs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
