let button = document.querySelector("#button");document.querySelector("#button").addEventListener("click", () => {
    document.querySelector('p .total').innerHTML = document.querySelector("#precio").value*document.querySelector('#var-1').value;
    document.querySelector('p .amount').innerHTML = document.querySelector('#var-1').value;
    document.querySelector('p .color_laptop').style.color = document.querySelector('#var-2').value;
})
