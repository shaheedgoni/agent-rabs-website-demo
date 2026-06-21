import "../App.css";

interface OrangeButtonProps {
  name: string;
  className?: string;
}

function OrangeButton({ name, className = "" }: OrangeButtonProps) {
  return (
    <>
      <button className={`${className} orange-button`}>{name}</button>
    </>
  );
}

export default OrangeButton;
