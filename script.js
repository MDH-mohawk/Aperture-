var portalgun = document.getElementById('portal_gun')

console.log(portalgun)

function bigger(){
    portalgun.style.backgroundColor = "red";
}

portalgun.onclick = bigger;