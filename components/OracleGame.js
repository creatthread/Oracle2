import { useState, useEffect } from "react";

const oracleData = [
  { oracleChar: "/games/guess/images/oracle1.png", modernChar: "安" },
  { oracleChar: "/games/guess/images/oracle2.png", modernChar: "鼻" },
  { oracleChar: "/games/guess/images/oracle3.png", modernChar: "白" },
  { oracleChar: "/games/guess/images/oracle4.png", modernChar: "百" },
  { oracleChar: "/games/guess/images/oracle5.png", modernChar: "宝" },
  { oracleChar: "/games/guess/images/oracle6.png", modernChar: "朝" },
  { oracleChar: "/games/guess/images/oracle7.png", modernChar: "车" },
  { oracleChar: "/games/guess/images/oracle8.png", modernChar: "冬" },
  { oracleChar: "/games/guess/images/oracle9.png", modernChar: "骑" },
  { oracleChar: "/games/guess/images/oracle10.png", modernChar: "兵" }
];

export default function OracleGame() {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [options, setOptions] = useState([]);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    initGame();
  }, []);

  function initGame() {
    setFeedback("");
    const question = oracleData[Math.floor(Math.random() * oracleData.length)];
    setCurrentQuestion(question);

    const allOptions = [question.modernChar];
    while (allOptions.length < 4) {
      const randomChar = oracleData[Math.floor(Math.random() * oracleData.length)].modernChar;
      if (!allOptions.includes(randomChar)) {
        allOptions.push(randomChar);
      }
    }
    setOptions(allOptions.sort(() => Math.random() - 0.5));
  }

  function checkAnswer(selectedChar) {
    if (selectedChar === currentQuestion.modernChar) {
      setFeedback("✅ 正确！");
    } else {
      setFeedback(`❌ 错误，正确答案是：${currentQuestion.modernChar}`);
    }
    setTimeout(initGame, 1300);
  }

  if (!currentQuestion) return <div>加载中...</div>;

  return (
    <div style={{ textAlign: "center", padding: "20px", width: "100%" }}>
      <h1>甲骨文挑战</h1>
      <div style={{
        width: "150px",
        height: "150px",
        margin: "20px auto",
        border: "2px solid #666",
        backgroundImage: `url(${currentQuestion.oracleChar})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgba(255,255,255,0.7)",
        borderRadius: "8px"
      }}></div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "10px",
        width: "100%", /* 移除 maxWidth 限制 */
        margin: "20px auto"
      }}>
        {options.map((char, index) => (
          <button key={index}
            style={{
              padding: "15px",
              fontSize: "18px",
              cursor: "pointer",
              backgroundColor: "#f0f0f0",
              border: "2px solid #ccc",
              borderRadius: "5px",
              transition: "all 0.3s",
              width: "100%" /* 确保按钮占满网格单元 */
            }}
            onClick={() => checkAnswer(char)}>
            {char}
          </button>
        ))}
      </div>

      <div style={{
        height: "30px",
        margin: "15px 0",
        fontSize: "20px",
        fontWeight: "bold",
        color: feedback.includes("✅") ? "green" : "red"
      }}>
        {feedback}
      </div>
    </div>
  );
}
