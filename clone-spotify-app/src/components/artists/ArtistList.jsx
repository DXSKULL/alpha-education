import React from "react";
import { useEffect, useState } from "react";
import { artistsLinks, ACCESS_TOKEN } from "../../utils/consts";
import ArtistItem from "./ArtistItem";
import Loader from "../shared/Loader";
import Error from "../shared/Error";

const ArtistList = () => {
  const [artists, setArtists] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    async function getArtists() {
      try {
        setLoading(true);
        const artistIds = artistsLinks.join(",");
        const response = await fetch(
          `https://api.spotify.com/v1/artists?ids=${artistIds}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${ACCESS_TOKEN}`,
            },
          }
        );
        const data = await response.json();
        setArtists(data.artists);
        console.log(data.artists);
      } catch (error) {
        console.log("Error: ", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getArtists();
  }, []);

  return (
    <div className="artist-wrapper">
      <div className="artist-grid">
        {isLoading ? (
          <Loader />
        ) : isError ? (
          <Error />
        ) : (
          artists.map((item) => (
            <ArtistItem
              artistImage={item.images[0].url}
              artistName={item.name}
              key={item.id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ArtistList;
