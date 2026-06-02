import { useState } from 'react';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import TodayTasks from './pages/TodayTasks';
import InspectionExecute from './pages/InspectionExecute';
import AiJudgement from './pages/AiJudgement';
import ManualConfirm from './pages/ManualConfirm';
import IssueForm from './pages/IssueForm';
import RectificationTracking from './pages/RectificationTracking';
import RectificationReview from './pages/RectificationReview';
import AiAssistant from './pages/AiAssistant';
import HiddenNodes from './pages/HiddenNodes';
import RectificationList from './pages/RectificationList';
import PlaceholderPage from './pages/PlaceholderPage';
import type { FlowPage, PageKey } from './types';

const flowOrder: FlowPage[] = ['select', 'execute', 'ai', 'manual', 'issue', 'tracking', 'review'];

export default function App() {
  const [active, setActive] = useState<PageKey>('dashboard');
  const [flow, setFlow] = useState<FlowPage>('select');

  const navigate = (key: PageKey) => {
    setActive(key);
    if (key === 'tasks') setFlow('select');
  };
  const nextFlow = () => setFlow((prev: FlowPage) => flowOrder[Math.min(flowOrder.indexOf(prev) + 1, flowOrder.length - 1)]);
  const prevFlow = () => setFlow((prev: FlowPage) => flowOrder[Math.max(flowOrder.indexOf(prev) - 1, 0)]);
  const openTrackingFromList = () => { setActive('tasks'); setFlow('tracking'); };

  const renderTasks = () => {
    if (flow === 'select') return <TodayTasks next={nextFlow} />;
    if (flow === 'execute') return <InspectionExecute next={nextFlow} back={() => setFlow('select')} />;
    if (flow === 'ai') return <AiJudgement next={nextFlow} back={() => setFlow('execute')} />;
    if (flow === 'manual') return <ManualConfirm next={nextFlow} back={() => setFlow('ai')} />;
    if (flow === 'issue') return <IssueForm next={nextFlow} back={() => setFlow('manual')} />;
    if (flow === 'tracking') return <RectificationTracking next={nextFlow} back={() => setFlow('issue')} />;
    return <RectificationReview back={() => setFlow('tracking')} />;
  };

  const content = () => {
    if (active === 'dashboard') return <Dashboard onNavigate={navigate} />;
    if (active === 'tasks') return renderTasks();
    if (active === 'assistant') return <AiAssistant />;
    if (active === 'hidden') return <HiddenNodes />;
    if (active === 'rectification') return <RectificationList openTracking={openTrackingFromList} />;
    if (active === 'reports') return <PlaceholderPage title="资料与报告" />;
    return <PlaceholderPage title="系统设置" />;
  };

  const theme = active === 'dashboard' || active === 'hidden' ? 'dark' : 'light';
  return <Layout active={active} onNavigate={navigate} theme={theme}>{content()}</Layout>;
}
