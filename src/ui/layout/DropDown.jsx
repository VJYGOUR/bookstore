import { useState } from "react";
import footer from "../../data/footer.json";
function DropDown() {
  // State to manage the open/closed status of each dropdown
  const [openDropdowns, setOpenDropdowns] = useState({
    dropdown1: false,
    dropdown2: false,
    dropdown3: false,
    dropdown4: false,
    dropdown5: false,
    dropdown6: false,
  });

  // Function to toggle a specific dropdown
  const toggleDropdown = (dropdownName) => {
    setOpenDropdowns((prevState) => ({
      ...prevState,
      [dropdownName]: !prevState[dropdownName],
    }));
  };

  const { dropdown } = footer;
  const { topgenres, quickLinks, company, help, topAuthors, topPublishers } =
    dropdown;
  return (
    <>
      <main className="bg-blue-500 flex flex-col gap-2 text-white mt-8 px-2 ">
        <section className="border-b border-solid border-white">
          <div
            onClick={() => toggleDropdown("dropdown1")}
            className="flex justify-between"
          >
            <span>Top Genres</span>
            <span>
              {openDropdowns.dropdown1 ? (
                <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 12 L6 6 L12 12 Z" fill="white" /> {/* Up Arrow */}
                </svg>
              ) : (
                <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0 L6 6 L12 0 Z" fill="black" /> {/* Down Arrow */}
                </svg>
              )}
            </span>
          </div>
          <div
            className={`${
              openDropdowns.dropdown1 ? "" : "hidden"
            } flex flex-col `}
          >
            {topgenres.map((curr, i) => (
              <span key={i}>{curr}</span>
            ))}
          </div>
        </section>
        {/* 2nd */}
        <section className="border-b border-solid border-white">
          <div
            onClick={() => toggleDropdown("dropdown2")}
            className="flex justify-between"
          >
            <span>Quick Links</span>
            <span>
              {openDropdowns.dropdown2 ? (
                <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 12 L6 6 L12 12 Z" fill="white" /> {/* Up Arrow */}
                </svg>
              ) : (
                <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0 L6 6 L12 0 Z" fill="black" /> {/* Down Arrow */}
                </svg>
              )}
            </span>
          </div>
          <div
            className={`${
              openDropdowns.dropdown2 ? "" : "hidden"
            } flex flex-col`}
          >
            {quickLinks.map((curr, i) => (
              <span key={i}>{curr}</span>
            ))}
          </div>
        </section>
        {/* 3rd */}
        <section className="border-b border-solid border-white">
          <div
            onClick={() => toggleDropdown("dropdown3")}
            className="flex justify-between"
          >
            <span>Company</span>
            <span>
              {openDropdowns.dropdown3 ? (
                <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 12 L6 6 L12 12 Z" fill="white" /> {/* Up Arrow */}
                </svg>
              ) : (
                <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0 L6 6 L12 0 Z" fill="black" /> {/* Down Arrow */}
                </svg>
              )}
            </span>
          </div>
          <div
            className={`${
              openDropdowns.dropdown3 ? "" : "hidden"
            } flex flex-col`}
          >
            {company.map((curr, i) => (
              <span key={i}>{curr}</span>
            ))}
          </div>
        </section>
        {/* 4th */}
        <section className="border-b border-solid border-white">
          <div
            onClick={() => toggleDropdown("dropdown4")}
            className="flex justify-between"
          >
            <span>Help & Support</span>
            <span>
              {openDropdowns.dropdown4 ? (
                <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 12 L6 6 L12 12 Z" fill="white" /> {/* Up Arrow */}
                </svg>
              ) : (
                <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0 L6 6 L12 0 Z" fill="black" /> {/* Down Arrow */}
                </svg>
              )}
            </span>
          </div>
          <div
            className={`${
              openDropdowns.dropdown4 ? "" : "hidden"
            } flex flex-col`}
          >
            {help.map((curr, i) => (
              <span key={i}>{curr}</span>
            ))}
          </div>
        </section>
        {/* 5th */}
        <section className="border-b border-solid border-white">
          <div
            onClick={() => toggleDropdown("dropdown5")}
            className="flex justify-between"
          >
            <span>Top Authors</span>
            <span>
              {openDropdowns.dropdown5 ? (
                <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 12 L6 6 L12 12 Z" fill="white" /> {/* Up Arrow */}
                </svg>
              ) : (
                <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0 L6 6 L12 0 Z" fill="black" /> {/* Down Arrow */}
                </svg>
              )}
            </span>
          </div>
          <div
            className={`${
              openDropdowns.dropdown5 ? "" : "hidden"
            } flex flex-col`}
          >
            {topAuthors.map((curr, i) => (
              <span key={i}>{curr}</span>
            ))}
          </div>
        </section>

        {/* 6th */}
        <section className="border-b border-solid border-white">
          <div
            onClick={() => toggleDropdown("dropdown6")}
            className="flex justify-between"
          >
            <span>Top Publishers</span>
            <span>
              {openDropdowns.dropdown6 ? (
                <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 12 L6 6 L12 12 Z" fill="white" /> {/* Up Arrow */}
                </svg>
              ) : (
                <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0 L6 6 L12 0 Z" fill="black" /> {/* Down Arrow */}
                </svg>
              )}
            </span>
          </div>
          <div
            className={`${
              openDropdowns.dropdown6 ? "" : "hidden"
            } flex flex-col`}
          >
            {topPublishers.map((curr, i) => (
              <span key={i}>{curr}</span>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default DropDown;
