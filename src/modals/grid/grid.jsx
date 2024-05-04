const renderRow = (cols, colsSpan, colHeading) => {
    let cells = [];
    for (let i = 0; i < cols; i++) {
      cells.push(
        <h1
          key={i}
          className={`flex items-center justify-center pt-6 pb-6 border-b border-r border-stone-400 col-span-${colsSpan[i]}`}
        >
          {colHeading[i]}
        </h1>
      );
    }
    return cells;
  };
  
  const renderTopRow = (cols, colsSpan, colHeading) => {
    let tableRows = [];
    tableRows.push(
      <div className="grid grid-cols-16 rounded-lg text-white bg-Neron">
        {renderRow(cols, colsSpan, colHeading)}
      </div>
    );
    return tableRows;
  };
  
  const renderCells = (cols, colsSpan , currentPage) => {
    let cells = [];
    for (let i = 0; i < cols; i++) {
      if((i === cols -1) && currentPage === "/employees"){
        cells.push(
          <div key="actions" className={`flex items-center justify-center pt-2 pb-2 border-b border-r border-stone-400 col-span-${colsSpan[colsSpan.length - 1]}`}>
            <button className="mr-2 text-sm bg-white hover:bg-orange-700 hover:text-white text-black font-bold py-1 px-2 rounded">Show</button>
            <button className="mr-2 text-sm bg-white hover:bg-orange-700 hover:text-white text-black font-bold py-1 px-2 rounded">Edit</button>
            <button className="text-sm bg-white hover:bg-orange-700 hover:text-white text-black font-bold py-1 px-2 rounded">Delete</button>
          </div>
          
        );
      }
      else{
        cells.push(
          <h1
            key={i}
            className={`flex items-center justify-center pt-7 pb-7 border-b border-r border-stone-400 col-span-${colsSpan[i]}`}
          > </h1>
        );
      }
      
    }
    return cells;
  };
  const renderRows = (rows, cols, colSpan , currentPage) => {
    let tableRows = [];
  
    for (let i = 0; i < rows; i++) {
      tableRows.push(
        <div key={i} className="grid grid-cols-16 rounded-lg text-white bg-Neron">
          {renderCells(cols, colSpan , currentPage)}
        </div>
      );
    }
    return tableRows;
  };
  
  export { renderRows, renderTopRow };
  