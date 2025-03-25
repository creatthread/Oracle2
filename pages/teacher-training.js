"use client"; // 声明为客户端组件

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ResourceList from "../components/ResourceList";

export default function TeacherTraining() {
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
      <h1 className="page-title">师培筑基</h1>

      {/* 第三行：资源列表 */}
      <ResourceList />
    </div>
  );
}