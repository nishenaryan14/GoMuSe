import Playlist from "../components/Playlist";
import { SeekBar } from "../components/SeekBar";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="playContainer">
        <div className="songPlayed"></div>
        <div className="songSeekerDiv">
          <SeekBar />
        </div>
      </div>
      <Playlist />
    </div>
  );
};
export default Home;
