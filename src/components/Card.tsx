interface CardProps {
  title: string;
  desc: string;
  className?: string;
  linkButton?: string;
  dataAos?: string;
  dataAosDelay?: string;
  hrefURL?: string;
}

function Card({
  title,
  desc,
  className,
  linkButton,
  dataAos,
  dataAosDelay,
  hrefURL,
}: CardProps) {
  return (
    <div className={className} data-aos={dataAos} data-aos-delay={dataAosDelay}>
      <span>{title}</span>
      <p>{desc}</p>
      <a href={hrefURL}>{linkButton}</a>
    </div>
  );
}

export default Card;
