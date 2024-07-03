import Header from '../components/header/header';
import ContentLayout from '../components/content/content-layout';
import ktHeaderImg from '../assets/ktHeaderImg.png';
import { PlayerInfo } from '../mocks/player-info';
import SongList from '../components/song/song-list';

const SongPage = () => {
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
          <SongList songs={playerSongs} />
        </ContentLayout>
      </main>
    </>
  );
};

export default SongPage;
