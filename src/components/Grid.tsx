import { useGrid } from "../hooks/useGrid";
import { useSelection } from "../hooks/useSelection";
import { HeaderRow } from "./HeaderRow";
import { LabelColumn } from "./LabelColumn";
import { Cell } from "./Cell";
import { Toolbar } from "./Toolbar";
import styles from "../styles/Grid.module.css";

export const Grid = () => {
  const { rows, cols, data, addRow, addCol, updateCell } = useGrid();
  const { selection, handleMouseDown, handleMouseOver } = useSelection();

  return (
    <div className={styles.container}>
      <Toolbar addRow={addRow} addCol={addCol} />
      <div className={styles.grid}>
        <HeaderRow cols={cols} />
        <div className={styles.body}>
          <LabelColumn rows={rows} />
          <div className={styles.cells}>
            {data.map((row, rowIdx) =>
              row.map((cell, colIdx) => {
                const isSelected =
                  !!selection.start &&
                  !!selection.end &&
                  rowIdx >= selection.start.row! &&
                  rowIdx <= selection.end.row! &&
                  colIdx >= selection.start.col! &&
                  colIdx <= selection.end.col!;
                return (
                  <Cell
                    key={`${rowIdx}-${colIdx}`}
                    value={cell}
                    isSelected={isSelected}
                    onChange={(value) => updateCell(rowIdx, colIdx, value)}
                    onMouseDown={() => handleMouseDown(rowIdx, colIdx)}
                    onMouseOver={() => handleMouseOver(rowIdx, colIdx)}
                  />
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
