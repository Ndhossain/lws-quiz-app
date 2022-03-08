export default function CheckBox({ text, className, ...rest }) {
  return (
    <label className={className}>
      <input type="checkbox" {...rest} /> <span>{text}</span>
    </label>
  );
}
