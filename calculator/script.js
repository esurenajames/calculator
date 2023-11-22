let calculation = '';

        function updateResult() {
        let result = '';
            if (calculation.includes('+') || calculation.includes('-') || calculation.includes('*') || calculation.includes('/')) {
                result = eval(calculation);
            }
            document.querySelector('.current-answer').innerHTML = result;
        }

        function buttonClicked(value) {
            calculation == value;
            document.getElementById('dito').innerHTML = calculation;
            updateResult();
        }

        function button1(){
            calculation += '1'
            document.getElementById('dito').innerHTML = calculation;
            buttonClicked('1');
        }

        function button2(){
            calculation += '2'
            document.getElementById('dito').innerHTML = calculation;
            buttonClicked('2');
        }

        function button3(){
            calculation += '3'
            document.getElementById('dito').innerHTML = calculation;
            buttonClicked('3');
        }

        function button4(){
            calculation += '4'
            document.getElementById('dito').innerHTML = calculation;
            buttonClicked('4');
        }

        function button5(){
            calculation += '5'
            document.getElementById('dito').innerHTML = calculation;
            buttonClicked('5');
        }

        function button6(){
            calculation += '6'
            document.getElementById('dito').innerHTML = calculation;
            buttonClicked('6');
        }

        function button7(){
            calculation += '7'
            document.getElementById('dito').innerHTML = calculation;
            buttonClicked('7');
        }

        function button8(){
            calculation += '8'
            document.getElementById('dito').innerHTML = calculation;
            buttonClicked('8');
        }

        function button9(){
            calculation += '9'
            document.getElementById('dito').innerHTML = calculation;
            buttonClicked('9');
        }

        function button0(){
            calculation += '0'
            document.getElementById('dito').innerHTML = calculation;
            buttonClicked('0');
        }

        function plusButton(){
            calculation += ' \+ '
            document.getElementById('dito').innerHTML = calculation;
            buttonClicked(' + ');
        }

        function minusButton(){
            calculation += ' \- '
            document.getElementById('dito').innerHTML = calculation;
            buttonClicked(' - ');
        }

        function multiplyButton(){
            calculation += ' * '
            document.getElementById('dito').innerHTML = calculation;
            buttonClicked(' * ');
        }

        function divideButton(){
            calculation += ' / '
            document.getElementById('dito').innerHTML = calculation;
            buttonClicked(' / ');
        }

        function equalButton(){
            eval(calculation);
            calculation = eval(calculation);
            document.getElementById('dito').innerHTML = calculation;   
        }

        function resetButton(){
            calculation = '';
            document.getElementById('dito').innerHTML = calculation;
            buttonClicked('');
        }

        function decimalButton(){
            calculation = `${calculation + '.'}`;
            document.getElementById('dito').innerHTML = calculation;
            buttonClicked('.');
        }

        function percentButton(){
            calculation = `${calculation / 100}`;
            document.getElementById('dito').innerHTML = calculation;
            buttonClicked(`${calculation / 100}`);
        }