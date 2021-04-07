$(".navbar-toggler-icon").click(function(){
    if( $("#title_welcome").css("visibility") == "hidden"){
         $("#title_welcome").css("visibility", "visible");
    }else{
    $("#title_welcome").css("visibility", "hidden");
    }
})
$(window).scroll(function () {
    if ($(window).scrollTop() == $(document).height() - $(window).height()) {
        let newcars = document.createElement("div");
        newcars.classList.add('justify-content-center')
        newcars.classList.add('row')
        newcars.classList.add('cars')
        newcars.innerHTML = `<div class="col-lg-8 p-2 d-flex justify-content-between align-items-center car">
                <div id="carouselExampleControls" class="carousel slide">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100 p-5" src="img/vehicule1.png" alt="First slide">
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100 p-5" src="img/vehicule12.png" alt="Second slide">
                        </div>
                    </div>
                    <a class="carousel-control-prev text-secondary" href="#carouselExampleControls" role="button"
                        data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next text-secondary" href="#carouselExampleControls" role="button"
                        data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
                <div class="car_description">
                    <div class="car_text">
                        <h2>Peugeot 208</h2>
                        <p>Diesel, 5 portes, GPS, AutoRadio, Forfait 1000km (0,5/km supplémentaire).</p>
                        <p>999 € - Agence de Paris</p>
                    </div>
                    <button type="button" class="btn btn-success">Réserver et Payer</button>
                </div>
            </div>
            <div class="col-lg-8 p-2 d-flex justify-content-between align-items-center car">
                <div id="carouselExampleControls2" class="carousel slide">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100 p-5" src="img/vehicule2.png" alt="First slide">
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100 p-5" src="img/vehicule22.png" alt="Second slide">
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls2" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls2" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
                <div class="car_description">
                    <div class="car_text">
                        <h2>Ford Focus</h2>
                        <p>Diesel, 5 portes, GPS, AutoRadio, Forfait 1000km (0,5/km supplémentaire).</p>
                        <p>999 €</p>
                    </div>
                    <button type="button" class="btn btn-success">Réserver et Payer</button>
                </div>
            </div>
            <div class="col-lg-8 p-2 d-flex justify-content-between align-items-center car">
                <div id="carouselExampleControls3" class="carousel slide">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100 p-5" src="img/vehicule3.png" alt="First slide">
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100 p-5" src="img/vehicule32.png" alt="Second slide">
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls3" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls3" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
                <div class="car_description">
                    <div class="car_text">
                        <h2>Audi A1</h2>
                        <p>Diesel, 3 portes, GPS, AutoRadio, Forfait 1000km (0,5/km supplémentaire).</p>
                        <p>1100 €</p>
                    </div>
                    <button type="button" class="btn btn-success">Réserver et Payer</button>
                </div>
            </div>
            <div class="col-lg-8 p-2 d-flex justify-content-between align-items-center car">
                <div id="carouselExampleControls4" class="carousel slide">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100 p-5" src="img/vehicule4.png" alt="First slide">
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100 p-5" src="img/vehicule42.png" alt="Second slide">
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls4" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls4" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
                <div class="car_description">
                    <div class="car_text">
                        <h2>Opel Mokka</h2>
                        <p>Diesel, 5 portes, GPS, AutoRadio, Forfait 1000km (0,5/km supplémentaire).</p>
                        <p>1150€ - Agence de Paris</p>
                    </div>
                    <button type="button" class="btn btn-success">Réserver et Payer</button>
                </div>
            </div>`
        document.querySelector(".cars").appendChild(newcars);
    }
});

window.onload = function() {
    setInterval(function(){
        changebg()}
    , 15000);
}
var i=0;
function changebg(){
    if (i == 0){
        console.log("test");
        $("#header").css("background-image", 'url(' + "../img/bg2.jpg" + ')');
        i++;
    }else if(i == 1){
        $("#header").css("background-image", 'url(' + "../img/bg3.jpg" + ')');
        i++;
    }else{
        $("#header").css("background-image", 'url(' + "../img/background.png" + ')');
        i=0;
    }
    changebg();
}