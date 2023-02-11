function rodeUmDado() {
    return parseInt(Math.random() * 20 + 1);
}

document.getElementById("butao").addEventListener("click", function(){
    let resultadoDoDado = rodeUmDado();
    document.getElementById("resultado").innerText = (`O resultado da sua rolagem foi ${resultadoDoDado}`);
});