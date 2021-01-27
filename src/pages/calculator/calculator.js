import React, { useEffect, useState } from 'react';
import BackspaceIcon from '@material-ui/icons/Backspace';

function CalculatorPage() {
  const [expresion, setExpresion] = useState('');
  const [result, setResult] = useState('');


  const onClear = () => {
    setExpresion('');
  };

  const onErase = () => {
    let newExpresion = expresion.trim();
    if (newExpresion.length <= 1) {
      setExpresion('');
      return;
    }

    console.log(newExpresion.slice(-1))
    console.log(newExpresion.substr(newExpresion.length - 1))
    if (
      newExpresion.substr(newExpresion.length - 1) === '+' ||
      newExpresion.substr(newExpresion.length - 1) === '-' ||
      newExpresion.substr(newExpresion.length - 1) === '*' ||
      newExpresion.substr(newExpresion.length - 1) === '/' ||
      newExpresion.substr(newExpresion.length - 1) === '%' 
    ) {
      setExpresion(newExpresion.slice(0, newExpresion.length-2));
    } else {
      setExpresion(newExpresion.slice(0, newExpresion.length-1));
    }
  };
  
  const onsubmit = () => {
    try {
      setResult(eval(expresion));
    } catch (error) {
      console.log(error);
      setResult('invalid')
    }
  }

  useEffect(() => {
    onsubmit();
  }, [expresion]);

  return (
    <div className="cal-wrapper" >
        <h2>Calculator</h2>
        <div className="calculator">
            <div className="results">
                <div className="exp">{expresion}</div>
                <div className="res">{result}</div>
           </div>
            <div style={{borderTop: '1px solid black'}} />
            <div className="numberpad">
                <div className="number">
                    <div className="numrow">
                        <div className="num" onClick={() => setExpresion(`${expresion}7`)}>7</div>
                        <div className="num" onClick={() => setExpresion(`${expresion}8`)}>8</div>
                        <div className="num" onClick={() => setExpresion(`${expresion}9`)}>9</div>
                    </div>
                    <div className="numrow">
                        <div className="num" onClick={() => setExpresion(`${expresion}4`)}>4</div>
                        <div className="num" onClick={() => setExpresion(`${expresion}5`)}>5</div>
                        <div className="num" onClick={() => setExpresion(`${expresion}6`)}>6</div>
                    </div>
                    <div className="numrow">
                        <div className="num" onClick={() => setExpresion(`${expresion}1`)}>1</div>
                        <div className="num" onClick={() => setExpresion(`${expresion}2`)}>2</div>
                        <div className="num" onClick={() => setExpresion(`${expresion}3`)}>3</div>
                    </div>
                    <div className="numrow">
                        <div className="num" onClick={() => setExpresion(`${expresion}0`)}>0</div>
                        <div className="num" onClick={() => setExpresion(`${expresion}00`)}>00</div>
                        <div className="num" onClick={() => setExpresion(`${expresion}.`)}>.</div>
                    </div>
                </div>
                {/* <div style={{border: '1px solid black',height: '100%'}} /> */}
                <div className="symbol">
                    <div className="sym" onClick={() => setExpresion(`${expresion} + `)}>+</div>
                    <div className="sym" onClick={() => setExpresion(`${expresion} - `)}>-</div>
                    <div className="sym" onClick={() => setExpresion(`${expresion} * `)}>*</div>
                    <div className="sym" onClick={() => setExpresion(`${expresion} / `)}>/</div>
                    <div className="sym" onClick={() => setExpresion(`${expresion} % `)}>%</div>
                    <div className="sym" style={{borderBottom: '2px solid black',height: 60}} onClick={onsubmit}>=</div>
                </div>

            </div>
        </div>
        <div className="actionBtn">
          <button className="clearBtn" onClick={() => onClear()}>Clear</button>
          <button className="eraseBtn" onClick={onErase}><BackspaceIcon /></button>
        </div>
    </div>
  );
}

export default CalculatorPage;
