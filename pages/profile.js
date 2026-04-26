import { useState } from "react";
import SiteLayout from "@/components/SiteLayout";

const benefits = ["漫剧全系列", "全部小游戏", "AR/VR体验", "成长档案导出"];

const rewards = [
  {
    title: "线下绘本套装",
    points: 800,
    desc: "适合亲子共读",
    tag: "亲子共读",
    cover: "📚",
    service: "快递到家",
    stock: 26,
    detail: "包含甲骨文字形启蒙绘本、亲子共读任务卡和贴纸奖励",
  },
  {
    title: "甲骨文文创盲盒",
    points: 520,
    desc: "字形贴纸与徽章",
    tag: "文创好物",
    cover: "🎁",
    service: "快递到家",
    stock: 48,
    detail: "随机获得甲骨文字形贴纸、徽章、书签等文创周边",
  },
  {
    title: "体验馆参观券",
    points: 900,
    desc: "线下研学预约",
    tag: "研学预约",
    cover: "🎫",
    service: "到店核销",
    stock: 12,
    detail: "可预约线下体验馆参观，适合亲子研学与班级活动",
  },
  {
    title: "夜校体验课",
    points: 950,
    desc: "周末主题课堂",
    tag: "主题课堂",
    cover: "🏫",
    service: "到店核销",
    stock: 8,
    detail: "周末甲骨文主题体验课，含字形讲解、互动游戏和作品制作",
  },
];

const posts = [
  "今天孩子把“水”的甲骨文字形画成了河流，很有画面感。",
  "小马过河适合两人PK，课堂气氛一下起来了。",
  "希望后续加一个班级排行榜，方便老师做活动。",
];

const dailyTasks = ["看完1集漫剧", "完成1次配对游戏", "提交1份课后任务"];

