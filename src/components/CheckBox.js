export default function CheckBox({ text, className, ...rest }) {
  console.log("CheckBox rendered");
  return (
    <label className={className}>
      <input type="checkbox" {...rest} /> <span>{text}</span>
    </label>
  );
}
