import { useState } from 'react';

import Header from '../components/header/header';
import ContentLayout from '../components/content/content-layout';
import SongList from '../components/song/song-list';
import PlayerSearch from '../components/player/player-search';
import TeamSongList from '../components/song/team-song-list';
import ktHeaderImg from '../assets/ktHeaderImg.png';
import { TeamSongInfo } from '../mocks/team-song-info';
import { PlayerInfo } from '../mocks/player-info';
import SongCategory from '../components/song/song-category';

const SongPage = () => {
  const [selectedTab, setSelectedTab] = useState<'player' | 'team'>('player');

  const playerSongs = PlayerInfo.filter(
    (player) => player.song && player.song.length > 0,
  ).map((player) => ({
    id: player.id,
    name: player.name,
    image: player.image,
    song: player.song ?? [],
    lyrics: player.lyrics ?? [],
  }));

  return (
    <>
      <Header
        bgImage={ktHeaderImg}
        title="응원가"
        description="팬이라면 꼭 알아두어야 할 kt wiz 응원가를 소개합니다."
      />
      <main>
        <ContentLayout>
          <SongCategory
            selectedTab={selectedTab}
            onSelectTab={setSelectedTab}
          />
          <PlayerSearch
            placeholder={
              selectedTab === 'player'
                ? '선수 이름을 검색해보세요!'
                : '팀 응원가를 검색해보세요!'
            }
          />
          {selectedTab === 'player' ? (
            <SongList songs={playerSongs} />
          ) : (
            <TeamSongList teamSongs={TeamSongInfo} />
          )}
        </ContentLayout>
      </main>
    </>
  );
};

export default SongPage;
