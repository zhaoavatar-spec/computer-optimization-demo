import StepBar from '../components/StepBar';
import { aiBasis, evidencePhotosDone, rectificationRequirements } from '../data/mockData';

type Props = { next: () => void; back: () => void };

export default function AiJudgement({ next, back }: Props) {
  return (
    <section className="page light-page">
      <h2>AI辅助判断：临电一区配电箱防雨检查</h2>
      <div className="info-strip"><span>任务来源：天气预警触发</span><span>原任务风险等级：中风险</span><span>点位编号：LD-01</span><span>检查人员：张工</span><span>检查时间：2025-05-28 10:18</span><span>已上传照片：4张</span><span>检查清单：6项</span></div>
      <StepBar steps={['选择巡检范围完成', '执行巡检完成', 'AI检查与记录', '提交结果']} current={2} />
      <div className="three-col">
        <div className="panel"><h3>现场证据照片</h3><div className="photo-stack">{evidencePhotosDone.map((p) => <div className="mock-photo" key={p}>{p}</div>)}</div></div>
        <div className="panel main-span"><h3>AI辅助判断结果</h3><div className="ai-result">AI综合判断：存在一般风险，待人工确认</div><h4>判断依据</h4><ul>{aiBasis.map((b) => <li key={b}>{b}</li>)}</ul><div className="risk-grid"><span>AI建议风险等级：一般风险</span><span>原任务风险等级：中风险</span><span>结论状态：待人工确认</span></div><h4>整改建议</h4><ul>{rectificationRequirements.map((r) => <li key={r}>{r}</li>)}</ul></div>
        <aside className="panel"><h3>证据完整性</h3><p>已上传照片 4/4</p><p>AI已分析照片 4张</p><p>建议补拍照片 1张</p><p>检查清单完成 6/6</p></aside>
      </div>
      <div className="actions"><button onClick={back}>返回补拍</button><button className="primary" onClick={next}>进入人工确认</button></div>
    </section>
  );
}
