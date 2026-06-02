import {
  dashboardEvents,
  dashboardMetrics,
  dashboardReminders,
  dashboardRiskPanels,
  dashboardTaskRows,
  dashboardTrendBars,
  workflowStats,
} from '../data/mockData';
import type { PageKey } from '../types';

type Props = { onNavigate: (key: PageKey) => void };

export default function Dashboard({ onNavigate }: Props) {
  return (
    <section className="page dashboard-page hd-dashboard">
      <div className="dashboard-command-head">
        <div>
          <span className="command-kicker">AI QUALITY & SAFETY COMMAND CENTER</span>
          <h2>首页总览</h2>
          <p>建设期质量安全全过程监督 · AI 风险预警 · 隐患闭环 · 可视化管理</p>
        </div>
        <div className="command-weather">
          <strong>中雨预警</strong>
          <span>23℃ / 湿度 65%</span>
          <span>今日重点任务 12 项</span>
        </div>
      </div>

      <div className="dashboard-metric-strip">
        {dashboardMetrics.map((item) => (
          <div className={`command-metric ${item.tone}`} key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
            <em>{item.sub}</em>
          </div>
        ))}
      </div>

      <div className="command-layout">
        <aside className="command-column left">
          <div className="command-card ai-overview-card">
            <div className="card-title-row">
              <h3>AI 智慧监督提醒</h3>
              <span className="live-dot">实时</span>
            </div>
            <div className="ai-greeting">张工，上午好！</div>
            <p>系统已综合天气、施工计划、隐蔽工程节点、昨日问题及上传资料，生成今日质安监督重点。</p>
            <div className="reminder-list">
              {dashboardReminders.map((item, index) => (
                <div className="reminder-item" key={item}>
                  <b>0{index + 1}</b>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="command-card">
            <div className="card-title-row"><h3>风险分布</h3><span>Risk Map</span></div>
            <div className="risk-panel-list">
              {dashboardRiskPanels.map((item) => (
                <div className="risk-panel-row" key={item.area}>
                  <div>
                    <strong>{item.area}</strong>
                    <span>{item.desc}</span>
                  </div>
                  <em className={item.level === '高' ? 'danger-text' : 'warn-text'}>{item.level}</em>
                </div>
              ))}
            </div>
          </div>
        </aside>

        <main className="command-center">
          <div className="command-card site-map-card">
            <div className="site-map-grid">
              <div className="site-zone zone-a"><span>1# 主基坑</span><b>高风险</b></div>
              <div className="site-zone zone-b"><span>清水池</span><b>隐蔽验收</b></div>
              <div className="site-zone zone-c"><span>防水施工区</span><b>整改中</b></div>
              <div className="site-zone zone-d"><span>临电一区</span><b>雨前复查</b></div>
              <div className="site-axis x-axis" />
              <div className="site-axis y-axis" />
              <div className="scan-ring ring-one" />
              <div className="scan-ring ring-two" />
            </div>
            <div className="map-legend">
              <span><i className="danger-bg" />高风险</span>
              <span><i className="warn-bg" />待确认</span>
              <span><i className="ok-bg" />正常巡检</span>
            </div>
          </div>

          <div className="workflow command-workflow">
            {workflowStats.map((item, index) => (
              <div className="workflow-node" key={item.label}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{item.value}</strong>
                <em>{item.label}</em>
              </div>
            ))}
          </div>

          <div className="command-card command-table-card">
            <div className="section-title command-section-title">
              <div>
                <h3>今日重点任务</h3>
                <span>按 AI 风险优先级自动排序</span>
              </div>
              <button onClick={() => onNavigate('tasks')}>进入今日任务</button>
            </div>
            <table className="dark-table command-task-table">
              <thead>
                <tr>
                  <th>优先级</th>
                  <th>任务名称</th>
                  <th>触发原因</th>
                  <th>责任区域</th>
                  <th>AI 提示建议</th>
                  <th>状态</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                {dashboardTaskRows.map((task) => (
                  <tr key={task.task}>
                    <td><span className={`tag ${task.priority === '高' ? 'danger' : 'warn'}`}>{task.priority}</span></td>
                    <td>{task.task}</td>
                    <td>{task.trigger}</td>
                    <td>{task.area}</td>
                    <td>{task.advice}</td>
                    <td><span className="status-pill blue">{task.status}</span></td>
                    <td><button onClick={() => onNavigate('tasks')}>查看</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>

        <aside className="command-column right">
          <div className="command-card">
            <div className="card-title-row"><h3>右侧信息栏</h3><span>Today</span></div>
            <div className="right-stat-stack">
              <div><span>AI 今日提醒</span><strong>3</strong><em>高优先级</em></div>
              <div><span>待确认事项</span><strong>2</strong><em>需人工确认</em></div>
              <div><span>今日闭环结果</span><strong>3</strong><em>已销项</em></div>
            </div>
            <button className="primary full">生成今日质安日报</button>
          </div>

          <div className="command-card">
            <div className="card-title-row"><h3>趋势监测</h3><span>7 Days</span></div>
            <div className="trend-bars">
              {dashboardTrendBars.map((item) => (
                <div className="trend-row" key={item.day}>
                  <span>{item.day}</span>
                  <div><i style={{ width: `${item.value}%` }} /></div>
                  <b>{item.value}</b>
                </div>
              ))}
            </div>
          </div>

          <div className="command-card">
            <div className="card-title-row"><h3>现场动态</h3><span>Event</span></div>
            <div className="event-list">
              {dashboardEvents.map((item) => (
                <div className="event-item" key={`${item.time}-${item.text}`}>
                  <b>{item.time}</b>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