export default function Profile() {
  const [points, setPoints] = useState(1280);
  const [notice, setNotice] = useState("完成任务和小游戏可继续获得积分。");
  const [modal, setModal] = useState(null);
  const [orderForm, setOrderForm] = useState({
    name: "",
    phone: "",
    address: "",
    remark: "",
  });

  function redeem(item) {
    if (points < item.points) {
      setModal({
        type: "insufficient",
        item,
        shortage: item.points - points,
      });
      return;
    }

    setModal({
      type: "checkout",
      item,
    });
  }

  function updateOrderForm(field, value) {
    setOrderForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function submitOrder(e) {
    e.preventDefault();

    const item = modal?.item;
    if (!item) return;

    if (!orderForm.name.trim()) {
      setModal({
        type: "formError",
        message: "请填写收件人姓名。",
        item,
      });
      return;
    }

    if (!orderForm.phone.trim()) {
      setModal({
        type: "formError",
        message: "请填写联系电话。",
        item,
      });
      return;
    }

    if (item.service === "快递到家" && !orderForm.address.trim()) {
      setModal({
        type: "formError",
        message: "请填写快递地址。",
        item,
      });
      return;
    }

    setPoints((prev) => prev - item.points);
    setNotice(`已成功兑换“${item.title}”，订单正在处理中。`);

    setModal({
      type: "success",
      item,
      orderNo: `JG${Date.now().toString().slice(-8)}`,
    });

    setOrderForm({
      name: "",
      phone: "",
      address: "",
      remark: "",
    });
  }

  function closeModal() {
    setModal(null);
  }

  return (
    <SiteLayout>
      <section className="page-hero compact-hero">
        <p className="eyebrow">个人中心</p>
        <h1>会员权益、积分商城、线下兑换和社区互动集中呈现。</h1>
        <p>这里承接孩子的学习成果，也把线上内容自然导向线下绘本、文创和体验活动。</p>
      </section>

      <section className="content-band profile-dashboard">
        <div className="profile-summary">
          <div className="profile-avatar">溪</div>
          <div>
            <span className="member-badge">年度会员</span>
            <h2>林溪同学的甲骨文成长档案</h2>
            <p>本周学习进度 72%，继续完成任务可解锁新的线下兑换权益。</p>
            <div className="progress-track">
              <span style={{ width: "72%" }} />
            </div>
          </div>
        </div>
        <div className="stat-strip">
          <div>
            <span>当前积分</span>
            <strong>{points}</strong>
          </div>
          <div>
            <span>连续学习</span>
            <strong>7天</strong>
          </div>
          <div>
            <span>已识字形</span>
            <strong>38个</strong>
          </div>
        </div>
      </section>

      <section className="content-band profile-layout">
        <div className="membership-panel">
          <span className="member-badge">会员权益</span>
          <h2>全内容解锁中</h2>
          <div className="benefit-list">
            {benefits.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="daily-card">
            <strong>今日待办</strong>
            {dailyTasks.map((task) => (
              <label key={task}>
                <input type="checkbox" />
                {task}
              </label>
            ))}
          </div>
        </div>

        <div className="points-panel">
          <span>积分提醒</span>
          <strong>{points}</strong>
          <p>{notice}</p>
        </div>
      </section>

      <section className="content-band">
        <div className="section-heading">
          <p className="eyebrow">Points Mall</p>
          <h2>积分商城</h2>
          <p>玩游戏、看漫剧、完成任务获得积分，兑换线下绘本、文创和体验课程。</p>
        </div>

        <div className="reward-grid mall-grid">
          {rewards.map((item) => (
            <article key={item.title} className="reward-card mall-card">
              <div className="mall-card-top">
                <div className="reward-cover">{item.cover}</div>
                <div>
                  <span className="reward-chip">{item.desc}</span>
                  <h3>{item.title}</h3>
                </div>
              </div>

              <p className="reward-detail">{item.detail}</p>

              <div className="reward-meta">
                <span>{item.service}</span>
                <span>库存 {item.stock}</span>
              </div>

              <div className="reward-bottom">
                <div>
                  <strong>{item.points}</strong>
                  <span> 积分</span>
                </div>
                <button type="button" className="btn secondary" onClick={() => redeem(item)}>
                  立即兑换
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-band split-band">
        <form className="delivery-form checkout-card">
          <div className="section-heading left">
            <p className="eyebrow">Offline Goods</p>
            <h2>线下产品兑换入口</h2>
          </div>
          <label>
            收件人
            <input placeholder="请输入姓名" />
          </label>
          <label>
            联系电话
            <input placeholder="请输入手机号" />
          </label>
          <label>
            快递地址
            <textarea placeholder="填写线下产品寄送地址" />
          </label>
          <button type="button" className="btn primary">
            提交兑换信息
          </button>
        </form>

        <div className="community-panel">
          <div className="section-heading left">
            <p className="eyebrow">Community</p>
            <h2>社区互动</h2>
          </div>
          {posts.map((post) => (
            <div key={post} className="community-post">
              <p>{post}</p>
            </div>
          ))}
        </div>
      </section>

      {modal && (
        <div className="mall-modal-mask" onClick={closeModal}>
          <div className="mall-modal" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="modal-close" onClick={closeModal}>
              ×
            </button>

            {modal.type === "insufficient" && (
              <div className="mall-message">
                <div className="modal-icon warning">!</div>
                <h2>积分不足</h2>
                <p>
                  兑换“{modal.item.title}”需要 {modal.item.points} 积分，
                  你当前有 {points} 积分，还需要{" "}
                  <strong>{modal.shortage}</strong> 分。
                </p>
                <div className="modal-actions">
                  <button type="button" className="btn secondary" onClick={closeModal}>
                    我知道了
                  </button>
                  <button
                    type="button"
                    className="btn primary"
                    onClick={() => {
                      closeModal();
                      setNotice("完成今日任务、小游戏和漫剧观看可继续获得积分。");
                    }}
                  >
                    去做任务
                  </button>
                </div>
              </div>
            )}

            {modal.type === "checkout" && (
              <form className="mall-order-form" onSubmit={submitOrder}>
                <div className="order-title">
                  <p className="eyebrow">Confirm Order</p>
                  <h2>确认兑换订单</h2>
                  <p>请确认商品信息，并填写领取信息。</p>
                </div>

                <div className="order-goods-card">
                  <div className="order-cover">{modal.item.cover}</div>
                  <div>
                    <h3>{modal.item.title}</h3>
                    <p>{modal.item.detail}</p>
                    <span>{modal.item.service}</span>
                  </div>
                  <strong>{modal.item.points} 积分</strong>
                </div>

                <div className="order-form-grid">
                  <label>
                    收件人 / 预约人
                    <input
                      value={orderForm.name}
                      onChange={(e) => updateOrderForm("name", e.target.value)}
                      placeholder="请输入姓名"
                    />
                  </label>

                  <label>
                    联系电话
                    <input
                      value={orderForm.phone}
                      onChange={(e) => updateOrderForm("phone", e.target.value)}
                      placeholder="请输入手机号"
                    />
                  </label>
                </div>

                {modal.item.service === "快递到家" && (
                  <label className="order-full">
                    快递地址
                    <textarea
                      value={orderForm.address}
                      onChange={(e) => updateOrderForm("address", e.target.value)}
                      placeholder="请输入详细地址，如省市区、街道、小区、门牌号"
                    />
                  </label>
                )}

                <label className="order-full">
                  备注
                  <textarea
                    value={orderForm.remark}
                    onChange={(e) => updateOrderForm("remark", e.target.value)}
                    placeholder="可填写配送时间、预约时间或其他说明"
                  />
                </label>

                <div className="order-summary">
                  <div>
                    <span>当前积分</span>
                    <strong>{points}</strong>
                  </div>
                  <div>
                    <span>本次抵扣</span>
                    <strong>-{modal.item.points}</strong>
                  </div>
                  <div>
                    <span>兑换后剩余</span>
                    <strong>{points - modal.item.points}</strong>
                  </div>
                </div>

                <div className="modal-actions">
                  <button type="button" className="btn secondary" onClick={closeModal}>
                    取消
                  </button>
                  <button type="submit" className="btn primary">
                    确认兑换
                  </button>
                </div>
              </form>
            )}

            {modal.type === "formError" && (
              <div className="mall-message">
                <div className="modal-icon warning">!</div>
                <h2>信息不完整</h2>
                <p>{modal.message}</p>
                <div className="modal-actions">
                  <button
                    type="button"
                    className="btn primary"
                    onClick={() =>
                      setModal({
                        type: "checkout",
                        item: modal.item,
                      })
                    }
                  >
                    返回填写
                  </button>
                </div>
              </div>
            )}

            {modal.type === "success" && (
              <div className="mall-message">
                <div className="modal-icon success">✓</div>
                <h2>兑换成功</h2>
                <p>
                  你已成功兑换“{modal.item.title}”，订单编号：
                  <strong>{modal.orderNo}</strong>
                </p>
                <p>工作人员将根据填写信息进行配送或预约核销。</p>
                <div className="modal-actions">
                  <button type="button" className="btn primary" onClick={closeModal}>
                    完成
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </SiteLayout>
  );
}