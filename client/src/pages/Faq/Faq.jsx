import React, { useState } from 'react';
import './Faq.css';

function Faq() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleParagraph = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='faqContainer'>
      <section className="bg-blue dark:bg-white-900">
        <div className="container px-6 py-12 mx-auto">
          <h1 className="text-center text-white lg:text-3xl dark:text-white">Frequently Asked Questions</h1>

          <div className="mt-8 xl:mt-16 lg:flex lg:-mx-12">
            <div className="lg:mx-12">
              <h1 className="text-xl font-semibold text-white dark:text-white">Table of Content</h1>

              <div className="mt-4 space-y-4 lg:mt-8">
                <a href="#" className="block text-white dark:text-blue hover:underline">General</a>
                <a href="#" className="block text-white dark:text-gray hover:underline">Trust & Safety</a>
                <a href="#" className="block text-white dark:text-gray hover:underline">Services</a>
                <a href="#" className="block text-white dark:text-gray hover:underline">Billing</a>
                <a href="#" className="block text-white dark:text-gray hover:underline">Office Cleaning</a>
              </div>
            </div>

            <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
              <div>
                <button className="flex items-center focus:outline-none" onClick={toggleParagraph}>
                  <svg className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path>
                  </svg>

                  <h1 className="mx-4 text-xl text-white dark:text-white">How can I pay for my appointment?</h1>
                </button>

                {isOpen && (
                  <div className="flex mt-8 md:mx-10">
                    <span className="border border-blue-500"></span>

                    <p className="max-w-3xl px-4 text-white dark:text-gray-300">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.
                    </p>
                  </div>
                )}
              </div>

              <hr className="border-gray-200 dark:border-gray-700 hrFAQ" />

              <div>
                <button className="flex items-center focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>

                  <h1 className="mx-4 text-xl text-white dark:text-white">What can I expect at my first consultation?</h1>
                </button>
              </div>

              <hr className="border-gray-200 dark:border-gray-700 hrFAQ" />

              <div>
                <button className="flex items-center focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>

                  <h1 className="mx-4 text-xl text-white dark:text-white">What are your opening hours?</h1>
                </button>
              </div>

              <hr className="border-gray-200 dark:border-gray-700 hrFAQ" />

              <div>
                <button className="flex items-center focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>

                  <h1 className="mx-4 text-xl text-white dark:text-white">Do I need a referral?</h1>
                </button>
              </div>

              <hr className="border-gray-200 dark:border-gray-700 hrFAQ" />

              <div>
                <button className="flex items-center focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>

                  <h1 className="mx-4 text-xl text-white dark:text-white">Is the cost of the appointment covered by private health insurance?</h1>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Faq;
