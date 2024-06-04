import {useContext} from 'react';
import '../styles/Board.css';
import {GameContext } from '../context/GameContext';

const Tile = ({ letter, rowIndex, index }) => {
  const {solution, currentRow} = useContext(GameContext)
  
// check if solution contains letter and/or correct place. Loop index thro solution
console.log(solution)
console.log(rowIndex)
  let className = "tile";
  if(currentRow > rowIndex){
    if(solution[index] === letter){
      className += " correct"
    }else if(solution.includes(letter)){
      className += " present"
    }
  }
  //if (letter === 'T') {
  //  className += " correct";
  //} else if (letter === 'R') {
  //  className += " present";
  //}

  return (
    <div className={className}>
      {letter}
    </div>
  );
};

export default Tile;
