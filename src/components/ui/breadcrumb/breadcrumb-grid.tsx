import React from 'react';

import { Link } from 'react-router-dom';

import { FaHome } from 'react-icons/fa';
import { classNames } from '../../../utils/classNames';

interface BreadcrumbItem {
  label: string;
  link: string;
}

interface BreadcrumbGridProps {
  items: BreadcrumbItem[];
  className?: string;
}

const BreadcrumbGrid: React.FC<BreadcrumbGridProps> = ({
  items,
  className,
}) => {
  return (
    <nav
      className={classNames(
        'flex justify-end space-x-2 align-bottom text-sm',
        className || '',
      )}
    >
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index !== 0 && (
            <span className="font-extrabold text-gray-400">{'>'}</span>
          )}
          {index === 0 && (
            <Link to="/" className="text-gray-500 hover:text-gray-700">
              <FaHome className="inline" size={14} />
            </Link>
          )}
          <Link
            to={item.link}
            className={classNames(
              'text-gray-500 hover:text-gray-700',
              index === items.length - 1 ? 'cursor-default' : '',
            )}
          >
            {item.label}
          </Link>
        </React.Fragment>
      ))}
    </nav>
  );
};

export default BreadcrumbGrid;
