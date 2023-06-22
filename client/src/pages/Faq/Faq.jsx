import React, { useState } from 'react';
import './Faq.css';
import { iconBlue } from '../../assets/index';

function Faq() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const toggleParagraph = (index) => {
    setSelectedIndex(index === selectedIndex ? null : index);
  };

  return (
    <div className='faqContainer'>
      <section className="bg-blue dark:bg-white-900">
        <div className="container px-6 py-12 mx-auto">
          <h1 className="text-center text-white lg:text-3xl dark:text-white">Frequently Asked Questions</h1>

          <div className="mt-8 xl:mt-16 lg:flex lg:-mx-12">
            <div className="lg:mx-12">
              <h1 className="text-2xl font-semibold text-white dark:text-white ">Table of Content</h1>

              <div className="mt-4 ml-8 space-y-4 lg:mt-8">
              <div className="flex items-center">
                  <img src={iconBlue} alt="Icon" className="mr-2 w-4 h-4" />
                  <button className={`block ${selectedIndex === 0 ? 'text-lightBlue' : 'text-white dark:text-blue'} hover:underline`} onClick={() => toggleParagraph(0)}>General</button>
                </div>

                <div className="flex items-center">
                  <img src={iconBlue} alt="Icon" className="mr-2 w-4 h-4" />
                  <button className={`block ${selectedIndex === 1 ? 'text-lightBlue' : 'text-white dark:text-gray'} hover:underline`} onClick={() => toggleParagraph(1)}>Trust & Safety</button>
                </div>

                <div className="flex items-center">
                  <img src={iconBlue} alt="Icon" className="mr-2 w-4 h-4" />
                  <button className={`block ${selectedIndex === 2 ? 'text-lightBlue' : 'text-white dark:text-gray'} hover:underline`} onClick={() => toggleParagraph(2)}>Services</button>
                </div>

                <div className="flex items-center">
                  <img src={iconBlue} alt="Icon" className="mr-2 w-4 h-4" />
                  <button className={`block ${selectedIndex === 3 ? 'text-lightBlue' : 'text-white dark:text-gray'} hover:underline`} onClick={() => toggleParagraph(3)}>Billing</button>
                </div>

                <div className="flex items-center">
                  <img src={iconBlue} alt="Icon" className="mr-2 w-4 h-4" />
                  <button className={`block ${selectedIndex === 4 ? 'text-lightBlue' : 'text-white dark:text-gray'} hover:underline`} onClick={() => toggleParagraph(4)}>Office Cleaning</button>
                </div>

              </div>
            </div>

            <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
              <div>
                <button className="flex items-center focus:outline-none" onClick={() => toggleParagraph(0)}>
                  {selectedIndex === 0 ? (
                    <svg className="flex-shrink-0 w-6 h-6 text-lightBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 text-blueIcon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                  )}

                  <h1 className="mx-4 text-xl text-white dark:text-white">How can I pay for my appointment?</h1>
                </button>

                {selectedIndex === 0 && (
                  <div className="flex mt-8 md:mx-10">
                    <span className="border border-lightBlue"></span>

                    <p className="max-w-3xl px-4 text-white dark:text-gray-300">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.
                    </p>
                  </div>
                )}
              </div>

              <hr className="border-gray dark:border-gray-700 hrFAQ" />

              <div>
                <button className="flex items-center focus:outline-none" onClick={() => toggleParagraph(1)}>
                  {selectedIndex === 1 ? (
                    <svg className="flex-shrink-0 w-6 h-6 text-lightBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 text-lightBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                  )}

                  <h1 className="mx-4 text-xl text-white dark:text-white">What can I expect at my first consultation?</h1>
                </button>

                {selectedIndex === 1 && (
                  <div className="flex mt-8 md:mx-10">
                    <span className="border border-lightBlue"></span>

                    <p className="max-w-3xl px-4 text-white dark:text-gray-300">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.
                    </p>
                  </div>
                )}
              </div>

              <hr className="border-gray dark:border-gray-700 hrFAQ" />

              <div>
                <button className="flex items-center focus:outline-none" onClick={() => toggleParagraph(2)}>
                  {selectedIndex === 2 ? (
                    <svg className="flex-shrink-0 w-6 h-6 text-lightBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 text-blueIcon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                  )}

                  <h1 className="mx-4 text-xl text-white dark:text-white">What are your opening hours?</h1>
                </button>

                {selectedIndex === 2 && (
                  <div className="flex mt-8 md:mx-10">
                    <span className="border border-lightBlue"></span>

                    <p className="max-w-3xl px-4 text-white dark:text-gray-300">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.
                    </p>
                  </div>
                )}
              </div>

              <hr className="border-gray dark:border-gray-700 hrFAQ" />

              <div>
                <button className="flex items-center focus:outline-none" onClick={() => toggleParagraph(3)}>
                  {selectedIndex === 3 ? (
                    <svg className="flex-shrink-0 w-6 h-6 text-lightBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 text-blueIcon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                  )}

                  <h1 className="mx-4 text-xl text-white dark:text-white">Do I need a referral?</h1>
                </button>

                {selectedIndex === 3 && (
                  <div className="flex mt-8 md:mx-10">
                    <span className="border border-lightBlue"></span>

                    <p className="max-w-3xl px-4 text-white dark:text-gray-300">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.
                    </p>
                  </div>
                )}
              </div>

              <hr className="border-gray dark:border-gray-700 hrFAQ" />

              <div>
                <button className="flex items-center focus:outline-none" onClick={() => toggleParagraph(4)}>
                  {selectedIndex === 4 ? (
                    <svg className="flex-shrink-0 w-6 h-6 text-lightBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 text-blueIcon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                  )}

                  <h1 className="mx-4 text-xl text-white dark:text-white">Is the cost of the appointment covered by private health insurance?</h1>
                </button>

                {selectedIndex === 4 && (
                  <div className="flex mt-8 md:mx-10">
                    <span className="border border-lightBlue"></span>

                    <p className="max-w-3xl px-4 text-white dark:text-gray-300">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.
                    </p>
                  </div>
                )}
                              <hr className="border-gray dark:border-gray-700 hrFAQ" />

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Faq;
