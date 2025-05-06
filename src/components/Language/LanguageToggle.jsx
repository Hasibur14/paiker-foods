import { useState, useRef, useEffect } from 'react';

const LanguageToggle = () => {
  const [currentLang, setCurrentLang] = useState('en');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'en', label: 'EN', flag: '🇺🇸' },
    { code: 'bn', label: 'BN', flag: '🇧🇩' },
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLanguageChange = (lang) => {
    setCurrentLang(lang);
    setIsOpen(false);
    // Add your language change logic here
    console.log('Language changed to:', lang);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLanguage = languages.find(lang => lang.code === currentLang);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Toggle Button */}
      <button
        type="button"
        className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-white rounded-md hover:bg-primary-deep focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-second-light transition-colors duration-200"
        style={{ backgroundColor: '#1F4E3D' }} // primary.deep
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="sr-only">Change language</span>
        <span className="flex items-center">
          <span className="mr-1">🌐</span>
          <span className="font-medium text-xs uppercase tracking-wider">
            {currentLanguage?.label}
          </span>
        </span>
        <svg
          className={`-mr-1 ml-1 h-4 w-4 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-28 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
          role="menu"
          style={{ border: '2px solid #F7C35F' }} // second.light as border
        >
          <div className="py-1" role="none">
            {languages.map((language) => (
              <button
                key={language.code}
                className={`block w-full text-left px-4 py-2 text-sm ${
                  currentLang === language.code
                    ? 'bg-primary-light text-white' // primary.light for active
                    : 'text-gray-700 hover:bg-second-light hover:text-gray-900' // second.light for hover
                } transition-colors duration-200`}
                role="menuitem"
                onClick={() => handleLanguageChange(language.code)}
              >
                <span className="flex items-center">
                  <span className="mr-2 text-base">{language.flag}</span>
                  <span className="font-medium uppercase">
                    {language.label}
                    {currentLang === language.code && (
                      <span className="ml-2 text-second-deep">✓</span> // second.deep for checkmark
                    )}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageToggle;