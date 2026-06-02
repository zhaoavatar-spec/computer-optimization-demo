type Props = { label: string; value: string; tone?: 'cyan' | 'blue' | 'orange' | 'green' | 'red' };

export default function StatCard({ label, value, tone = 'blue' }: Props) {
  return (
    <div className={`stat-card ${tone}`}>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}
