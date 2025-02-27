import React from "react";

const photos = [
  {
    albumId: 1,
    id: 1,
    title: "green",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
  },
  {
    albumId: 1,
    id: 2,
    title: "purple",
    url: "https://via.placeholder.com/600/771796",
    thumbnailUrl: "https://via.placeholder.com/150/771796",
  },
];

const PhotoItem = ({ photo }) => {
  return (
    <div className="photoElement">
      <img src={photo.url} />
      <h3>{photo.title}</h3>
    </div>
  );
};

const PhotoList = () => {
  return (
    <div className="photoList">
      {photos.map((photo) => (
        <PhotoItem photo={photo} />
      ))}
    </div>
  );
};

export default PhotoList;
