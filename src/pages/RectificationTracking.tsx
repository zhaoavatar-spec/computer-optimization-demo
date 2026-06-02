import { issueInfo, rectificationRequirements } from '../data/mockData';

type Props = { next: () => void; back?: () => void };

export default function RectificationTracking({ next, back }: Props) {
  return (
    <section className="page light-page">
      <h2>整改跟踪：{issueInfo.title}</h2>
      <div className="three-col">
        <div className="panel"><h3>问题概况</h3>{[['问题编号', issueInfo.id], ['问题类型', issueInfo.type], ['风险等级', issueInfo.risk], ['所属区域', issueInfo.area], ['点位编号', issueInfo.point], ['发现时间', issueInfo.foundAt], ['派发时间', issueInfo.dispatchedAt], ['责任单位', issueInfo.unit], ['责任人', issueInfo.owner], ['整改期限', issueInfo.deadline], ['当前状态', '现场整改中']].map(([k, v]) => <p key={k}>{k}：{v}</p>)}</div>
        <div className="panel main-span"><h3>整改流程时间线</h3><div className="timeline">{['问题单已提交 2025-05-28 10:40', '责任单位已签收 2025-05-28 10:50', '现场整改中 2025-05-28 14:20', '上传整改照片 待完成', '申请复查 待完成'].map((t, i) => <div className={i < 3 ? 'done' : ''} key={t}>{t}</div>)}</div><h3>整改要求列表</h3><ul>{rectificationRequirements.map((r) => <li key={r}>{r}</li>)}</ul><h3>整改照片上传区</h3><div className="photo-grid">{['顶部防雨整改后：已上传', '电缆整理后：已上传', '接地端子近景：待上传', '周边环境复核：待上传'].map((p) => <div className="photo-tile" key={p}>{p}</div>)}</div><h3>整改说明</h3><textarea defaultValue="已完成箱体顶部遮挡加固，并对电缆进行了抬高整理。接地端子照片待补拍，计划今日16:30前完成。" /><h3>跟踪记录</h3><table><tbody><tr><td>2025-05-28 14:25</td><td>质安员张工</td><td>请尽快完成接地端子近景补拍，确保接地可靠，注意防雨积水。</td></tr><tr><td>2025-05-28 14:32</td><td>施工班组李师傅</td><td>收到，接地端子近景正在补拍中，预计16:30前上传。</td></tr></tbody></table></div>
        <aside className="panel"><h3>整改状态</h3><p>当前状态：现场整改中</p><div className="progress"><span style={{ width: '50%' }} /></div><p>整改进度：50%</p><p>已上传照片：2/4张</p><p>待补证据：2项</p><p>距整改截止：7小时20分</p><p>是否逾期：未逾期</p><p>复查状态：待申请</p></aside>
      </div>
      <div className="actions"><button>提醒责任人</button><button onClick={back}>查看原问题单</button><button className="primary" onClick={next}>提交复查申请</button></div>
    </section>
  );
}
