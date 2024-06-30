import { useState, useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import Tab from '../ui/tab/tab';

const PlayerCategory = () => {
  const location = useLocation();
  const [isBatterPage, setIsBatterPage] = useState<boolean>(false);

  useEffect(() => {
    setIsBatterPage(location.pathname.startsWith('/players/batter'));
  }, [location.pathname]);

  return (
    <>
      <div className="mb-2 grid w-full grid-cols-3 gap-1 rounded-lg bg-gray-100 p-1 text-sm">
        <Tab to="/players/coach" label="코칭스텝" />
        <Tab to="/players/pitcher" label="투수" />
        <Tab to="/players/batter" label="타자" />
      </div>

      {isBatterPage && (
        <div className="relative mb-10 flex w-full justify-end gap-1">
          <div className="absolute right-0 z-10 grid w-full grid-cols-3 gap-1 rounded-lg bg-gray-100 p-1 text-xs">
            <Tab to="/players/batter/catcher" label="포수" />
            <Tab to="/players/batter/infielder" label="내야수" />
            <Tab to="/players/batter/outfielder" label="외야수" />
          </div>
        </div>
      )}
    </>
  );
};

export default PlayerCategory;
