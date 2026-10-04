import React, { createContext, useContext, useState, useEffect } from 'react';

export type RoutePath = '/' | '/about' | '/projects' | '/ai-lab' | '/experience' | '/awards' | '/contact';

interface RouterContextType {
  currentPath: RoutePath;
  navigateTo: (path: RoutePath) => void;
  isSidebarExpanded: boolean;
  toggleSidebar: () => void;
  setSidebarExpanded: (expanded: boolean) => void;
}

const RouterContext = createContext<RouterContextType>({
  currentPath: '/',
  navigateTo: () => {},
  isSidebarExpanded: false,
  toggleSidebar: () => {},
  setSidebarExpanded: () => {},
});

function getInitialPath(): RoutePath {
  if (typeof window === 'undefined') return '/';
  
  // Check hash first (e.g. #/about or #about)
  const hash = window.location.hash.replace(/^#\/?/, '/');
  if (isValidRoute(hash)) return hash as RoutePath;

  // Check pathname
  const pathname = window.location.pathname;
  if (isValidRoute(pathname)) return pathname as RoutePath;

  return '/';
}

function isValidRoute(path: string): boolean {
  return ['/', '/about', '/projects', '/ai-lab', '/experience', '/awards', '/contact'].includes(path);
}

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<RoutePath>(getInitialPath);
  // Default to compressed icon rail on desktop, expandable on click/toggle
  const [isSidebarExpanded, setIsSidebarExpanded] = useState<boolean>(false);

  useEffect(() => {
    const handleLocationChange = () => {
      const hash = window.location.hash.replace(/^#\/?/, '/');
      if (isValidRoute(hash)) {
        setCurrentPath(hash as RoutePath);
        return;
      }
      const pathname = window.location.pathname;
      if (isValidRoute(pathname)) {
        setCurrentPath(pathname as RoutePath);
      } else {
        setCurrentPath('/');
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigateTo = (path: RoutePath) => {
    if (path === currentPath) return;
    setCurrentPath(path);
    window.history.pushState({}, '', path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleSidebar = () => {
    setIsSidebarExpanded((prev) => !prev);
  };

  const setSidebarExpanded = (expanded: boolean) => {
    setIsSidebarExpanded(expanded);
  };

  return (
    <RouterContext.Provider
      value={{
        currentPath,
        navigateTo,
        isSidebarExpanded,
        toggleSidebar,
        setSidebarExpanded,
      }}
    >
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => useContext(RouterContext);
