import { FC, useEffect} from 'react';
import { DesmosProps} from '../interfaces/service';

const Desmos = require("desmos");
let elt = document.getElementById("calculator"),
    calculator = Desmos.GraphingCalculator(elt),
    equation,answer,xL,xR,x,xi;
export const DesmosChart:FC<DesmosProps> = (props) => {
    useEffect(()=>{
        elt = document.getElementById('calculator');
        calculator = Desmos.GraphingCalculator(
            elt,
            {
                expressions:false
            }
        );
        calculator.setExpression({id:'equationgraph',latex:"0"});
    },[]);
    try{
        equation = props.Equation?.replace(/\(/g,'{').replace(/\)/g,'}');
        calculator.setExpression({id:'equationgraph',latex: 'f(x)='+equation});
        answer = props.Answer;
        xL = props.xLPoint;
        xR = props.xRPoint;
        x = props.xPoint;
        xi = props.xiPoint;
        calculator.setExpression({id:'setxL',latex: 'x='+ xL});
        calculator.setExpression({id:'setxLpoint',latex: 'x=('+ xL +',0)', showLabel:true, label:'xL=' + xL});
        calculator.setExpression({id:'setxRpoint',latex: 'x='+ xR});
        calculator.setExpression({id:'setxR',latex: 'x=('+ xR +',0)', showLabel:true, label:'xR=' + xR});
        
        calculator.setExpression({id:'setx',latex: 'x='+ x});
        calculator.setExpression({id:'setxpoint',latex: 'x=('+ x +',0)', showLabel:true, label:'x=' + x});
        calculator.setExpression({id:'setxipoint',latex: 'x='+ xi});
        calculator.setExpression({id:'setxi',latex: 'x=('+ xi +',0)', showLabel:true, label:'xi=' + xi});

        calculator.setExpression({id:'setanswer',latex: 'x='+ answer});
        calculator.setExpression({id:'setanswerpoint',latex: 'x=('+ answer +',0)', showLabel:true, label:'Answer=' + answer});
    }
    catch(e){
        console.log(e);
    }
    return(
        <div id="calculator" style={{width:"100%",height:"25rem"}}>
        </div>
    );
}