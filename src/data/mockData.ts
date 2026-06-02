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

export const dashboardMetrics = [
  { label: '今日任务', value: '12', sub: '较昨日 +3', tone: 'cyan' },
  { label: '高风险点', value: '4', sub: '需优先处理', tone: 'red' },
  { label: '隐蔽节点', value: '6', sub: '今日待验收', tone: 'blue' },
  { label: 'AI 识别', value: '28', sub: '照片样本', tone: 'green' },
  { label: '整改闭环', value: '86%', sub: '本周完成率', tone: 'orange' },
];

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

export const dashboardTaskRows = [
  { priority: '高', task: '临电一区配电箱防雨检查', trigger: '中雨预警触发', area: '临电一区 LD-01', advice: '雨前完成防雨、接地、电缆状态核验', status: '待执行' },
  { priority: '高', task: '清水池穿墙套管节点隐蔽留痕', trigger: '计划隐蔽时间临近', area: '清水池东侧 A3 轴', advice: '补充止水环近景与验收签字', status: '待确认' },
  { priority: '中', task: '基坑一区南侧临边防护复查', trigger: '昨日问题复查', area: '1# 主基坑南侧', advice: '复核防护栏杆、踢脚板与警示标识', status: '整改中' },
  { priority: '中', task: '防水施工区基层处理检查', trigger: '施工计划触发', area: '防水施工一区', advice: '拍摄基层清理全景与细部节点', status: '待巡检' },
  { priority: '高', task: '池壁施工缝止水钢板节点检查', trigger: '隐蔽节点预警', area: '清水池北侧 B2 轴', advice: '核验焊缝搭接长度与连续性', status: '待验收' },
];

export const dashboardRiskPanels = [
  { area: '1# 主基坑', desc: '边坡支护、临边防护、排水沟', level: '高' },
  { area: '清水池结构区', desc: '穿墙套管、止水钢板、隐蔽资料', level: '高' },
  { area: '临电一区', desc: '配电箱防雨、接地、电缆走向', level: '高' },
  { area: '防水施工区', desc: '基层清理、积水、材料堆放', level: '中' },
];

export const dashboardTrendBars = [
  { day: '周一', value: 56 },
  { day: '周二', value: 68 },
  { day: '周三', value: 82 },
  { day: '周四', value: 64 },
  { day: '周五', value: 76 },
  { day: '周六', value: 48 },
  { day: '周日', value: 60 },
];

export const dashboardEvents = [
  { time: '09:10', text: 'AI 识别临电一区照片 4 张，提示防雨遮挡不足' },
  { time: '09:35', text: '清水池穿墙套管节点资料缺少止水环近景' },
  { time: '10:05', text: '基坑南侧临边防护复查任务已派发' },
  { time: '10:40', text: '今日质安日报待生成，需先完成人工确认' },
];

export const inspectionScopes = [
  { name: '1#主基坑', risk: '高风险', count: '12项检查' },
  { name: '2#承台钢筋区', risk: '中风险', count: '9项检查' },
  { name: '防水施工区', risk: '中风险', count: '8项检查' },
];

export const taskSummaryCards = [
  { label: '推荐区域', value: '6', sub: 'AI 自动筛选' },
  { label: '高风险任务', value: '4', sub: '需优先巡检' },
  { label: '待隐蔽验收', value: '3', sub: '今日截止' },
  { label: '未闭环问题', value: '5', sub: '需复查确认' },
];

export const inspectionScopeCards = [
  { name: '1# 主基坑', risk: '高风险', count: '12 项检查', owner: '土建一班组', time: '09:30-10:30', desc: '边坡支护、临边防护、降排水与上下通道为今日重点。' },
  { name: '临电一区', risk: '高风险', count: '8 项检查', owner: '机电安装班组', time: '10:30-11:00', desc: '受中雨预警影响，重点核验配电箱防雨、接地与电缆走向。' },
  { name: '清水池结构区', risk: '高风险', count: '10 项检查', owner: '安装二班组', time: '14:00-15:30', desc: '穿墙套管、止水钢板节点临近隐蔽，需补齐影像资料。' },
  { name: '防水施工区', risk: '中风险', count: '8 项检查', owner: '防水施工队', time: '15:30-16:20', desc: '基层处理、积水清理、材料堆放及成品保护同步检查。' },
];

export const inspectionScopeRows = [
  { area: '1# 主基坑南侧', code: 'JK-01-S', risk: '高', items: '12 项', trigger: '昨日问题复查 + 高风险区域', owner: '王班长', time: '09:30', status: '已推荐' },
  { area: '临电一区配电箱', code: 'LD-01', risk: '高', items: '8 项', trigger: '中雨预警触发', owner: '李师傅', time: '10:30', status: '已推荐' },
  { area: '清水池穿墙套管', code: 'YB-QS-A3', risk: '高', items: '10 项', trigger: '隐蔽时间临近', owner: '刘工', time: '14:00', status: '已推荐' },
  { area: '防水施工一区', code: 'FS-01', risk: '中', items: '8 项', trigger: '施工计划触发', owner: '赵师傅', time: '15:30', status: '待选择' },
  { area: '2# 承台钢筋区', code: 'CT-02', risk: '中', items: '9 项', trigger: '钢筋绑扎完成', owner: '周工', time: '16:00', status: '待选择' },
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
