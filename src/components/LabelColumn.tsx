import styles from "../styles/LabelColumn.module.css";

type LabelColumnProps = {
  rows: number;
};

export const LabelColumn = ({ rows }: LabelColumnProps) => (
  <div className={styles.labelColumn}>
    {Array.from({ length: rows }).map((_, rowIdx) => (
      <div key={`label-${rowIdx}`} className={styles.labelCell}>
        Label {rowIdx + 1}
      </div>
    ))}
  </div>
);
