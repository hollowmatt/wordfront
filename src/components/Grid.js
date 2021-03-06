import Row from "./Row";

const guesses = [];
const currentGuess = '';

function Grid() {
    const empties = guesses.length < 6 ? Array.from(Array(6 - guesses.length)) : [];

    return(
        <div className="pb-6">
           {guesses.map((guess, i) => (
               <Row />
           ))}
           {empties.map((_, i) => (
               <Row />
           ))}
        </div>
    );
}

export default Grid;