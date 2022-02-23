import Cell from './Cell';

function Row() {
    const emptyCells = Array.from(Array(5));

    return(
        <div className='flex justify-center mb1'>
            {emptyCells.map((_,i) => (
                <Cell />
            ))}
        </div>
    );
}

export default Row;