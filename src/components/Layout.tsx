import type { ReactNode } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import type { PageKey } from '../types';

type Props = { active: PageKey; onNavigate: (key: PageKey) => void; children: ReactNode; theme?: 'dark' | 'light' };

export default function Layout({ active, onNavigate, children, theme = 'light' }: Props) {
  return (
    <div className={`app-shell ${theme}`}>
      <Sidebar active={active} onNavigate={onNavigate} />
      <main className="main-area">
        <Topbar />
        {children}
      </main>
    </div>
  );
}
