import { aiBasis, evidencePhotosDone } from '../data/mockData';

type Props = { next: () => void; back: () => void };

export default function ManualConfirm({ next, back }: Props) {
  return (
    <section className="page light-page">
      <h2>人工确认：临电一区配电箱防雨检查</h2>
      <div className="three-col">
        <div className="panel"><h3>现场取证照片</h3><div className="photo-stack">{evidencePhotosDone.map((p) => <div className="mock-photo" key={p}>{p}</div>)}</div></div>
        <div className="panel"><h3>AI辅助判断摘要</h3><div className="ai-result small">存在一般风险，待人工确认</div><ul>{aiBasis.slice(0, 3).map((b) => <li key={b}>{b}</li>)}</ul></div>
        <aside className="panel"><h3>人工确认结论</h3>{['确认存在问题', '证据不足，要求补拍', '确认无问题'].map((v, i) => <label className="radio-card" key={v}><input type="radio" name="manual" defaultChecked={i === 0} />{v}</label>)}<h3>人工确认备注</h3><textarea defaultValue="经现场核查，配电箱顶部防雨措施不足，电缆局部贴地，接地端子照片不清晰，确认存在一般安全隐患，建议生成问题单并督促整改。" /></aside>
      </div>
      <div className="actions"><button onClick={back}>返回AI判断</button><button>返回补拍</button><button>确认无问题并归档</button><button className="primary" onClick={next}>生成问题单</button></div>
    </section>
  );
}
