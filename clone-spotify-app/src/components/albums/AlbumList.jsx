import { useEffect, useState } from "react";
import { albumLinks} from "../../utils/consts";
import AlbumItem from "./AlbumItem";
import Loader from "../shared/Loader";
import Error from "../shared/Error";
import { axiosInstance } from "../../services/axios";

export default function AlbumList() {
  const [albums, setAlbums] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  useEffect(() => {
    async function getAlbums() {
      try {
        setLoading(true);
        const ids = albumLinks.join(",");
        // const res = await axiosInstance.get(`/albums?ids=${ids}&market=KZ`);
        const res = await axiosInstance.get(`/albums`, {
          params: {
            ids: ids,
            market: "KZ",
          },
        });
        console.log(res);
        setAlbums(res.data.albums);
      } catch (error) {
        console.log("Error: ", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getAlbums();
  }, []);

  return (
    <div className="album-wrapper">
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Error />
      ) : (
        <div className="album-grid">
          {albums.map((item) => (
            <AlbumItem
              imageUrl={item.images[0].url}
              authorName={item.artists[0].name}
              albumName={item.name}
              key={item.id}
              albumId={item.id}
            />
          ))}
        </div>
      )}
    </div>
  );
}
