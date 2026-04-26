import { useState } from "react";
import SiteLayout from "@/components/SiteLayout";

const games = [
  {
    title: "古今配对挑战",
    type: "拼字游戏",
    src: "/games/matching/index.html",
    text: "使用本地图片包，把甲骨文字形和现代汉字配对。",
  },
  {
    title: "小马过河",
    type: "双人PK",
    src: "/games/pony-race/index.html",
    text: "两名玩家通过识字抢答推进赛道，适合课堂分组。",
  },
  {
    title: "甲骨文双人PK赛",
    type: "看图猜字",
    src: "/games/pk-duel/index.html",
    text: "轮流答题、自动计分，保留原小游戏的竞技节奏。",
  },
  {
    title: "甲骨文消消乐",
    type: "消消乐",
    src: "/games/oracle-match/index.html",
    text: "复用原有开发内容，用字形图片完成消除练习。",
  },
];

const immersiveItems = [
  {
    id: "ar",
    title: "AR扫字识义",
    text: "面向展馆和绘本封面，后续可接入摄像头识别，让孩子扫到字形就看到释义。",
  },
  {
    id: "vr",
    title: "VR字形长廊",
    text: "将字形演变、商代生活和任务闯关组合成沉浸式路线。",
  },
  {
    id: "offline",
    title: "线下体验馆",
    text: "把线上积分、会员权益和体验馆参观预约打通。",
  },
];

export default function ImmersiveExperience() {
  const [activeExperience, setActiveExperience] = useState("ar");

  return (
    <SiteLayout>
      <section className="page-hero compact-hero">
        <p className="eyebrow">沉浸体验</p>
        <h1>甲骨文小游戏沉浸体验，AR/VR体验入口。</h1>
        <p>孩子可以先玩配对、PK和消消乐巩固字形，再进入AR/VR与线下体验场景。</p>
      </section>

      <section className="content-band">
        <div className="section-heading">
          <p className="eyebrow">Mini Games</p>
          <h2>甲骨文小游戏</h2>
          <p>三个新增HTML小游戏已作为静态资源接入，图片素材使用本地解压后的资源。</p>
        </div>
        <div className="game-grid">
          {games.map((game) => (
            <article key={game.src} className="game-card">
              <div className="game-card-head">
                <div>
                  <span>{game.type}</span>
                  <h3>{game.title}</h3>
                </div>
                <a href={game.src} target="_blank" rel="noreferrer" className="text-action">
                  独立打开
                </a>
              </div>
              <p>{game.text}</p>
              <iframe title={game.title} src={game.src} className="game-frame" loading="lazy" />
            </article>
          ))}
        </div>
      </section>

      <section className="content-band split-band immersive-switcher">
        <div className="immersive-media-panel">
          {activeExperience === "ar" && (
            <div className="ar-preview-grid">
              <img src="/resources/immersive/ar-scan-code.jpg" alt="AR扫字识义微信扫描图" />
              <img src="/resources/immersive/ar-ip-card.jpg" alt="骨小灵IP立体AR介绍图" />
            </div>
          )}
          {activeExperience === "vr" && (
            <video controls src="/resources/immersive/ar-virtual.mp4" />
          )}
          {activeExperience === "offline" && (
            <img src="/resources/immersive/her-power.jpg" alt="她的力量甲骨文字形文创设计" />
          )}
        </div>

        <div>
          <div className="section-heading left">
            <p className="eyebrow">AR / VR</p>
            <h2>沉浸式体验规划</h2>
            <p>点击右侧入口，左侧同步展示对应的AR图片、VR视频或线下体验馆内容。</p>
          </div>
          <div className="experience-list">
            {immersiveItems.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`compact-card immersive-option ${
                  activeExperience === item.id ? "active" : ""
                }`}
                onClick={() => setActiveExperience(item.id)}
              >
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </button>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
