import "./OrangeButton.css";

interface OrangeButtonProps {
  name: string;
}

function OrangeButton({ name }: OrangeButtonProps) {
  return (
    <>
      <button className="orange-button">{name}</button>
    </>
  );
}

export default OrangeButton;
