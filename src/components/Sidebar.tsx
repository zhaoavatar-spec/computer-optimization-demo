import { navItems, systemName } from '../data/mockData';
import type { PageKey } from '../types';

type Props = { active: PageKey; onNavigate: (key: PageKey) => void };

export default function Sidebar({ active, onNavigate }: Props) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark">济</div>
        <div>
          <strong>济钢水厂</strong>
          <span>AI 质安监督</span>
        </div>
      </div>
      <div className="system-mini">
        <b>建设期质安管控平台</b>
        <span>{systemName}</span>
      </div>
      <nav>
        {navItems.map((item) => (
          <button key={item.key} className={`nav-item ${active === item.key ? 'active' : ''}`} onClick={() => onNavigate(item.key as PageKey)}>
            <span className="nav-icon">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="sidebar-footer">
        <span>项目状态</span>
        <strong>施工高峰期</strong>
        <em>AI 风险引擎运行中</em>
      </div>
    </aside>
  );
}
