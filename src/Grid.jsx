import { range } from './utils';

function Grid({ numRows, numCols }) {
  return (
    <div className="grid">
      {range(0, numRows).map((i) => {
        return (
          <div
            key={i}
            className="row"
            style={{ gridTemplateColumns: `repeat(${numCols}, 1fr)` }}
          >
            {range(0, numCols).map((i) => {
              return <div className="col" key={i}></div>;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Grid;
