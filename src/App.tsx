import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { AILabPage } from './pages/AILabPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { AwardsPage } from './pages/AwardsPage';
import { ContactPage } from './pages/ContactPage';

const AppContent: React.FC = () => {
  const { currentPath, isSidebarExpanded } = useRouter();

  const renderPage = () => {
    switch (currentPath) {
      case '/about':
        return <AboutPage />;
      case '/projects':
        return <ProjectsPage />;
      case '/ai-lab':
        return <AILabPage />;
      case '/experience':
        return <ExperiencePage />;
      case '/awards':
        return <AwardsPage />;
      case '/contact':
        return <ContactPage />;
      case '/':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-[#E8E1C9] text-[#39402F] flex flex-col md:flex-row cozy-paper-pattern selection:bg-[#405C3A]/20 selection:text-[#344C30]">
      {/* Sidebar on desktop (collapsible / expandable icon-rail), top bar on mobile */}
      <Navbar />

      {/* Main Workspace Dashboard Container with dynamic responsive padding */}
      <div
        className={`flex-1 flex flex-col min-w-0 transition-all duration-300 ease-in-out pt-16 md:pt-0 ${
          isSidebarExpanded ? 'md:pl-72 lg:pl-80' : 'md:pl-28'
        }`}
      >
        <main className="flex-grow max-w-[1360px] w-full mx-auto px-3 sm:px-5 lg:px-6 py-5 md:py-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPath}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              {renderPage()}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Footer inside the main scroll area */}
        <Footer />
      </div>
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
};

export default App;
