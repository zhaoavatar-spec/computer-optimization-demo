import { useState } from 'react';
import StepBar from '../components/StepBar';
import { checklist, initialEvidencePhotos } from '../data/mockData';

type Props = { next: () => void; back: () => void };

export default function InspectionExecute({ next, back }: Props) {
  const [photos, setPhotos] = useState(initialEvidencePhotos);
  const uploaded = photos.filter((p) => p.status === '已上传').length;
  return (
    <section className="page light-page">
      <h2>当前任务：临电一区配电箱防雨检查</h2>
      <div className="info-strip"><span>任务来源：天气预警触发</span><span>风险等级：中风险</span><span>点位编号：LD-01</span><span>检查时限：今日10:30前</span><span>所属区域：临电一区</span></div>
      <StepBar steps={['选择巡检范围完成', '执行巡检当前', 'AI检查与记录', '提交结果']} current={1} />
      <div className="three-col">
        <div className="panel main-span"><h3>检查清单</h3>{checklist.map((item) => <div className="check-row" key={item.name}><b>{item.name}</b><div>{['正常', '疑似问题', '存在问题'].map((op) => <label key={op}><input type="radio" name={item.name} defaultChecked={item.value === op} />{op}</label>)}</div></div>)}<h3>照片取证区</h3><div className="photo-grid">{photos.map((p, i) => <button className="photo-tile" key={p.name} onClick={() => setPhotos((old) => old.map((x, idx) => idx === i ? { ...x, status: '已上传' } : x))}><span>{p.name}</span><b>{p.status}</b></button>)}</div></div>
        <aside className="panel"><h3>AI 辅助提示</h3><ul><li>受降雨影响，请重点检查箱体顶部防雨与底部积水。</li><li>当前照片中未清晰看到接地端子，建议补拍近景。</li><li>如存在拖地电缆，请标记为疑似问题并提交整改建议。</li></ul><div className="evidence-box"><strong>证据完整性</strong><p>已上传 {uploaded}/4 张</p><p>仍需补充 {4 - uploaded} 张照片</p></div></aside>
      </div>
      <div className="actions"><button onClick={back}>返回任务列表</button><button>保存草稿</button><button>AR 现场辅助</button><button className="primary" onClick={next}>生成辅助判断</button></div>
    </section>
  );
}
