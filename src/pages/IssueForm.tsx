import { evidencePhotosDone, issueInfo, rectificationRequirements } from '../data/mockData';

type Props = { next: () => void; back: () => void };

export default function IssueForm({ next, back }: Props) {
  return (
    <section className="page light-page">
      <h2>生成问题单：临电一区配电箱防雨检查</h2>
      <div className="three-col">
        <div className="panel"><h3>问题证据照片</h3><div className="photo-stack">{evidencePhotosDone.map((p) => <div className="mock-photo" key={p}>{p}</div>)}</div></div>
        <div className="panel main-span"><h3>问题信息表单</h3><div className="form-grid"><span>问题标题：{issueInfo.title}</span><span>问题编号：{issueInfo.id}</span><span>问题类型：{issueInfo.type}</span><span>风险等级：{issueInfo.risk}</span><span>发现时间：{issueInfo.foundAt}</span><span>发现人员：{issueInfo.inspector}</span><span>所属区域：{issueInfo.area}</span><span>点位编号：{issueInfo.point}</span></div><h4>问题描述</h4><p>经现场检查及AI辅助分析，临电一区配电箱顶部防雨遮挡不完整，局部存在雨水进入风险；电缆进出线区域存在贴地情况，雨天可能形成积水隐患；接地端子照片不够清晰，需补充近景照片与复核接地可靠性。</p><h4>整改要求</h4><ul>{rectificationRequirements.map((r) => <li key={r}>{r}</li>)}</ul></div>
        <aside className="panel"><h3>责任单位与整改期限</h3><p>责任单位：{issueInfo.unit}</p><p>责任人：{issueInfo.owner}</p><p>整改期限：{issueInfo.deadline}</p><p>抄送单位：项目部、监理单位</p><p>通知方式：系统通知、短信提醒、微信提醒</p><h3>来源依据</h3><ul><li>AI辅助判断：存在一般风险</li><li>人工确认：确认存在问题</li><li>现场证据：4张照片</li><li>检查清单：6项检查记录</li><li>任务来源：天气预警触发</li></ul></aside>
      </div>
      <div className="actions"><button onClick={back}>返回人工确认</button><button>保存草稿</button><button className="primary" onClick={next}>提交问题单</button></div>
    </section>
  );
}
