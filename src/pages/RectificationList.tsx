import StatCard from '../components/StatCard';
import { issueList } from '../data/mockData';

type Props = { openTracking: () => void };

export default function RectificationList({ openTracking }: Props) {
  return (
    <section className="page light-page">
      <h2>整改闭环</h2>
      <div className="workflow"><StatCard label="今日生成问题单" value="8项" /><StatCard label="已整改" value="5项" tone="green" /><StatCard label="待整改" value="3项" tone="orange" /><StatCard label="逾期" value="1项" tone="red" /></div>
      <div className="panel"><h3>问题列表</h3><table><thead><tr><th>问题编号</th><th>问题标题</th><th>风险等级</th><th>责任单位</th><th>责任人</th><th>整改期限</th><th>当前状态</th><th>操作</th></tr></thead><tbody>{issueList.map((i) => <tr key={i.id}><td>{i.id}</td><td>{i.title}</td><td>{i.risk}</td><td>{i.unit}</td><td>{i.owner}</td><td>{i.deadline}</td><td>{i.status}</td><td><button onClick={openTracking}>查看详情</button></td></tr>)}</tbody></table></div>
    </section>
  );
}
