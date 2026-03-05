
import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Search, 
  Users, 
  BarChart3, 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  Cpu,
  Target,
  Layout as LayoutIcon,
  Clipboard
} from 'lucide-react';
import BookingSection from '../components/BookingSection';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover" 
            alt="AI HR Background"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-dark/85 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-brand-primary/20 text-brand-primary px-4 py-2 rounded-full mb-8 border border-brand-primary/30">
              <Brain className="w-5 h-5" />
              <span className="text-sm font-bold uppercase tracking-widest text-brand-primary">AI-Powered HR Servicing</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight uppercase tracking-tighter">
              AI-POWERED <br className="hidden md:block" />
              <span className="text-brand-primary">HR OPERATIONS SERVICING</span>
            </h1>
            
            <p className="text-2xl md:text-4xl text-gray-300 mb-12 max-w-3xl mx-auto leading-tight font-medium">
              Validated by Human
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                to="/services" 
                className="w-full sm:w-auto bg-brand-primary hover:bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-xl flex items-center justify-center space-x-2 text-lg"
              >
                <span>Explore AI Tools</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/book" 
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-2xl font-bold transition-all backdrop-blur-md border border-white/20 text-lg flex items-center justify-center"
              >
                Book a Strategy Call
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full" />
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                  alt="HR Team"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent" />
              </div>
              <div className="absolute bottom-6 right-6 bg-brand-primary p-6 md:p-8 rounded-3xl shadow-2xl text-white hidden md:block z-20">
                <div className="text-3xl md:text-4xl font-bold mb-1 md:mb-2">15+</div>
                <div className="text-[10px] md:text-sm font-medium uppercase tracking-widest">Years Experience</div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                Why <span className="text-brand-primary">CodableHR</span>?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                At CodableHR, we take a methodical and programmable approach to delivering top-tier contractual HR data solutions. 
                We specialize in number-savvy HR functions like analytics, compensation, and payroll management.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 rounded-2xl bg-blue-50/50 border border-blue-100">
                  <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-brand-primary/20">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Human-Validated Output</h4>
                    <p className="text-gray-600">No AI output leaves our desk without a rigorous validation process by a senior HR professional.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-6 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-brand-primary shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Expert Supervision</h4>
                    <p className="text-gray-500">Our team provides the strategic context that AI lacks, turning data into actionable HR strategy.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values / Brutalist Grid */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">Our Core Values</h2>
            <p className="text-xl text-gray-400">People &gt; Product &gt; Process &gt; Data</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-white/10">
            <div className="p-12 border-b md:border-r border-white/10 hover:bg-white/5 transition-colors">
              <div className="text-brand-primary mb-6"><Clipboard className="w-12 h-12" /></div>
              <h3 className="text-2xl font-bold mb-4">Modern Strategy</h3>
              <p className="text-gray-400">We bring clarity to complex environments by using fundamental and universal data tools.</p>
            </div>
            <div className="p-12 border-b lg:border-r border-white/10 hover:bg-white/5 transition-colors">
              <div className="text-brand-primary mb-6"><Cpu className="w-12 h-12" /></div>
              <h3 className="text-2xl font-bold mb-4">People Geeks</h3>
              <p className="text-gray-400">We are tech geeks with extensive HR expertise, staying up-to-date with latest advancements.</p>
            </div>
            <div className="p-12 border-b md:border-r lg:border-r-0 border-white/10 hover:bg-white/5 transition-colors">
              <div className="text-brand-primary mb-6"><Search className="w-12 h-12" /></div>
              <h3 className="text-2xl font-bold mb-4">People-focused</h3>
              <p className="text-gray-400">Ultra-flexible and adaptable product designed with a people-focused approach.</p>
            </div>
            <div className="p-12 border-b lg:border-b-0 md:border-r-0 lg:border-r border-white/10 hover:bg-white/5 transition-colors">
              <div className="text-brand-primary mb-6"><Target className="w-12 h-12" /></div>
              <h3 className="text-2xl font-bold mb-4">Empower Business</h3>
              <p className="text-gray-400">We love people data so you don't have to. Let experts handle the nitty gritty.</p>
            </div>
            <div className="p-12 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/5 transition-colors">
              <div className="text-brand-primary mb-6"><LayoutIcon className="w-12 h-12" /></div>
              <h3 className="text-2xl font-bold mb-4">Ultra-flexible</h3>
              <p className="text-gray-400">Whether on-demand or fractional, we offer tailored services seamlessly integrating AI.</p>
            </div>
            <div className="p-12 hover:bg-white/5 transition-colors">
              <div className="text-brand-primary mb-6"><BarChart3 className="w-12 h-12" /></div>
              <h3 className="text-2xl font-bold mb-4">Data Driven</h3>
              <p className="text-gray-400">Leveraging cutting-edge AI and BI technology to provide data-driven, scalable solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Ready to Transform Your HR Operations?
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Join the future of HR with our AI-powered tools and human-led strategy.
          </p>
          <Link 
            to="/book" 
            className="inline-flex items-center space-x-3 bg-white text-brand-primary px-12 py-6 rounded-2xl font-bold text-xl hover:bg-gray-100 transition-all shadow-2xl"
          >
            <span>Book a Strategy Call</span>
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
