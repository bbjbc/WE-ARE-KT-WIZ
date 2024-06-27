import { Outlet } from 'react-router-dom';

import NavigationBar from '../components/navigation/navigation-bar';

const Layout = () => {
  return (
    <main className="flex items-center">
      <section className="scrollbar-hidden mx-auto min-h-screen w-[100vw] max-w-[450px] overflow-x-hidden bg-white">
        <NavigationBar />
        <Outlet />
      </section>
    </main>
  );
};

export default Layout;
