"use client"; // 声明为客户端组件

import Link from 'next/link';
import { usePathname } from 'next/navigation';


export default function Home() {
  const pathname = usePathname();
  console.log("Current pathname:", pathname); // 调试：打印当前路径

  return (
    <div className="container">
      {/* 第一行：导航 */}
      <div className="header">
        <div className="nav-buttons">
          <Link
            href="/"
            className={`nav-link ${pathname === '/' ? 'active' : ''}`}
          >
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

      {/* 第二行：主视觉图和文字 */}
      <div className="main-visual">
        <h2>探索甲骨文，传承文化，发现历史</h2>
      </div>

      {/* 第三行：展示九张甲骨文照片 */}
      <div className="photo-gallery">
        <h2>甲骨文展示</h2>
        <div className="gallery-container">
          <img src="/images/photo1.jpg" alt="甲骨文1" className="gallery-image" />
          <img src="/images/photo2.jpg" alt="甲骨文2" className="gallery-image" />
          <img src="/images/photo3.jpg" alt="甲骨文3" className="gallery-image" />
          <img src="/images/photo4.jpg" alt="甲骨文4" className="gallery-image" />
          <img src="/images/photo5.jpg" alt="甲骨文5" className="gallery-image" />
          <img src="/images/photo6.jpg" alt="甲骨文6" className="gallery-image" />
          <img src="/images/photo7.jpg" alt="甲骨文7" className="gallery-image" />
          <img src="/images/photo8.jpg" alt="甲骨文8" className="gallery-image" />
          <img src="/images/photo9.jpg" alt="甲骨文9" className="gallery-image" />
        </div>
      </div>
    </div>
  );
}
