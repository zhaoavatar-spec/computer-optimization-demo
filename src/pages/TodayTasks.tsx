import StepBar from '../components/StepBar';
import { inspectionScopes } from '../data/mockData';

type Props = { next: () => void };

export default function TodayTasks({ next }: Props) {
  return (
    <section className="page light-page">
      <h2>今日巡检任务</h2>
      <StepBar steps={['选择巡检范围', '执行巡检', 'AI检查与记录', '提交结果']} current={0} />
      <div className="two-col">
        <div className="panel">
          <h3>巡检范围选择</h3>
          <div className="scope-grid">
            {inspectionScopes.map((scope, i) => <div className={`scope-card ${i === 0 ? 'selected' : ''}`} key={scope.name}><b>{scope.name}</b><span>{scope.risk}</span><em>{scope.count}</em></div>)}
          </div>
          <div className="weather-card"><strong>今日天气提醒</strong><div className="weather-numbers"><span>23℃</span><span>中雨预警</span><span>湿度 65%</span></div><p>建议注意防雨防滑，优先完成临边防护、临电、防水施工区的检查工作。</p></div>
        </div>
        <aside className="panel side-note"><h3>右侧 AI 建议</h3><ul><li>根据今天天气、施工计划、历史隐患和未闭环问题，系统建议优先巡检 1#主基坑区域。</li><li>基坑边坡与支护体系为高风险隐患点，请重点检查。</li><li>请携带检查设备，做好安全防护。</li></ul></aside>
      </div>
      <div className="actions"><button className="primary" onClick={next}>下一步：执行巡检</button></div>
    </section>
  );
}
