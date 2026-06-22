import "../App.css";

interface OrangeButtonProps {
  name: string;
  className?: string;
  onClick?: () => void;
}

function OrangeButton({ name, className = "", onClick }: OrangeButtonProps) {
  return (
    <button
      type="button"
      className={`${className} orange-button`}
      onClick={onClick}
    >
      {name}
    </button>
  );
}

export default OrangeButton;
