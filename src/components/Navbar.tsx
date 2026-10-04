import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  UserCheck,
  Layers,
  BrainCircuit,
  Briefcase,
  Trophy,
  Mail,
  FileText,
  Github,
  Linkedin,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';
import { profileData } from '../data/profile';
import { useRouter, RoutePath } from '../context/RouterContext';

interface NavItem {
  label: string;
  path: RoutePath;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { label: 'Home', path: '/', icon: LayoutDashboard },
  { label: 'About', path: '/about', icon: UserCheck },
  { label: 'Projects', path: '/projects', icon: Layers },
  { label: 'AI Lab', path: '/ai-lab', icon: BrainCircuit },
  { label: 'Experience', path: '/experience', icon: Briefcase },
  { label: 'Awards', path: '/awards', icon: Trophy },
  { label: 'Contact', path: '/contact', icon: Mail },
];

export const Navbar: React.FC = () => {
  const { currentPath, navigateTo, isSidebarExpanded, toggleSidebar } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* ======================================================== */}
      {/* DESKTOP SIDEBAR: ICON-BASED COMPRESSIBLE & EXPANDABLE     */}
      {/* ======================================================== */}
      <aside
        className={`hidden md:flex flex-col fixed top-4 left-4 bottom-4 z-40 bg-[#405C3A] text-[#F6F0DC] rounded-[24px] shadow-cozy-sidebar border border-[#506B42] justify-between overflow-y-auto overflow-x-hidden no-scrollbar transition-all duration-300 ease-in-out ${
          isSidebarExpanded ? 'w-64 lg:w-72 p-5' : 'w-20 p-3'
        }`}
      >
        {/* Top: Monogram & Single Collapse/Expand Toggle On Top */}
        <div>
          {/* Header Area */}
          <div className="pb-3 mb-3 border-b border-[#506B42]">
            {isSidebarExpanded ? (
              // Expanded Header: RP Monogram + Name on Left, Single Collapse Button on Right
              <div className="flex items-center justify-between gap-2">
                <button
                  onClick={() => navigateTo('/')}
                  className="flex items-center gap-3 group focus:outline-none text-left min-w-0"
                  title="Rishabh Parmar — AI/ML Developer"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#344C30] border border-[#506B42] flex items-center justify-center font-bold text-sm text-[#F6F0DC] font-mono shadow-inner group-hover:scale-105 transition-transform shrink-0">
                    RP
                  </div>
                  <div className="overflow-hidden">
                    <h1 className="text-sm font-bold text-[#F6F0DC] tracking-tight group-hover:text-white transition-colors truncate">
                      {profileData.name}
                    </h1>
                    <div className="text-[11px] font-mono text-[#DCD4BC] truncate">
                      AI/ML Developer
                    </div>
                  </div>
                </button>

                {/* Single Collapse Button: Exclusively on Top */}
                <button
                  onClick={toggleSidebar}
                  className="p-1.5 rounded-lg text-[#DCD4BC] hover:text-white hover:bg-[#506B42] transition-colors focus:outline-none shrink-0"
                  title="Collapse Sidebar"
                  aria-label="Collapse Sidebar"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
              </div>
            ) : (
              // Compressed Header: Single Top Toggle (shows RP monogram, reveals expand chevron on hover)
              <div className="flex justify-center">
                <div className="relative group flex justify-center">
                  <button
                    onClick={toggleSidebar}
                    className="w-12 h-11 rounded-xl bg-[#344C30] border border-[#506B42] flex items-center justify-center font-bold text-sm text-[#F6F0DC] font-mono shadow-inner hover:bg-[#506B42] hover:scale-105 transition-all focus:outline-none"
                    title="Expand Sidebar"
                    aria-label="Expand Sidebar"
                  >
                    <span className="group-hover:hidden">RP</span>
                    <ChevronRight className="w-4 h-4 hidden group-hover:block text-white" />
                  </button>
                  <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-2.5 py-1 bg-[#344C30] text-[#F6F0DC] text-xs font-mono rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-150 z-50 whitespace-nowrap shadow-md border border-[#506B42]">
                    Expand Sidebar
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Links List */}
          <nav className="space-y-1">
            {navItems.map((item) => {
              const isActive = currentPath === item.path;
              const Icon = item.icon;

              if (!isSidebarExpanded) {
                // Compressed Icon-Only Item with Floating Tooltip
                return (
                  <div key={item.path} className="relative group flex justify-center">
                    <button
                      onClick={() => navigateTo(item.path)}
                      className={`w-12 h-11 rounded-xl flex items-center justify-center transition-all ${
                        isActive
                          ? 'bg-[#F2ECD8] text-[#344C30] shadow-sm font-semibold'
                          : 'text-[#DCD4BC] hover:bg-[#506B42] hover:text-white'
                      }`}
                      title={item.label}
                      aria-label={item.label}
                    >
                      <Icon className={`w-4 h-4 ${isActive ? 'text-[#344C30]' : 'text-[#DCD4BC]'}`} />
                    </button>

                    {/* Hover Floating Tooltip */}
                    <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-2.5 py-1 bg-[#344C30] text-[#F6F0DC] text-xs font-mono rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-150 z-50 whitespace-nowrap shadow-md border border-[#506B42]">
                      {item.label}
                    </div>
                  </div>
                );
              }

              // Expanded Item with Icon & Label
              return (
                <button
                  key={item.path}
                  onClick={() => navigateTo(item.path)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-150 text-left ${
                    isActive
                      ? 'bg-[#F2ECD8] text-[#344C30] shadow-sm font-semibold'
                      : 'text-[#DCD4BC] hover:bg-[#506B42] hover:text-white'
                  }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-[#344C30]' : 'text-[#C7D4B6]'}`} />
                  <span className="truncate">{item.label}</span>
                  {isActive && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#405C3A] shrink-0" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom: Resume & Social Links (No duplicate collapse button) */}
        <div className="pt-3 border-t border-[#506B42]">
          {isSidebarExpanded ? (
            <>
              {/* Full Download Resume Button */}
              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold bg-[#F2ECD8] text-[#344C30] hover:bg-white transition-colors shadow-sm mb-2.5"
              >
                <FileText className="w-3.5 h-3.5 text-[#405C3A]" />
                <span>Resume</span>
                <ExternalLink className="w-3 h-3 opacity-60 ml-0.5" />
              </a>

              {/* Social Icons Row */}
              <div className="flex items-center justify-around px-2 text-[#DCD4BC]">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-2 rounded-lg hover:bg-[#506B42] hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2 rounded-lg hover:bg-[#506B42] hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </>
          ) : (
            // Compressed Bottom Area: Resume Icon + GitHub only
            <div className="flex flex-col items-center gap-2">
              {/* Compressed Resume Icon Button */}
              <div className="relative group flex justify-center">
                <a
                  href={profileData.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-10 rounded-xl bg-[#F2ECD8] text-[#344C30] hover:bg-white flex items-center justify-center transition-colors shadow-sm"
                  title="Download Resume"
                  aria-label="Download Resume"
                >
                  <FileText className="w-4 h-4 text-[#405C3A]" />
                </a>
                <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-2.5 py-1 bg-[#344C30] text-[#F6F0DC] text-xs font-mono rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-150 z-50 whitespace-nowrap shadow-md border border-[#506B42]">
                  Download Resume
                </div>
              </div>

              {/* Compressed GitHub */}
              <div className="relative group flex justify-center">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-9 rounded-lg text-[#DCD4BC] hover:bg-[#506B42] hover:text-white flex items-center justify-center transition-colors"
                  title="GitHub Profile"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-2.5 py-1 bg-[#344C30] text-[#F6F0DC] text-xs font-mono rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-150 z-50 whitespace-nowrap shadow-md border border-[#506B42]">
                  GitHub
                </div>
              </div>
            </div>
          )}
        </div>
      </aside>

      {/* ======================================================== */}
      {/* MOBILE TOP NAVBAR (Visible only on screens < md)          */}
      {/* ======================================================== */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-[#405C3A] text-[#F6F0DC] px-4 py-3 shadow-md flex items-center justify-between border-b border-[#506B42] no-scrollbar overflow-x-hidden">
        <button
          onClick={() => {
            navigateTo('/');
            setMobileMenuOpen(false);
          }}
          className="flex items-center gap-2.5 text-left focus:outline-none"
        >
          <div className="w-8 h-8 rounded-lg bg-[#344C30] border border-[#506B42] flex items-center justify-center font-mono text-xs font-bold text-[#F6F0DC]">
            RP
          </div>
          <div>
            <div className="text-xs font-bold text-[#F6F0DC]">
              {profileData.name}
            </div>
            <div className="text-[10px] font-mono text-[#DCD4BC]">
              AI/ML Developer
            </div>
          </div>
        </button>

        <div className="flex items-center gap-2">
          <a
            href={profileData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-[#344C30] text-[#F6F0DC] border border-[#506B42]"
            aria-label="Download Resume"
            title="Download Resume"
          >
            <FileText className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#344C30] text-[#F6F0DC] border border-[#506B42] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed top-[56px] left-0 right-0 z-40 bg-[#405C3A] border-b border-[#506B42] p-5 shadow-2xl text-[#F6F0DC] no-scrollbar"
          >
            <nav className="space-y-1.5">
              {navItems.map((item) => {
                const isActive = currentPath === item.path;
                const Icon = item.icon;
                return (
                  <button
                    key={item.path}
                    onClick={() => {
                      navigateTo(item.path);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-medium transition-all ${
                      isActive
                        ? 'bg-[#F2ECD8] text-[#344C30] font-semibold'
                        : 'text-[#DCD4BC] hover:bg-[#506B42] hover:text-white'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-[#344C30]' : 'text-[#C7D4B6]'}`} />
                    <span>{item.label}</span>
                  </button>
                );
              })}

              <div className="pt-4 mt-2 border-t border-[#506B42] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <a
                    href={profileData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[#344C30] text-[#DCD4BC]"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={profileData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[#344C30] text-[#DCD4BC]"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
                <a
                  href={profileData.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-[#F2ECD8] text-[#344C30]"
                >
                  Download Resume
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
