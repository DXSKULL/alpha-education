export default function ArtistItem({artistImage, artistName}) {
  return (
    <div className="artist-item">
      <img
        src={artistImage}
        alt={artistName}
        className="artist-poster"
      />
      <h4 className="artist-name">{artistName}</h4>
      <p className="artist-type">Исполнитель</p>
    </div>
  );
}
