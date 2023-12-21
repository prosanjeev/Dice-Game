import "./NumberSelector.css";

const NumberSelector = ({setError, error, selectedNumber, setSelectedNumber}) => {
 
  const arrNumber = [1, 2, 3, 4, 5, 6];
  
  const NumberSelectorHandler = (number) =>{
     setSelectedNumber(number)
     setError("")
  }


  return (
    <div className="number-box-main">
      <p className="error">{error}</p>
      <div className="numberbox-flex">
        {arrNumber.map((number, index) => (
          <div
            key={index}
            className={`number-box ${number == selectedNumber ? 'selected' : ''}`}
            onClick={() => NumberSelectorHandler(number)}
          >
            {number}
          </div>
        ))}
      </div>
      <div className="numberbox-title">Select Number</div>
    </div>
  );
};

export default NumberSelector;

