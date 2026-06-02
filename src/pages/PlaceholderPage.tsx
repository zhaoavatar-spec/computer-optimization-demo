type Props = { title: string };
export default function PlaceholderPage({ title }: Props) {
  return <section className="page light-page"><div className="panel placeholder"><h2>{title}</h2><p>该模块为 Demo 占位页，后续可接入真实资料台账、报表导出、组织权限、消息模板与系统参数配置。</p></div></section>;
}
