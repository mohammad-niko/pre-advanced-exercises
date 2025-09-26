

function GalleryCard({ data }) {
  const { src, alt } = data;


  return (
    <div  className="gallery-item">
      <img src={src} alt={alt} className="gallery-image" />
    </div>
  );
}

export default GalleryCard;
