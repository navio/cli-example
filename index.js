import prompt from 'prompt-promise';
import commander from 'commander';

let executing = ()=>{
    prompt("Hello")
    .then(function username(val) {
        res.push(val);
        return prompt.password('password: ');
    })
};

executing();