import StatCard from '../components/StatCard';
import { hiddenNodes, hiddenNodeStats } from '../data/mockData';

export default function HiddenNodes() {
  return (
    <section className="page hidden-page">
      <h2>隐蔽节点</h2>
      <p className="page-desc">统一管理济钢水厂建设过程中的关键隐蔽部位，跟踪计划隐蔽时间、验收状态、证据完整性与归档情况。</p>
      <div className="workflow">{hiddenNodeStats.map((s, i) => <StatCard key={s.label} label={s.label} value={s.value} tone={i === 4 ? 'orange' : 'cyan'} />)}</div>
      <div className="two-col wide-left">
        <div className="glass-card"><h3>节点列表</h3><table className="dark-table"><thead><tr><th>节点名称</th><th>节点编号</th><th>所属区域</th><th>节点类型</th><th>风险等级</th><th>计划隐蔽时间</th><th>当前状态</th><th>AI提示</th><th>操作</th></tr></thead><tbody>{hiddenNodes.map((n) => <tr key={n.id}><td>{n.name}</td><td>{n.id}</td><td>{n.area}</td><td>{n.type}</td><td>{n.risk}</td><td>{n.time}</td><td>{n.status}</td><td>{n.ai}</td><td><button>查看</button></td></tr>)}</tbody></table></div>
        <aside className="glass-card"><h3>AI 重点提醒</h3><ul><li>清水池穿墙套管节点今日16:00计划隐蔽，请在隐蔽前完成验收。</li><li>池壁止水钢板节点焊接搭接照片，建议补拍。</li><li>管沟回填前检查节点已关联问题单，需完成整改后方可归档。</li></ul><h3>今日隐蔽计划</h3><p>16:00 穿墙套管节点验收；17:30 止水钢板复核。</p><h3>资料缺项提示</h3><p>止水环近景、焊接搭接、基层清理全景共 3 项待补。</p></aside>
      </div>
      <div className="actions"><button>导出隐蔽节点台账</button><button>查看今日待验收</button><button className="primary">生成隐蔽节点提醒</button><button>查看已归档节点</button></div>
    </section>
  );
}
