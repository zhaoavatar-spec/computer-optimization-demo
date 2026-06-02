import { systemName, userInfo } from '../data/mockData';

export default function Topbar() {
  return (
    <header className="topbar">
      <div>
        <h1>{systemName}</h1>
        <p>建设期质量安全全过程监督 · AI辅助识别 · 闭环整改 · 可视化管理</p>
      </div>
      <div className="top-meta">
        <span className="warning">中雨预警</span>
        <span>23℃</span>
        <span>2025-05-28 周三</span>
        <span>消息 8</span>
        <span>{userInfo.name} · {userInfo.role}</span>
      </div>
    </header>
  );
}
