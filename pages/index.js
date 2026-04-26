import Link from "next/link";
import SiteLayout from "@/components/SiteLayout";

const modules = [
  {
    title: "走进甲骨文",
    text: "AI漫剧、电子绘本和甲骨文科普内容联动，把故事情节变成继续阅读的学习线索。",
    href: "/walking-into-oracle",
    tone: "red",
  },
  {
    title: "沉浸体验",
    text: "接入消消乐、配对、双人PK与小马过河，保留原有小游戏内容并统一入。",
    href: "/immersive-experience",
    tone: "blue",
  },
  {
    title: "师培筑基",
    text: "骨小灵AI讲师、课后任务库和学习报告，帮助老师与家长持续跟进。",
    href: "/teacher-training",
    tone: "green",
  },
  {
    title: "个人中心",
    text: "会员权益、积分商城、线下产品兑换与社区互动集中管理。",
    href: "/profile",
    tone: "gold",
  },
];

const oracleImages = Array.from({ length: 9 }, (_, index) => `/images/photo${index + 1}.jpg`);

export default function Home() {
  return (
    <SiteLayout>
      <section className="home-hero">
        <div className="hero-shade" />
        <div className="hero-copy">
          {/* <p className="eyebrow">儿童甲骨文数字学习平台</p> */}
          <h1 className="hero-title">甲骨文跨学科数字化传播平台</h1>
          <p>
            平台把AI漫剧、电子阅读、小游戏、AR/VR、师培任务和线下兑换串成一条学习路径，
            适合家庭试看、会员深度学习，也方便老师组织课堂活动。
          </p>
          <div className="hero-actions">
            <Link href="/walking-into-oracle" className="btn primary">
              开始试看
            </Link>
            <Link href="/immersive-experience" className="btn secondary">
              进入小游戏
            </Link>
          </div>
        </div>
        <div className="hero-status" aria-label="学习数据概览">
          <div>
            <strong>5</strong>
            <span>学习板块</span>
          </div>
          <div>
            <strong>4</strong>
            <span>小游戏入口</span>
          </div>
          <div>
            <strong>3</strong>
            <span>成长档案维度</span>
          </div>
        </div>
      </section>

      <section className="quick-dock">
        {modules.map((module) => (
          <Link key={module.title} href={module.href} className={`module-card ${module.tone}`}>
            <span className="module-index">{module.title.slice(0, 2)}</span>
            <h2>{module.title}</h2>
            <p>{module.text}</p>
          </Link>
        ))}
      </section>

      <section className="content-band oracle-showcase">
        <div className="showcase-heading">
          <h2>甲骨文展示</h2>
          <span aria-hidden="true" />
        </div>
        <div className="home-oracle-grid">
          {oracleImages.map((src, index) => (
            <img key={src} src={src} alt={`甲骨文展示 ${index + 1}`} />
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
