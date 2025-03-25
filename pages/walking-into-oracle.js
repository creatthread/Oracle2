"use client"; // 声明为客户端组件

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function WalkingIntoOracle() {
  const pathname = usePathname();
  const [selectedImage, setSelectedImage] = useState(null); // 管理放大图片的状态

  // 点击图片时设置放大图片
  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  // 关闭模态框
  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container">
      {/* 第一行：导航（复用 Home.js 的导航） */}
      <div className="header">
        <div className="nav-buttons">
          <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>
            首页
          </Link>
          <Link
            href="/walking-into-oracle"
            className={`nav-link ${pathname === '/walking-into-oracle' ? 'active' : ''}`}
          >
            走进甲骨文
          </Link>
          <Link
            href="/immersive-experience"
            className={`nav-link ${pathname === '/immersive-experience' ? 'active' : ''}`}
          >
            沉浸体验
          </Link>
          <Link
            href="/teacher-training"
            className={`nav-link ${pathname === '/teacher-training' ? 'active' : ''}`}
          >
            师培筑基
          </Link>
          <Link
            href="/research"
            className={`nav-link ${pathname === '/research' ? 'active' : ''}`}
          >
            实践调研
          </Link>
        </div>
      </div>

      {/* 第二行：标题 */}
      <h1 className="page-title">走进甲骨文</h1>

      {/* 第三行：图片展示 */}
      <div className="photo-gallery">
        <div className="gallery-container">
          <Image
            src="/photos/photo1.jpg"
            alt="甲骨文介绍1"
            width={500}
            height={800} // 调整高度以匹配竖向图片比例
            className="gallery-image"
            onClick={() => handleImageClick('/photos/photo1.jpg')}
          />
          <Image
            src="/photos/photo2.jpg"
            alt="甲骨文介绍2"
            width={500}
            height={800}
            className="gallery-image"
            onClick={() => handleImageClick('/photos/photo2.jpg')}
          />
          <Image
            src="/photos/photo3.jpg"
            alt="甲骨文介绍3"
            width={500}
            height={800}
            className="gallery-image"
            onClick={() => handleImageClick('/photos/photo3.jpg')}
          />
          <Image
            src="/photos/photo4.jpg"
            alt="甲骨文介绍4"
            width={500}
            height={800}
            className="gallery-image"
            onClick={() => handleImageClick('/photos/photo4.jpg')}
          />
          <Image
            src="/photos/photo5.jpg"
            alt="甲骨文介绍5"
            width={500}
            height={800}
            className="gallery-image"
            onClick={() => handleImageClick('/photos/photo5.jpg')}
          />
          <Image
            src="/photos/photo6.jpg"
            alt="甲骨文介绍6"
            width={500}
            height={800}
            className="gallery-image"
            onClick={() => handleImageClick('/photos/photo6.jpg')}
          />
        </div>
      </div>

      {/* 模态框：放大图片 */}
      {selectedImage && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="modal-close" onClick={handleCloseModal}>
              &times;
            </span>
            <Image
              src={selectedImage}
              alt="放大图片"
              width={800} // 放大后的宽度
              height={1200} // 放大后的高度
              className="modal-image"
            />
          </div>
        </div>
      )}
    </div>
  );
}