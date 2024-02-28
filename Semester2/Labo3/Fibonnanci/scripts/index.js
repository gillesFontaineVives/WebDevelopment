const setup = () => {
    let getal = 3;
    let getal1 = 0;
    let som = 0;
    for (let i = 1; i < 4000000 ;i) {
        if (i === 1) {
            i = i + i;
            if(i % 2 === 0){
                som += i;
            }
            getal1 = i;
        } else {
            if (getal > getal1) {
                i = getal1 + getal;
                if(i % 2 === 0){
                    som += i;
                }
                getal1 = i;
            } else {
                i = getal + getal1;
                if(i % 2 === 0){
                    som += i;
                }
                getal = i;
            }
        }
    }
    console.log(som);

}

window.addEventListener("load", setup);