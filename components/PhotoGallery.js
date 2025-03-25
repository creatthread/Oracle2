export default function PhotoGallery() {
    return (
      <div className="photo-gallery">
        <div className="photo-item">
          <img src="/images/photo1.jpg" alt="走进甲骨文1" />
          <p>甲骨文起源</p>
        </div>
        <div className="photo-item">
          <img src="/images/photo2.jpg" alt="走进甲骨文2" />
          <p>甲骨文演变</p>
        </div>
        <div className="photo-item">
          <img src="/images/photo3.jpg" alt="走进甲骨文3" />
          <p>甲骨文文化</p>
        </div>
        <div className="photo-item">
          <img src="/images/photo4.jpg" alt="走进甲骨文4" />
          <p>甲骨文价值</p>
        </div>
      </div>
    );
  }