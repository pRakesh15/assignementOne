import "../App.css";

export default function Grid({ filled, onClick, isDisabled }) {
    //it take  3 props 
    //filled return true or false  like the box is active oor not.
    //onClick is a event by which we can click the define button
    //isDisabled for avoiding conflict
    //like if i click a box more than 1 time then it will not going to make any error

      {/* here i add a conditional css by which we can change the box color  */}
  return (
  
    <button
      type="button"
      onClick={onClick}
      className={
        filled ? (filled ? "cell cell_activated" : "cell_deactivated") : "cell"
      }
      disabled={isDisabled}
    />
  );
}
