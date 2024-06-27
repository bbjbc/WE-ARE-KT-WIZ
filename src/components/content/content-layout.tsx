import Breadcrumb from '../ui/breadcrumb/breadcrumb';

interface ContentLayoutProps {
  children: React.ReactNode;
}

const ContentLayout: React.FC<ContentLayoutProps> = ({ children }) => {
  return (
    <main className="mx-4">
      <Breadcrumb />
      {children}
    </main>
  );
};

export default ContentLayout;
