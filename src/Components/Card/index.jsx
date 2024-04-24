import styles from "./card.module.css";

// eslint-disable-next-line react/prop-types
const Card = ({ variant, children, size }) => {
  return (
    <div data-size={size} data-variant={variant} className={styles.cardWrapper}>
      {children}
    </div>
  );
};

export default Card;
