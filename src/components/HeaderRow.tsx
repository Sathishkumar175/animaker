import styles from "../styles/HeaderRow.module.css";

type HeaderRowProps = {
  cols: number;
};

export const HeaderRow = ({ cols }: HeaderRowProps) => (
  <div className={styles.headerRow}>
    {Array.from({ length: cols }).map((_, colIdx) => (
      <div key={`header-${colIdx}`} className={styles.headerCell}>
        Head {colIdx + 1}
      </div>
    ))}
  </div>
);
