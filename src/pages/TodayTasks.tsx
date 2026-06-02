import StepBar from '../components/StepBar';
import { inspectionScopeCards, inspectionScopeRows, taskSummaryCards } from '../data/mockData';

type Props = { next: () => void };

export default function TodayTasks({ next }: Props) {
  return (
    <section className="page light-page task-select-page">
      <div className="task-page-head">
        <div>
          <span className="gov-kicker">TODAY INSPECTION TASK</span>
          <h2>今日巡检任务</h2>
          <p>根据天气预警、施工计划、历史隐患与未闭环问题，选择今日重点巡检范围。</p>
        </div>
        <div className="task-head-actions">
          <button>导出计划</button>
          <button className="primary" onClick={next}>下一步：执行巡检</button>
        </div>
      </div>

      <StepBar steps={['选择巡检范围', '执行巡检', 'AI检查与记录', '提交结果']} current={0} />

      <div className="task-summary-strip">
        {taskSummaryCards.map((item) => (
          <div className="task-summary-card" key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
            <em>{item.sub}</em>
          </div>
        ))}
      </div>

      <div className="task-layout-grid">
        <main className="task-main-stack">
          <div className="panel task-filter-panel">
            <div className="section-title gov-section-title">
              <div>
                <h3>巡检范围选择</h3>
                <span>系统已按风险等级与计划节点推荐优先级</span>
              </div>
              <div className="segmented-control"><button className="active">全部</button><button>高风险</button><button>待验收</button></div>
            </div>

            <div className="scope-card-grid dense">
              {inspectionScopeCards.map((scope, index) => (
                <div className={`scope-card govt ${index === 0 ? 'selected' : ''}`} key={scope.name}>
                  <div className="scope-card-head">
                    <b>{scope.name}</b>
                    <span className={scope.risk === '高风险' ? 'risk-danger' : 'risk-warn'}>{scope.risk}</span>
                  </div>
                  <p>{scope.desc}</p>
                  <div className="scope-meta-row"><span>{scope.count}</span><span>{scope.owner}</span><span>{scope.time}</span></div>
                </div>
              ))}
            </div>
          </div>

          <div className="panel task-table-panel">
            <div className="section-title gov-section-title">
              <div><h3>今日推荐巡检清单</h3><span>点击下一步后进入执行巡检流程</span></div>
              <button>批量选择</button>
            </div>
            <table className="gov-table">
              <thead>
                <tr>
                  <th>选择</th>
                  <th>巡检区域</th>
                  <th>风险等级</th>
                  <th>检查项</th>
                  <th>触发原因</th>
                  <th>责任人</th>
                  <th>计划时间</th>
                  <th>状态</th>
                </tr>
              </thead>
              <tbody>
                {inspectionScopeRows.map((row, index) => (
                  <tr key={row.area}>
                    <td><span className={`check-dot ${index < 3 ? 'checked' : ''}`} /></td>
                    <td><strong>{row.area}</strong><em>{row.code}</em></td>
                    <td><span className={`tag ${row.risk === '高' ? 'danger' : 'warn'}`}>{row.risk}</span></td>
                    <td>{row.items}</td>
                    <td>{row.trigger}</td>
                    <td>{row.owner}</td>
                    <td>{row.time}</td>
                    <td><span className="status-pill blue">{row.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>

        <aside className="task-side-stack">
          <div className="panel weather-gov-card">
            <div className="card-title-row"><h3>今日天气提醒</h3><span>Weather</span></div>
            <div className="weather-main-value"><strong>23℃</strong><span>中雨预警</span></div>
            <div className="weather-detail-grid"><span>湿度 65%</span><span>东南风 3级</span><span>降雨概率 78%</span><span>能见度 8km</span></div>
            <p>建议优先完成临边防护、临电、防水施工区检查，雨前完成风险点复查。</p>
          </div>

          <div className="panel ai-advice-card">
            <div className="card-title-row"><h3>右侧 AI 建议</h3><span>AI</span></div>
            <ul>
              <li>系统建议优先巡检 1# 主基坑区域，重点检查边坡、支护体系及临边防护。</li>
              <li>临电一区受中雨预警影响，请雨前核验防雨、接地与电缆状态。</li>
              <li>清水池穿墙套管节点临近隐蔽时间，请补齐止水环近景与验收签字。</li>
              <li>执行巡检时请携带拍照设备，按全景、近景、关键节点顺序留痕。</li>
            </ul>
          </div>

          <div className="panel task-process-card">
            <div className="card-title-row"><h3>巡检准备</h3><span>Ready</span></div>
            <div className="prepare-list">
              <span><b>01</b>检查设备已确认</span>
              <span><b>02</b>责任区域已匹配</span>
              <span><b>03</b>影像留痕模板已生成</span>
              <span><b>04</b>整改闭环规则已加载</span>
            </div>
          </div>
        </aside>
      </div>

      <div className="actions sticky-task-actions">
        <button>保存选择</button>
        <button className="primary" onClick={next}>下一步：执行巡检</button>
      </div>
    </section>
  );
}
