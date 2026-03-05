import React from 'react';
import { motion } from 'motion/react';
import { 
  Brain, 
  Search, 
  Users, 
  BarChart3, 
  ShieldCheck, 
  Zap, 
  MessageSquare, 
  FileText,
  Clock,
  CheckCircle2
} from 'lucide-react';
import BookingSection from '../components/BookingSection';

const services = [
  {
    title: "AI Recruitment Automation",
    description: "Intelligent candidate sourcing and screening tools that identify top talent in seconds, supervised by our expert recruiters.",
    icon: <Search className="w-8 h-8" />,
    features: ["Automated Screening", "Bias Mitigation", "Skill Assessment AI"]
  },
  {
    title: "AI Employee Engagement Analytics",
    description: "Real-time sentiment analysis and engagement tracking to predict turnover and improve workplace culture.",
    icon: <BarChart3 className="w-8 h-8" />,
    features: ["Sentiment Analysis", "Predictive Retention", "Custom Surveys"]
  },
  {
    title: "AI Payroll & Compliance Monitor",
    description: "Automated compliance checks and payroll auditing to ensure 100% accuracy and legal adherence across jurisdictions.",
    icon: <ShieldCheck className="w-8 h-8" />,
    features: ["Error Detection", "Regulatory Updates", "Automated Audits"]
  },
  {
    title: "AI Performance Review Assistant",
    description: "Data-driven performance insights that help managers provide objective, constructive feedback based on actual KPIs.",
    icon: <Zap className="w-8 h-8" />,
    features: ["KPI Tracking", "Feedback Generation", "Growth Mapping"]
  },
  {
    title: "AI HRIS Data Orchestration",
    description: "Seamlessly sync and clean data across all your HR systems using intelligent automation workflows.",
    icon: <Brain className="w-8 h-8" />,
    features: ["System Integration", "Data Cleaning", "Workflow Automation"]
  },
  {
    title: "AI Policy & FAQ Bot",
    description: "24/7 internal support for employees, answering policy questions instantly with human escalation protocols.",
    icon: <MessageSquare className="w-8 h-8" />,
    features: ["Instant Answers", "Policy Search", "Human Escalation"]
  }
];

const Services: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-brand-dark text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-brand-primary rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-accent rounded-full blur-[120px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight uppercase tracking-tighter">
              AI-POWERED <span className="text-brand-primary">HR OPERATIONS SERVICING</span>
            </h1>
            <p className="text-2xl md:text-4xl text-gray-400 leading-tight font-medium max-w-3xl">
              Validated by Human
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-blue-50 text-brand-primary rounded-xl flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <div className="flex items-center space-x-1 bg-green-50 text-green-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-green-100">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Human-Verified</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map(feature => (
                    <li key={feature} className="flex items-center text-sm text-gray-500">
                      <CheckCircle2 className="w-4 h-4 text-brand-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Human Supervision Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-dark rounded-[2rem] p-12 md:p-20 text-white flex flex-col lg:flex-row items-center gap-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-primary/10 skew-x-12 translate-x-1/4" />
            
            <div className="lg:w-1/2 relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                The Power of <span className="text-brand-primary">Human Validation</span>
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                AI provides the speed and data, but our HR experts provide the judgment. 
                Every AI-generated insight is <span className="text-white font-bold">rigorously validated</span> by a human professional to ensure it meets our high standards of quality and ethical compliance.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-brand-primary/20 rounded-lg flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-brand-primary" />
                  </div>
                  <span className="font-medium">Ethical AI</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-1 bg-brand-primary/20 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-brand-primary" />
                  </div>
                  <span className="font-medium">Expert Review</span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative z-10">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center font-bold">CH</div>
                  <div>
                    <h4 className="font-bold">CodableHR Workflow</h4>
                    <p className="text-sm text-gray-400">AI + Human Synergy</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                    <span>AI Data Processing</span>
                    <span className="text-brand-accent text-xs font-bold uppercase">Automated</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Zap className="w-4 h-4 text-brand-primary" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-brand-primary/20 border border-brand-primary/30 rounded-lg">
                    <span>Human Expert Review</span>
                    <span className="text-brand-primary text-xs font-bold uppercase">Supervised</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Zap className="w-4 h-4 text-brand-primary" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                    <span>Strategic Delivery</span>
                    <span className="text-brand-accent text-xs font-bold uppercase">Verified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
