import { useState } from "react";
import SiteLayout from "@/components/SiteLayout";

const answers = {
  origin: "甲骨文是刻写在龟甲、兽骨上的早期文字，常用于占卜记录，也保存了商代生活、自然观察和礼仪信息。",
  teach: "低龄段建议从象形字入手，例如日、月、山、水；高龄段可以加入字形演变、历史场景和跨学科任务。",
  report: "学习报告会汇总观看时长、游戏正确率、任务完成度和积分变化，便于老师与家长判断下一步练习重点。",
};

const tasks = [
  {
    id: "task-sun-book",
    title: "自然观察：日月山水小图鉴",
    subject: "语文 + 科学",
    target: "看完第一集后，记录4个自然象形字，并画出它们对应的自然物。",
  },
  {
    id: "task-water-book",
    title: "实验任务：水与火的安全课",
    subject: "科学 + 安全教育",
    target: "结合绘本内容，完成水的流动观察和火源安全判断。",
  },
  {
    id: "task-trade-book",
    title: "商代集市：贝币交换剧场",
    subject: "历史 + 数学",
    target: "用贝、鱼、羊等字卡设计一次交换活动，理解文字与生活的关系。",
  },
];

const reports = [
  { label: "漫剧观看", value: "6集", note: "本周新增2集" },
  { label: "游戏练习", value: "38题", note: "正确率76%" },
  { label: "任务完成", value: "4项", note: "可打印档案" },
  { label: "成长积分", value: "1280", note: "可兑换线下产品" },
];

export default function TeacherTraining() {
  const [questionKey, setQuestionKey] = useState("origin");

  return (
    <SiteLayout>
      <section className="page-hero compact-hero">
        <p className="eyebrow">师培筑基</p>
        <h1>骨小灵AI讲师、任务库和学习报告，为老师与家长减轻备课压力。</h1>
        <p>当前先实现前端交互原型，后续可以接入真实语音问答、用户学习数据和打印模板。</p>
      </section>

      <section className="content-band split-band">
        <div className="ai-lecturer">
          <div className="lecturer-avatar">骨小灵</div>
          <div className="chat-bubble">
            <strong>知识点讲解</strong>
            <p>{answers[questionKey]}</p>
          </div>
          <div className="prompt-row">
            <button type="button" onClick={() => setQuestionKey("origin")}>
              甲骨文是什么
            </button>
            <button type="button" onClick={() => setQuestionKey("teach")}>
              怎么分龄教学
            </button>
            <button type="button" onClick={() => setQuestionKey("report")}>
              报告记录什么
            </button>
          </div>
        </div>

        <div>
          <div className="section-heading left">
            <p className="eyebrow">AI Lecturer</p>
            <h2>语音问答入口</h2>
            <p>按钮模拟常见提问，适合演示“随时呼叫AI讲师”的产品形态。</p>
          </div>
          <a
            href="https://doubao.com/bot/qgfTdyTe"
            target="_blank"
            rel="noreferrer"
            className="btn primary"
          >
            呼叫骨小灵讲师
          </a>
        </div>
      </section>

      <section className="content-band task-library-band">
        <div className="section-heading">
          <p className="eyebrow">Task Library</p>
          <h2>跨学科任务库</h2>
          <p>每个任务都可与漫剧和绘本关联，家长或老师可以下载任务材料。</p>
        </div>
        <div className="task-grid">
          {tasks.map((task) => (
            <article key={task.id} id={task.id} className="task-card refined-task-card">
              <span>{task.subject}</span>
              <h3>{task.title}</h3>
              <p>{task.target}</p>
              <a
                href="/resources/oracle-math.pdf"
                download="甲骨文数学.pdf"
                className="btn secondary"
              >
                下载任务
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="content-band">
        <div className="section-heading">
          <p className="eyebrow">Learning Report</p>
          <h2>甲骨文学习成长档案</h2>
          <p>观看、游戏、答题和任务完成情况会汇总成可视化报告。</p>
        </div>
        <div className="report-grid">
          {reports.map((item) => (
            <div key={item.label} className="report-tile">
              <span>{item.label}</span>
              <strong>{item.value}</strong>
              <small>{item.note}</small>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
