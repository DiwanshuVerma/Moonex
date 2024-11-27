const Footer = () => {
    return (
      <footer id='contact'  className='mt-36 relative min-h-[200px] bg-[#051422] flex flex-col md:flex-row items-center justify-between px-6 lg:px-16 text-white'>
        <div className='mb-6 md:mb-0'>
          <img src='/footer-moonex-logo.png' alt='footer-moonex-logo' />
        </div>
  
        <div className='flex flex-wrap justify-center gap-12'>
          <a
            href='#'
            className='font-extrabold text-lg hover:text-[#F9D423] transition-colors'
          >
            About Us
          </a>
          <a
            href='#'
            className='font-extrabold text-lg hover:text-[#F9D423] transition-colors'
          >
            Roadmap
          </a>
          <a
            href='#faqs'
            className='font-extrabold text-lg hover:text-[#F9D423] transition-colors'
          >
            FAQs
          </a>
          <a
            href='#'
            className='font-extrabold text-lg hover:text-[#F9D423] transition-colors'
          >
            Contact Us
          </a>
        </div>
  
        <div className='min-w-[190px] text-center'>
          <h5 className='font-extrabold text-[1.875rem] leading-5 mb-8'>
            Contact <span className='text-[#F9D423]'>Us</span>
          </h5>
          <div className='flex items-center justify-center md:justify-between gap-x-4 mb-10'>
            <img
              src='/twitter.png'
              alt='twitter'
              className='h-[31px] w-[31px] object-contain'
            />
            <img
              src='/redit.png'
              alt='redit'
              className='h-[26px] w-[30px] object-contain'
            />
            <img
              src='/twitter.png'
              alt='twitter'
              className='h-[26px] w-[26px] object-contain'
            />
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  