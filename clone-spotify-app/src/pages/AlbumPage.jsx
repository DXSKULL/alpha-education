import { MdNumbers } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ACCESS_TOKEN } from "../utils/consts";
import { convertMsToTime } from "../utils/utils";
import Loader from "../components/shared/Loader";
import TrackItem from "../components/tracks/TrackItem";

export default function AlbumPage() {
  const [albumData, setAlbumData] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [albumTracks, setAlbumTracks] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchAlbumData() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.spotify.com/v1/albums/${id}?market=KZ`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${ACCESS_TOKEN}`,
            },
          }
        );
        const data = await response.json();
        // console.log(data);
        setAlbumData(data);
        setAlbumTracks(data.tracks.items);
        console.log("Tracks.items: ", data.tracks.items);
      } catch (error) {
        console.log("Error: ", error);
      } finally {
        setLoading(false);
      }
    }
    fetchAlbumData();
  }, [id]);

  return (
    <div className="wrapper">
      <div className="album-wrapper">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <div className="album-header">
              <img
                src="https://placehold.co/360/1ed760/000000/png"
                alt=""
                className="album-img"
              />
              <div className="album-content">
                <p className="album-content__type">Альбом</p>
                <h1 className="album-content__name">{albumData.name}</h1>
                <div className="album-content__author">
                  <span>Имя исполнителя</span>
                  <div className="album-content__circle"></div>
                  <p>{albumData.release_date}</p>
                  <div className="album-content__circle"></div>
                  <p>{albumData.total_tracks} треков, 42 мин. 31 сек.</p>
                </div>
              </div>
            </div>
            <div className="track-table">
              <div className="track-table__header">
                <div className="track-header__text">
                  <MdNumbers />
                </div>
                <div className="track-header__text">Название</div>
                <div className="track-header__text">
                  <FaRegClock />
                </div>
              </div>
              <div className="track-table__body">
                {albumTracks.map((track, index) => (
                  <TrackItem
                    key={track.id}
                    trackName={track.name}
                    trackIndex={index}
                    trackAuthor={track.artists[0].name}
                    trackDuration={convertMsToTime(track.duration_ms)}
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
