import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { StartupListPage } from '@/pages/StartupListPage';
import { StartupDetailPage } from '@/pages/StartupDetailPage';
import { BoostPage } from '@/pages/BoostPage';
import { ThemeProvider } from '@/providers/ThemeProvider';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-background flex flex-col">
          <Navbar />
          <main className="flex-1 pt-16">
            <Routes>
              <Route path="/" element={<StartupListPage />} />
              <Route path="/startup/:id" element={<StartupDetailPage />} />
              <Route path="/boost" element={<BoostPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;