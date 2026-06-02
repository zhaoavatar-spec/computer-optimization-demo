import { useState } from 'react';
import { evidencePhotosDone, issueInfo } from '../data/mockData';

type Props = { back: () => void };

export default function RectificationReview({ back }: Props) {
  const [archived, setArchived] = useState(false);
  return (
    <section className="page light-page">
      <h2>整改复查：{issueInfo.title}</h2>
      {archived && <div className="success-banner">问题已完成闭环并归档。</div>}
      <div className="three-col">
        <div className="panel"><h3>问题概况</h3><p>问题编号：{issueInfo.id}</p><p>风险等级：{issueInfo.risk}</p><p>责任单位：{issueInfo.unit}</p><h3>原问题证据缩略图</h3><div className="photo-stack">{evidencePhotosDone.map((p) => <div className="mock-photo small" key={p}>{p}</div>)}</div></div>
        <div className="panel main-span"><h3>整改前后对比</h3><table><thead><tr><th>复查项</th><th>整改前</th><th>整改后</th><th>AI复查结果</th></tr></thead><tbody>{['箱体顶部防雨', '接地端子近景', '电缆走向'].map((r) => <tr key={r}><td>{r}</td><td>存在隐患</td><td>已整改</td><td>符合销项条件</td></tr>)}</tbody></table><h3>复查清单核验</h3><div className="check-list">{['防雨遮挡是否到位：符合', '接地端子是否清晰可靠：符合', '电缆是否离地固定：符合', '周边是否仍有积水风险：基本符合'].map((x) => <span key={x}>{x}</span>)}</div><h3>人工复查结论</h3>{['通过销项', '退回整改', '升级处理'].map((v, i) => <label className="radio-card inline" key={v}><input type="radio" name="review" defaultChecked={i === 0} />{v}</label>)}<h3>复查意见</h3><textarea defaultValue="整改基本到位，箱体顶部防雨遮挡已补充，电缆已抬高固定，接地端子照片已补充，满足复查要求，同意销项。" /></div>
        <aside className="panel"><h3>AI 复查建议</h3><ul><li>箱体顶部遮挡已完善，建议现场再确认固定牢靠性；</li><li>接地端子照片已补充，连接状态清晰可见；</li><li>电缆已明显抬高固定，复查后可通过销项；</li><li>历史同类问题发生1次，建议后续雨前巡检继续关注。</li></ul><div className="ai-result">AI综合建议：建议通过销项</div></aside>
      </div>
      <div className="actions"><button onClick={back}>查看问题详情</button><button>退回整改</button><button className="primary" onClick={() => setArchived(true)}>通过销项</button><button>升级处理</button></div>
    </section>
  );
}
