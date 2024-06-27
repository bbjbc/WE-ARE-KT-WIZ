import React from 'react';

import { useLocation } from 'react-router-dom';

import BreadcrumbGrid from './breadcrumb-grid';
import { BreadcrumbItems } from '../../../mocks/breadcrumb-items';

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  // BreadcrumbItems에서 현재 페이지에 해당하는 항목을 찾기 위한 함수
  const getCurrentBreadcrumb = (): { label: string; link: string }[] => {
    const currentPath = path.toLowerCase();
    const breadcrumbs = BreadcrumbItems.filter((item) =>
      currentPath.startsWith(item.link.toLowerCase()),
    );
    return breadcrumbs;
  };

  const currentBreadcrumbs = getCurrentBreadcrumb();

  return (
    <div>
      <BreadcrumbGrid items={currentBreadcrumbs} className="my-2" />
      <div className="my-2 border-t-2 border-red-500"></div>
    </div>
  );
};

export default Breadcrumb;
