import { useEffect } from 'react';

import { useAtom } from 'jotai';

import { searchTermAtom } from '../../utils/atoms';
import Input from '../ui/input/input';

interface PlayerSearchProps {
  placeholder?: string;
}

const PlayerSearch: React.FC<PlayerSearchProps> = ({ placeholder }) => {
  const [searchTerm, setSearchTerm] = useAtom(searchTermAtom);

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    return () => {
      setSearchTerm('');
    };
  }, [setSearchTerm]);

  return (
    <section className="my-2 flex flex-col items-start">
      <Input
        placeholder={placeholder}
        value={searchTerm}
        onChange={inputChangeHandler}
      />
    </section>
  );
};

export default PlayerSearch;
