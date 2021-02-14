import React, { useEffect, useState } from 'react';
import BackspaceIcon from '@material-ui/icons/Backspace';
import { Grid } from '@material-ui/core';
import Header from '../../components/header';

function CalculatorMobilePage() {
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

  const renderNum = (num) => {
    return <Grid item xs={4} className="m-num" onClick={() => setExpresion(`${expresion}${num}`)}>{num}</Grid>
  }
  const renderSym = (sym) => {
    return <div className="m-sym" onClick={() => setExpresion(`${expresion} ${sym} `)}>{sym}</div>;
  }

  return (
    <div className="cal-wrapper" >
      <Header/>
        <h2>Calculator</h2>
        <Grid className="m-calculator" style={{width: '80%',maxWidth: 490}}>
            <div className="results">
                <div className="exp">{expresion}</div>
                <div className="res">{result}</div>
           </div>
            <div style={{borderTop: '1px solid black'}} />
            <Grid container className="numberpad">
                <Grid item xs={9} className="m-number">
                    <Grid container className="numrow">
                      {
                        [7,8,9,4,5,6,1,2,3,0,'00','.'].map((n) => {
                          return renderNum(n)
                        })
                      }
                    </Grid>
                </Grid>
                {/* <div style={{border: '1px solid black',height: '100%'}} /> */}
                <Grid item xs={3} className="m-symbol">
                  {
                    ['+','-','*','/','%'].map((s)=>{
                      return renderSym(s)
                    })
                  }
                    <div className="m-sym" style={{borderBottom: '1px solid black',height: 63}} onClick={onsubmit}>=</div>
                </Grid>

            </Grid>
        </Grid>
        <div className="m-actionBtn" style={{width: '80%',maxWidth: 490}}>
          <button className="clearBtn" onClick={() => onClear()}>Clear</button>
          <button className="eraseBtn" onClick={onErase}><BackspaceIcon /></button>
        </div>
    </div>
  );
}

export default CalculatorMobilePage;
