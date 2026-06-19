interface CardProps {
  title: string;
  desc: string;
  className?: string;
  linkButton?: string;
}

function Card({ title, desc, className, linkButton }: CardProps) {
  return (
    <div className={className}>
      <span>{title}</span>
      <p>{desc}</p>
      <div>{linkButton}</div>
    </div>
  );
}

export default Card;
