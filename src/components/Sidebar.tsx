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
      <div className="system-mini">{systemName}</div>
      <nav>
        {navItems.map((item) => (
          <button key={item.key} className={`nav-item ${active === item.key ? 'active' : ''}`} onClick={() => onNavigate(item.key as PageKey)}>
            <span className="nav-icon">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
