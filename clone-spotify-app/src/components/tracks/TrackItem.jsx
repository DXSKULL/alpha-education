import React from "react";

const TrackItem = ({ trackName, trackAuthor, trackIndex, trackDuration }) => {
  return (
    <div className="track-line">
      <div className="track-number">{trackIndex + 1}</div>
      <div className="track-song">
        <h6 className="track-song__name">{trackName}</h6>
        <p className="track-song__author">{trackAuthor}</p>
      </div>
      <div className="track-duration">{trackDuration}</div>
    </div>
  );
};

export default TrackItem;
