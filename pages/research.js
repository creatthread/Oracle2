import Link from 'next/link'; // 导入 Link 组件
import { usePathname } from 'next/navigation';
import ImageGallery from "../components/ImageGallery";


export default function Research() {
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
    <h1 className="page-title">实践调研</h1>

    {/* 第三行：图片画廊 */}
    <div className="p-6">
      <ImageGallery />
    </div>
    </div>
  );
}
