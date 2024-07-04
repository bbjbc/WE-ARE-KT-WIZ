import { useState, useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import TabNav from '../ui/tab/tab-link';

const PlayerCategory = () => {
  const location = useLocation();
  const [isBatterPage, setIsBatterPage] = useState<boolean>(false);

  useEffect(() => {
    setIsBatterPage(location.pathname.startsWith('/players/batter'));
  }, [location.pathname]);

  return (
    <>
      <div className="mb-2 grid w-full grid-cols-3 gap-1 rounded-lg bg-gray-100 p-1 text-sm">
        <TabNav to="/players/coach" label="코칭스텝" />
        <TabNav to="/players/pitcher" label="투수" />
        <TabNav to="/players/batter" label="타자" />
      </div>

      {isBatterPage && (
        <div className="relative mb-10 flex w-full justify-end gap-1">
          <div className="absolute right-0 z-10 grid w-full grid-cols-3 gap-1 rounded-lg bg-gray-100 p-1 text-xs">
            <TabNav to="/players/batter/catcher" label="포수" />
            <TabNav to="/players/batter/infielder" label="내야수" />
            <TabNav to="/players/batter/outfielder" label="외야수" />
          </div>
        </div>
      )}
    </>
  );
};

export default PlayerCategory;
