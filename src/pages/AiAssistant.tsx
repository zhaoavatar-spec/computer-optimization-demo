export default function AiAssistant() {
  const quick = ['今天先查什么？', '哪些问题未闭环？', '帮我生成检查建议', '临电检查要拍什么？', '查看隐蔽节点', '生成今日质安日报'];
  return (
    <section className="page light-page assistant-page">
      <h2>AI智慧助手</h2>
      <div className="two-col wide-left">
        <div className="panel chat-panel">
          <div className="welcome">张工，上午好！当前济钢水厂建设项目存在中雨预警，今日建议优先关注临电、防水、基坑临边和隐蔽节点留痕工作。你可以直接问我：“今天先查什么？”“哪个问题快逾期？”“临电检查要拍哪些照片？”“生成今日质安小结”。</div>
          <div className="chat user">今天先查什么？</div><div className="chat ai">建议优先检查临电一区配电箱防雨、清水池穿墙套管隐蔽留痕、基坑一区南侧临边防护复查。</div>
          <div className="chat user">临电一区为什么优先？</div><div className="chat ai">该任务由中雨预警触发，临时用电区域存在防雨、积水、电缆拖地和接地不清晰等风险，建议雨前完成检查。</div>
          <div className="chat user">临电检查需要拍哪些照片？</div><div className="chat ai">建议拍摄配电箱全景、箱体近景、接地与电缆、周边环境四类照片，确保能够全面判断防雨、接地和电缆状态。</div>
          <div className="quick-row">{quick.map((q) => <button key={q}>{q}</button>)}</div>
          <div className="input-bar"><input placeholder="请输入您的问题，例如：哪个问题快逾期？" /><button className="primary">发送</button></div>
        </div>
        <aside className="panel"><h3>项目态势概览</h3>{[['今日任务','12'],['已完成','7'],['待检查','5'],['AI辅助分析','8次'],['今日生成问题单','8'],['已整改','5'],['待整改','3'],['逾期','1'],['待归档资料','3'],['隐蔽节点已归档','4'],['资料缺项','2']].map(([k,v]) => <div className="metric" key={k}><span>{k}</span><b>{v}</b></div>)}</aside>
      </div>
    </section>
  );
}
