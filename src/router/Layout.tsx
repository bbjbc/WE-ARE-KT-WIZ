import { Outlet } from 'react-router-dom';

import NavigationBar from '../components/navigation/navigation-bar';
import ScrollToTopButton from '../components/ui/button/scroll-to-top-button';
import Footer from '../components/footer/footer';

const Layout = () => {
  return (
    <>
      <main className="flex h-screen w-screen items-center">
        <section className="scrollable-section relative mx-auto h-full w-full max-w-[450px] overflow-y-auto overflow-x-hidden bg-white scrollbar-hide">
          <NavigationBar />
          <Outlet />
          <ScrollToTopButton />
          <Footer />
        </section>
      </main>
    </>
  );
};

export default Layout;
