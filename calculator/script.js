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

        function button(buttonpressed){

            if(buttonpressed === 'one'){
                calculation += '1'
                document.getElementById('dito').innerHTML = calculation;
                buttonClicked('1');
            }
            if(buttonpressed === 'two'){
                calculation += '2'
                document.getElementById('dito').innerHTML = calculation;
                buttonClicked('2');
            }
            if(buttonpressed === 'three'){
                calculation += '3'
                document.getElementById('dito').innerHTML = calculation;
                buttonClicked('3');
            }
            if(buttonpressed === 'four'){
                calculation += '4'
                document.getElementById('dito').innerHTML = calculation;
                buttonClicked('4');
            }
            if(buttonpressed === 'five'){
                calculation += '5'
                document.getElementById('dito').innerHTML = calculation;
                buttonClicked('5');
            }
            if(buttonpressed === 'six'){
                calculation += '6'
                document.getElementById('dito').innerHTML = calculation;
                buttonClicked('6');
            }
            if(buttonpressed === 'seven'){
                calculation += '7'
                document.getElementById('dito').innerHTML = calculation;
                buttonClicked('7');
            }
            if(buttonpressed === 'eight'){
                calculation += '8'
                document.getElementById('dito').innerHTML = calculation;
                buttonClicked('8');
            }
            if(buttonpressed === 'nine'){
                calculation += '9'
                document.getElementById('dito').innerHTML = calculation;
                buttonClicked('9');
            }
            if(buttonpressed === 'zero'){
                calculation += '0'
                document.getElementById('dito').innerHTML = calculation;
                buttonClicked('0');
            }
            if(buttonpressed === 'plus'){
                calculation += ' \+ '
                document.getElementById('dito').innerHTML = calculation;
                buttonClicked(' + ');
            }
            if(buttonpressed === 'minus'){
                calculation += ' \- '
                document.getElementById('dito').innerHTML = calculation;
                buttonClicked(' - ');
            }
            if(buttonpressed === 'divide'){
                calculation += ' / '
                document.getElementById('dito').innerHTML = calculation;
                buttonClicked(' / ');
            }
            if(buttonpressed === 'multiply'){
                calculation += ' * '
                document.getElementById('dito').innerHTML = calculation;
                buttonClicked(' * ');
            }
            if(buttonpressed === 'equal'){
                eval(calculation);
                calculation = eval(calculation);
                document.getElementById('dito').innerHTML = calculation;   
            }
            if(buttonpressed === 'reset'){
                calculation = '';
                document.getElementById('dito').innerHTML = calculation;
                buttonClicked('');
            }
            if(buttonpressed === 'decimal'){
                calculation = `${calculation + '.'}`;
                document.getElementById('dito').innerHTML = calculation;
                buttonClicked('.');
            }
            if(buttonpressed === 'percent'){
                calculation = `${calculation / 100}`;
                document.getElementById('dito').innerHTML = calculation;
                buttonClicked(`${calculation / 100}`);
            }
        }
