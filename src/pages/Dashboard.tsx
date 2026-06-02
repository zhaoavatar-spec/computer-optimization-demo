import { dashboardReminders, keyTasks, workflowStats } from '../data/mockData';
import StatCard from '../components/StatCard';
import type { PageKey } from '../types';

type Props = { onNavigate: (key: PageKey) => void };

export default function Dashboard({ onNavigate }: Props) {
  return (
    <section className="page dashboard-page">
      <div className="hero-grid">
        <div className="glass-card ai-card wide">
          <div className="eyebrow">AI 智慧监察助理</div>
          <h2>张工，上午好！</h2>
          <p>我已综合分析今日天气、施工计划、隐蔽工程节点、昨日问题及上传资料，为您生成以下重点提醒。</p>
          <div className="reminder-row">{dashboardReminders.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
        <div className="glass-card right-panel">
          <h3>右侧信息栏</h3>
          <ul>
            <li>AI 今日提醒：3 项高优先级</li>
            <li>待确认事项：2 项需人工确认</li>
            <li>今日闭环结果：3 项已销项</li>
          </ul>
          <button className="primary full">生成今日质安日报</button>
        </div>
      </div>
      <div className="workflow">{workflowStats.map((item, i) => <StatCard key={item.label} label={item.label} value={item.value} tone={i === 5 ? 'orange' : 'cyan'} />)}</div>
      <div className="glass-card">
        <div className="section-title"><h3>今日重点任务</h3><button onClick={() => onNavigate('tasks')}>进入今日任务</button></div>
        <table className="dark-table">
          <thead><tr><th>优先级</th><th>任务名称</th><th>触发原因</th><th>AI 提示建议</th><th>状态</th><th>操作</th></tr></thead>
          <tbody>{keyTasks.map((task) => <tr key={task.task}><td><span className={`tag ${task.priority === '高' ? 'danger' : 'warn'}`}>{task.priority}</span></td><td>{task.task}</td><td>{task.trigger}</td><td>{task.advice}</td><td>{task.status}</td><td><button onClick={() => onNavigate('tasks')}>查看</button></td></tr>)}</tbody>
        </table>
      </div>
    </section>
  );
}
