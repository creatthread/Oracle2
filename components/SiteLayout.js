import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/walking-into-oracle", label: "走进甲骨文" },
  { href: "/immersive-experience", label: "沉浸体验" },
  { href: "/teacher-training", label: "师培筑基" },
  { href: "/profile", label: "个人中心" },
  { href: "/research", label: "实践调研" },
];

export default function SiteLayout({ children }) {
  const router = useRouter();

  return (
    <div className="site-shell">
      <header className="site-header">
        <Link href="/" className="brand-mark" aria-label="甲骨灵境首页">
          <Image
            src="/images/logo.png"
            alt="甲骨灵境 Logo"
            width={56}
            height={56}
            className="brand-logo"
          />
          <span>
            <strong>智造骨契</strong>
            <small>Oracle Learning Hub</small>
          </span>
        </Link>

        <nav className="primary-nav" aria-label="主导航">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link ${router.pathname === item.href ? "active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/profile" className="header-cta">
          会员解锁
        </Link>
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <span>智造骨契</span>
        <span>甲骨文跨学科数字化传播平台</span>
      </footer>
    </div>
  );
}