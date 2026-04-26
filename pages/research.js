import { useState } from "react";
import SiteLayout from "@/components/SiteLayout";

const photos = [
  "/photos/photo7.jpg",
  "/photos/photo8.jpg",
  "/photos/photo9.jpg",
  "/photos/photo10.jpg",
  "/photos/photo11.jpg",
  "/photos/photo12.jpg",
  "/photos/photo13.jpg",
  "/photos/photo14.jpg",
  "/photos/photo15.jpg",
  "/photos/photo16.jpg",
  "/photos/photo17.jpg",
  "/photos/photo18.jpg",
];

export default function Research() {
  const [submitted, setSubmitted] = useState(false);
  const [focus, setFocus] = useState("漫剧与电子书联动");

  return (
    <SiteLayout>
      <section className="page-hero compact-hero">
        <p className="eyebrow">实践调研</p>
        <h1>线上问卷与实地图片共同支撑项目调研。</h1>
        <p>问卷沉淀家长和老师反馈，图片展示线下课堂、调研和实践活动素材。</p>
      </section>

      <section className="content-band split-band">
        <form className="survey-form">
          <div className="section-heading left">
            <p className="eyebrow">Online Survey</p>
            <h2>线上调查问卷</h2>
          </div>
          <label>
            您最关注的功能
            <select value={focus} onChange={(event) => setFocus(event.target.value)}>
              <option>漫剧与电子书联动</option>
              <option>甲骨文小游戏</option>
              <option>AI讲师问答</option>
              <option>学习报告</option>
              <option>积分兑换</option>
            </select>
          </label>
          <label>
            使用场景
            <div className="choice-row">
              <span>家庭亲子</span>
              <span>学校课堂</span>
              <span>研学活动</span>
            </div>
          </label>
          <label>
            反馈建议
            <textarea placeholder="请写下您希望优化的内容" />
          </label>
          <button type="button" className="btn primary" onClick={() => setSubmitted(true)}>
            提交问卷
          </button>
          {submitted && <p className="form-success">已记录：重点关注“{focus}”。</p>}
        </form>

        <div className="research-note">
          <span>调研结论</span>
          <strong>内容联动和可玩化学习是当前优先级最高的优化方向。</strong>
          <p>因此本次改版先把漫剧、绘本、小游戏、任务和报告串联起来，形成更完整的闭环。</p>
        </div>
      </section>

      <section className="content-band">
        <div className="section-heading">
          <p className="eyebrow">Field Research</p>
          <h2>实地调研图片</h2>
          <p>点击图片可作为后续调研详情、图文报告或活动相册入口。</p>
        </div>
        <div className="gallery-grid">
          {photos.map((photo, index) => (
            <a key={photo} href={photo} target="_blank" rel="noreferrer" className="photo-card">
              <img src={photo} alt={`实地调研图片 ${index + 1}`} />
            </a>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
