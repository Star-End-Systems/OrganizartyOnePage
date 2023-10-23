const item = document.querySelectorAll("[data-changeColor]");

const navBarChangeColor = () => {

    const windowTop = window.scrollY /* + window.innerHeight * 0.87 */;

    item.forEach((element) => {
        console.log(windowTop);
        if (windowTop >= 700) {
            
            console.log("altura do scroll: " + element.offsetTop);
            element.classList.add("animate");
        } else {
            element.classList.remove("animate");
        }
    })
};

navBarChangeColor();

window.addEventListener("scroll", () => {
    navBarChangeColor();
})


let cont = document.querySelector('#Events');
let texto = document.querySelectorAll('.txtEvents');
let baloes = document.querySelector("#baloes");
let bolas = document.querySelector("#bolas");
let img = document.querySelectorAll(".imgEvents")

function AnimacaoTela1(){
    cont.onscroll = function(){
        let X = cont.scrollTop;
        console.log("scroll lado: " + cont.scrollTop);
        if(cont.scrollTop < 1600){
            texto[0].style.right = X/2 + 'px';
            baloes.style.top = "-" + X/2 + "px";
            bolas.style.height = 80 + X/16 + "vh";
            texto[0].classList.add("inversaoTexto");
            img[0].classList.add("inversaoImg");
            if(X == 0){
                texto[0].classList.remove("inversaoTexto");
                img[0].classList.remove("inversaoImg");
            }
        } else if(cont.scrollTop < 3200){
            X = cont.scrollTop - 1600;
            texto[1].style.right = X/2 + 'px';
            petalas.style.top = "-" + X/2 + "px";
            bolas.style.height = 80 + X/16 + "vh";
            texto[1].classList.add("inversaoTexto");
            img[1].classList.add("inversaoImg");
            if(X == 0){
                texto[1].classList.remove("inversaoTexto");
                img[1].classList.remove("inversaoImg");
            }
        } else if(cont.scrollTop < 4800){
            X = cont.scrollTop - 3200;
            texto[2].style.right = X/2 + 'px';
            texto[2].classList.add("inversaoTexto");
            img[2].classList.add("inversaoImg");
            if(X == 0){
                texto[2].classList.remove("inversaoTexto");
                img[2].classList.remove("inversaoImg");
            }
        } else if(cont.scrollTop < 6400){
            X = cont.scrollTop - 4800;
            texto[3].style.right = X/2 + 'px';
            if(X == 0){
                texto[2].classList.remove("inversaoTexto");
                img[2].classList.remove("inversaoImg");
            }
        }
    }
}

AnimacaoTela1();