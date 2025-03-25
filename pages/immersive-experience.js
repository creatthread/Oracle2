"use client"; // 声明为客户端组件

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MiniGames from "@/components/MiniGames";
import OracleGame from "@/components/OracleGame";

export default function ImmersiveExperience() {
  const pathname = usePathname();

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
      <h1 className="page-title">沉浸体验</h1>

      {/* 第三行：甲骨文密室逃脱 */}
      <div className="experience-section">
        <h2 className="section-title">甲骨文密室逃脱</h2>
        <div className="video-section">
          <video width="100%" controls className="experience-video">
            <source src="/videos/escape-room.mp4" type="video/mp4" />
            您的浏览器不支持 HTML5 视频。
          </video>
        </div>
      </div>

      {/* 第四行：甲骨文讲师 */}
      <div className="experience-section">
        <h2 className="section-title">甲骨文讲师</h2>
        <div className="video-section">
          <video width="100%" controls className="experience-video">
            <source src="/videos/lecturer.mp4" type="video/mp4" />
            您的浏览器不支持 HTML5 视频。
          </video>
        </div>
      </div>

      {/* 第五行：甲骨文“舞”动生活 */}
      <div className="experience-section">
        <h2 className="section-title">甲骨文“舞”动生活</h2>
        <div className="video-gallery">
          {/* 左侧：dance1, dance2, dance3 */}
          <div className="video-left">
            <video controls className="gallery-video">
              <source src="/videos/dance1.mp4" type="video/mp4" />
              您的浏览器不支持 HTML5 视频。
            </video>
            <video controls className="gallery-video">
              <source src="/videos/dance2.mp4" type="video/mp4" />
              您的浏览器不支持 HTML5 视频。
            </video>
            <video controls className="gallery-video">
              <source src="/videos/dance3.mp4" type="video/mp4" />
              您的浏览器不支持 HTML5 视频。
            </video>
          </div>
          {/* 右侧：dance4 */}
          <div className="video-right">
            <video controls className="gallery-video large-video">
              <source src="/videos/dance4.mp4" type="video/mp4" />
              您的浏览器不支持 HTML5 视频。
            </video>
          </div>
        </div>
      </div>

      {/* 第六行：甲骨文消消乐 */}
      <div className="experience-section">
        <h2 className="section-title">甲骨文消消乐</h2>
        <div className="game-section">
          <MiniGames />
        </div>
      </div>

      {/* 第七行：猜字挑战 */}
      <div className="experience-section">
        <h2 className="section-title">猜字挑战</h2>
        <div className="game-section">
          <OracleGame />
        </div>
      </div>
    </div>
  );
}