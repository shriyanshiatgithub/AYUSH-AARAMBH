import React, { useEffect, useState } from 'react';

const GoogleTranslate: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const addGoogleTranslateScript = () => {
      const script = document.createElement('script');
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    };

    // Define the Google Translate init function globally
    (window as any).googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          { pageLanguage: 'en', layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE },
          'google_translate_element'
        );
        setIsLoaded(true);  // Mark that the widget is loaded
      }
    };

    addGoogleTranslateScript();
  }, []);

  return (
    <div id="google_translate_element" style={{ display: isLoaded ? 'block' : 'none', width: '100%', maxHeight: '100px' }}>
      {/* Google Translate widget will appear here */}
    </div>
  );
};

export default GoogleTranslate;
