
import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from './styles';
import { useState } from 'react';


const App = () => {
  //Valor padrão de entrada no display da calculadora.
  const [currentNumber, setCurrentNumber] = useState('0'); 
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  //Função para limpar os dados de entrada.
  const handleOnClear = () => { 
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  };

  //Função para adicionar mostrar o valor no display da calculadora.
  const handleAddNumber = (num) => { 
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  //Função para somar os valores.
  const handleSumNumbers = () => {

    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('+')
    }else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  //Função para subtrair os valores.
  const handleMinusNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('-')
    }else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }
  //Função para multiplicar os valores.
  const handleMultiplier = () => {

    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('*')
  } else {
      const multi = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(multi))
      setOperation('')
    }
  }
  //Função para dividir os valores.
  const handleDivision = () => {

    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('/')
  } else {
      const division = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(division))
      setOperation('')
    }
  }
  //Função para saber a porcentagem do firstNumber com base no currentNumber.
  const handlePercentage = () => {
    debugger
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('%')
  } else {
      const percentage = (Number(firstNumber) * Number(currentNumber)) / 100;
      setCurrentNumber(String(percentage))
      setOperation('')
    }
  }

  //Função para calcular a raiz qudrada do currentNumber.
  const handleSquareRoot = () => {

    if(currentNumber > '0'){
      const squareRoot = Math.sqrt(Number(currentNumber));
      setCurrentNumber(String(squareRoot))
      setOperation('')
    }
  }

  //Função para uso do sinal '=' para mostrar o resultado da operação.
  const handleEquals = () => {

    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
        switch(operation){
          case '+':
            handleSumNumbers();
            break;
          case '-':
            handleMinusNumbers();
            break;
          case '*':
            handleMultiplier();
            break
          case '/':
            handleDivision();
            break 
          case '%':
            handlePercentage();
            break
          case '√':
            handleSquareRoot();
            break
          default: 
            break;
        }
    }
  }

  const logo = 'https://www.svgrepo.com/show/374034/reacttemplate.svg';

  return (
    <Container>     
      <Content>
        <div className='header'>
          <img src={logo} alt="logoReact" />
          <h1>CALCULADORA REACT</h1>
          <img src={logo} alt="logoReact" />
        </div>
        <Input value={currentNumber}/> 
        <Row>
          <Button label="c" onClick={handleOnClear}/>
          <Button label="√" onClick={handleSquareRoot}/>
          <Button label="%" onClick={handlePercentage}/> 
          <Button label="÷" onClick={handleDivision}/>           
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="x" onClick={handleMultiplier}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>          
          <Button label="-" onClick={handleMinusNumbers}/>
        </Row>
        <Row>      
          <Button label="1" onClick={() => handleAddNumber('1')}/>    
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="+" onClick={handleSumNumbers}/>
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <Button label="=" onClick={handleEquals}/>           
        </Row>
        <Row>
          
        </Row>
      </Content>
    </Container>
  );
}

export default App;
