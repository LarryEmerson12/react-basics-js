export default function Badge({ children, color = "" }) {
  return (
    <>
      <span id={`badge-${color}`}>{children}</span>
    </>
  );
}