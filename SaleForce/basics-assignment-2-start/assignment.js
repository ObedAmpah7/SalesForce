const task3Element = document.getElementById('task-3');

function welcome (){
    alert ('hello');
}

function receiveName (name) {
    alert ('Hi ' + name);
}
welcome ();
receiveName ('obed');

function proposal (word1, word2, word3){
    const combined = `${word1} ${word2} ${word3}`;
    return  combined;
}
alert (proposal ('I', 'Love', 'You'));

task3Element.addEventListener ('click', welcome);

