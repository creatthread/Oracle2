export default function Section({ title, children }) {
    return (
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{children}</div>
      </div>
    );
  }
  