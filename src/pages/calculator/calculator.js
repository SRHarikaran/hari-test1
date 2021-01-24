import React from 'react';

function CalculatorPage() {
  return (
    <div className="cal-wrapper" >
        <h2>Calculator</h2>
        <div className="calculator">
            <div className="results">
                <div className="exp">expresion</div>
                <div className="res">result</div>

           </div>
            <div style={{borderTop: '1px solid black'}} />
            <div className="numberpad">
                <div className="number">
                    <div className="numrow">
                        <div className="num">7</div>
                        <div className="num">8</div>
                        <div className="num">9</div>
                    </div>
                    <div className="numrow">
                        <div className="num">4</div>
                        <div className="num">5</div>
                        <div className="num">6</div>
                    </div>
                    <div className="numrow">
                        <div className="num">1</div>
                        <div className="num">2</div>
                        <div className="num">3</div>
                    </div>
                    <div className="numrow">
                        <div className="num">0</div>
                        <div className="num">00</div>
                        <div className="num">.</div>
                    </div>
                </div>
                {/* <div style={{border: '1px solid black',height: '100%'}} /> */}
                <div className="symbol">
                    <div className="sym">+</div>
                    <div className="sym">-</div>
                    <div className="sym">*</div>
                    <div className="sym">/</div>
                    <div className="sym">%</div>
                    <div className="sym" style={{borderBottom: '2px solid black',height: 60}}>=</div>
                         


                </div>

            </div>
        </div>
    </div>
  );
}

export default CalculatorPage;
