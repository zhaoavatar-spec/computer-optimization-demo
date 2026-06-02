type Props = { steps: string[]; current: number };

export default function StepBar({ steps, current }: Props) {
  return (
    <div className="stepbar">
      {steps.map((step, index) => (
        <div key={step} className={`step ${index < current ? 'done' : ''} ${index === current ? 'current' : ''}`}>
          <span>{index + 1}</span>
          <b>{step}</b>
        </div>
      ))}
    </div>
  );
}
