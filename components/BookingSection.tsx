
import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';

const BookingSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scriptId = 'calendly-widget-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement;

    const initializeWidget = () => {
      // @ts-ignore
      if (window.Calendly && containerRef.current) {
        containerRef.current.innerHTML = '';
        // @ts-ignore
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/hranalytics-ca/30min',
          parentElement: containerRef.current,
          prefill: {},
          utm: {}
        });
      }
    };

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
      script.onload = initializeWidget;
    } else {
      // @ts-ignore
      if (window.Calendly) {
        initializeWidget();
      } else {
        script.onload = initializeWidget;
      }
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <section id="book" className="page-section">
      <div className="py-20 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-10 h-1 bg-[#007BFF]"></div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">Book A Strategy Call</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Schedule a 30-minute discovery session to discuss your HR data goals.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100 min-h-[700px] relative"
          >
            <div 
              id="calendly-container" 
              ref={containerRef}
              style={{ minWidth: '320px', height: '700px' }}
            >
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 italic">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 border-4 border-[#007BFF] border-t-transparent rounded-full animate-spin mb-4" />
                  <p>Loading booking calendar...</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="mt-12 text-center text-gray-500 text-sm">
            <p>Having trouble with the widget? Reach out at <span className="font-bold text-[#0B1B2B]">info@CodableHR.com</span></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
