export const systemName = '济钢水厂建设期质量安全 AI 辅助监督与可视化管理系统';

export const userInfo = {
  name: '张工',
  role: '质安员',
  project: '济钢水厂建设项目',
};

export const navItems = [
  { key: 'dashboard', label: '首页总览', icon: '▣' },
  { key: 'tasks', label: '今日任务', icon: '☑' },
  { key: 'assistant', label: 'AI 智慧助理', icon: 'AI' },
  { key: 'hidden', label: '隐蔽节点', icon: '◎' },
  { key: 'rectification', label: '整改闭环', icon: '↻' },
  { key: 'reports', label: '资料与报告', icon: '▤' },
  { key: 'settings', label: '系统设置', icon: '⚙' },
] as const;

export const dashboardReminders = ['临电一区配电箱防雨检查', '清水池穿墙套管节点隐蔽留痕', '基坑一区南侧临边防护复查'];

export const workflowStats = [
  { label: '任务提醒', value: '12' },
  { label: '现场取证', value: '3' },
  { label: 'AI 辅助分析', value: '8' },
  { label: '人工确认', value: '2' },
  { label: '整改闭环', value: '3' },
  { label: '生成日报', value: '待生成' },
];

export const keyTasks = [
  { priority: '高', task: '临电一区配电箱防雨检查', trigger: '中雨预警触发', advice: '雨前完成防雨、接地、电缆状态核验', status: '待执行' },
  { priority: '高', task: '清水池穿墙套管节点隐蔽留痕', trigger: '计划隐蔽时间临近', advice: '补充止水环近景与验收签字', status: '待确认' },
  { priority: '中', task: '基坑一区南侧临边防护复查', trigger: '昨日问题复查', advice: '复核防护栏杆与警示标识', status: '整改中' },
  { priority: '中', task: '防水施工区基层处理检查', trigger: '施工计划触发', advice: '拍摄基层清理全景与细部节点', status: '待巡检' },
];

export const inspectionScopes = [
  { name: '1#主基坑', risk: '高风险', count: '12项检查' },
  { name: '2#承台钢筋区', risk: '中风险', count: '9项检查' },
  { name: '防水施工区', risk: '中风险', count: '8项检查' },
];

export const checklist = [
  { name: '防雨措施是否到位', value: '疑似问题' },
  { name: '箱门是否关闭', value: '正常' },
  { name: '警示标识是否清晰', value: '正常' },
  { name: '电缆是否存在拖地/泡水', value: '疑似问题' },
  { name: '接地是否完好', value: '正常' },
  { name: '周边是否有杂物堆放', value: '正常' },
];

export const initialEvidencePhotos = [
  { name: '配电箱全景', status: '已上传' },
  { name: '箱体近景', status: '已上传' },
  { name: '接地与电缆', status: '待上传' },
  { name: '周边环境', status: '待上传' },
];

export const evidencePhotosDone = ['配电箱全景', '箱体近景', '接地与电缆', '周边环境'];

export const aiBasis = [
  '配电箱顶部防雨遮挡不完整，局部存在雨水进入风险；',
  '电缆进出线区域存在贴地风险，雨天可能形成积水隐患；',
  '当前照片未清晰展示接地端子，建议补拍近景；',
  '周边暂未发现明显大面积积水，但建议雨前复查。',
];

export const rectificationRequirements = [
  '完善配电箱顶部防雨遮挡，确保箱体整体遮挡到位；',
  '整理电缆走向，抬高或固定电缆，避免拖地或泡水；',
  '补拍接地端子近景照片，复核接地是否可靠；',
  '雨前完成整改，并上传整改后照片申请复查。',
];

export const issueInfo = {
  title: '配电箱防雨措施不足，电缆存在贴地风险',
  id: '20250528-LD-01-001',
  type: '安全隐患',
  risk: '一般风险',
  foundAt: '2025-05-28 10:18',
  dispatchedAt: '2025-05-28 10:40',
  inspector: '张工',
  area: '临电一区',
  point: 'LD-01',
  unit: '机电安装班组',
  owner: '李师傅',
  deadline: '2025-05-28 18:00',
};

export const hiddenNodeStats = [
  { label: '隐蔽节点总数', value: '36' },
  { label: '今日待验收', value: '4' },
  { label: '即将隐蔽', value: '6' },
  { label: '已归档', value: '18' },
  { label: '资料缺项', value: '3' },
];

export const hiddenNodes = [
  { name: '清水池穿墙套管节点', id: 'YB-QS-A3-CTTG-001', area: '清水池东侧A3轴', type: '穿墙套管', risk: '中风险', time: '今日16:00', status: '今日待验收', ai: '缺少止水环近景照片' },
  { name: '池壁施工缝止水钢板节点', id: 'YB-QS-B2-ZSGB-002', area: '清水池北侧B2轴', type: '止水钢板', risk: '高风险', time: '今日17:30', status: '待补证', ai: '焊接搭接照片不完整' },
  { name: '防水施工区基层处理节点', id: 'YB-FS-01-JC-003', area: '防水施工区', type: '防水基层', risk: '中风险', time: '明日09:00', status: '待验收', ai: '需补充基层清理全景照片' },
  { name: '设备基础预埋件节点', id: 'YB-SBJC-YMJ-004', area: '加药间设备基础', type: '预埋件', risk: '一般风险', time: '2025-05-29', status: '已归档', ai: '资料完整' },
];

export const issueList = [
  { id: '20250528-LD-01-001', title: '配电箱防雨措施不足，电缆存在贴地风险', risk: '一般风险', unit: '机电安装班组', owner: '李师傅', deadline: '2025-05-28 18:00', status: '现场整改中' },
  { id: '20250528-JK-02-004', title: '基坑南侧临边防护栏杆松动', risk: '中风险', unit: '土建一班组', owner: '王班长', deadline: '2025-05-28 17:00', status: '待复查' },
  { id: '20250528-FS-01-006', title: '防水基层局部积水未清理', risk: '一般风险', unit: '防水施工队', owner: '赵师傅', deadline: '2025-05-28 16:30', status: '逾期未整改' },
  { id: '20250528-YB-03-002', title: '穿墙套管止水环近景资料缺项', risk: '中风险', unit: '安装二班组', owner: '刘工', deadline: '2025-05-28 18:30', status: '待整改' },
];
