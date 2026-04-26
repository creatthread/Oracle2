import { useMemo, useState } from "react";
import Link from "next/link";
import SiteLayout from "@/components/SiteLayout";

const episodes = [
  {
    id: "wake-up",
    title: "《起猛了……》第一集：文心向殷，甲骨初遇",
    age: "6-8岁",
    status: "免费试看",
    bookId: "sun-book",
    point: "认识“女、日、月”的象形来源",
    preview: [
      "19岁的大学生林溪，在学校的汉字文化体验馆中第一次近距离接触甲骨文。那些刻在龟甲兽骨上的古老符号，瞬间击中了她的内心。",
      "陈老师指着展柜讲解：“安阳，是殷墟的所在地，是甲骨文的发源地，这里的每一寸土地，都藏着汉字最初的模样。”",
      "林溪轻声说：“我想读懂每一个甲骨文的样子，想让更多人知道，我们的汉字，从一开始就这么美，这么有力量。”",
    ],
  },
  {
    id: "river",
    title: "《起猛了……》第二集：洹水烟火，见字如画",
    age: "8-10岁",
    status: "会员解锁",
    bookId: "water-book",
    point: "学习“水、火、木”的字形演变",
    preview: [
      "穿越后的子溪在殷商日常中观察自然与生活，伴洹水潺潺、山峦起伏，明白“水”“山”的形态描摹。",
      "她跟着殷商卜官学习刻字、记事，在贵族生活与民间烟火的交织中，理解“古人见物造字，字藏生活百态”。",
      "现代认知与殷商文化不断碰撞，子溪也开始懂得甲骨文字被刻入龟甲兽骨的庄重与珍贵。",
    ],
  },
  {
    id: "market",
    title: "《起猛了……》第三集：贝壳集市，字藏生活",
    age: "10-12岁",
    status: "会员解锁",
    bookId: "trade-book",
    point: "理解甲骨文与商代生活场景",
    preview: [
      "子溪以现代汉语言文学的视角，在殷商的日常烟火中，亲眼见证一个个甲骨文字的诞生。",
      "从织布、祭祀到集市交换，文字不再只是符号，而是商代生活、礼仪和自然观察留下的痕迹。",
      "回到现代后，林溪继续完善挑战杯项目，让古老文字文化以更年轻的方式“活”起来。",
    ],
  },
];

const introPhotos = Array.from({ length: 6 }, (_, index) => `/photos/photo${index + 1}.jpg`);

export default function WalkingIntoOracle() {
  const [activeEpisode, setActiveEpisode] = useState(episodes[0]);
  const previewText = useMemo(() => activeEpisode.preview, [activeEpisode]);

  return (
    <SiteLayout>
      <section className="page-hero compact-hero">
        <p className="eyebrow">走进甲骨文</p>
        <h1>AI漫剧与甲骨文科普互相衔接，孩子先看故事，再理解文字。</h1>
        <p>分龄播放、免费试看、会员解锁和课后任务共用一套学习主题，减少内容割裂感。</p>
      </section>

      <section className="content-band split-band drama-band">
        <div className="comic-preview">
          <div className="preview-toolbar">
            <span>{activeEpisode.status}</span>
            <Link href={`/teacher-training#task-${activeEpisode.bookId}`} className="text-action">
              跳转课后任务
            </Link>
          </div>
          <div className="preview-paper">
            <p className="eyebrow">漫剧试看</p>
            <h2>{activeEpisode.title}</h2>
            {previewText.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
        </div>

        <div className="episode-list">
          <div className="section-heading left">
            <p className="eyebrow">AI Comic Drama</p>
            <h2>《起猛了……》分龄漫剧</h2>
            <p>试看内容用于引流，会员内容继续解锁完整系列和课后任务。</p>
          </div>
          {episodes.map((episode) => (
            <button
              key={episode.id}
              className={`episode-item ${activeEpisode.id === episode.id ? "active" : ""}`}
              onClick={() => setActiveEpisode(episode)}
              type="button"
            >
              <span>{episode.age}</span>
              <strong>{episode.title}</strong>
              <small>{episode.point}</small>
            </button>
          ))}
        </div>
      </section>

      <section className="content-band oracle-intro">
        <div className="showcase-heading">
          <h2>甲骨文简介</h2>
          <span aria-hidden="true" />
        </div>
        <p className="intro-copy">
          甲骨文是目前能见到的较成熟汉字体系，主要刻写在龟甲、兽骨上，用于占卜、记事与祭祀。
          它把自然万物、身体姿态和商代生活凝练成符号，是理解汉字源流和中华文明的重要入口。
        </p>
        <div className="intro-photo-grid">
          {introPhotos.map((src, index) => (
            <img key={src} src={src} alt={`甲骨文简介 ${index + 1}`} />
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
