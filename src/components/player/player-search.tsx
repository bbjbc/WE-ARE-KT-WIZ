import { useAtom } from 'jotai';

import { searchTermAtom } from '../../utils/atoms';
import Input from '../ui/input/input';

const PlayerSearch = () => {
  const [searchTerm, setSearchTerm] = useAtom(searchTermAtom);

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <section className="my-2 flex flex-col items-start">
      <Input
        placeholder="선수 이름을 검색해보세요!"
        value={searchTerm}
        onChange={inputChangeHandler}
      />
    </section>
  );
};

export default PlayerSearch;
