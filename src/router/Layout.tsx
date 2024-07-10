import { Outlet } from 'react-router-dom';

import NavigationBar from '../components/navigation/navigation-bar';
import ScrollToTopButton from '../components/ui/button/scroll-to-top-button';
import Footer from '../components/footer/footer';

const Layout = () => {
  return (
    <main className="flex h-screen w-screen items-center justify-center">
      <section className="scrollable-section relative flex h-full w-full max-w-[450px] flex-col overflow-y-auto overflow-x-hidden bg-white scrollbar-hide">
        <NavigationBar />
        <div className="flex-grow">
          <Outlet />
        </div>
        <Footer />
        <ScrollToTopButton />
      </section>
    </main>
  );
};

export default Layout;
