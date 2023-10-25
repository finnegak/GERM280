var timer_on;
var headings = {1:"Das Felsentor im Uttewalder Grund, 1800", 2 : "Pflanzenstudien, 1801", 3 : "Ruine an einem Deich, um Oktober 1801",4 : "Frau mit Spinnennetz - Melancholie, 1803",5:"Gebirgslandschaft mit Regenbogen, 1809/10", 6 : "Tannenbäume, 1813", 7 : "Frau vor der untergehenden Sonne, around 1818"};

var caption1 = "Rock Arch in the Uttewalder Grund<br>Sepia over pencil<br>Paper 70,6 x 50 cm";
var caption2 = "Plant Studies<br>Brush in sepia over pencil<br>Paper 13,3 x 22,9 cm";
var caption3 = "depictions of the ruins of Wolgast Castle<br>Pencil and pen in brown<br>Paper 23,7 x 36,6 cm";
var caption4 = "Holzschnitt<br>Paper 17,3 x 12 cm";
var caption5 = "Mountain Landscape with Rainbow<br>Oil on canvas<br>69 x 102 cm";
var caption6 = "Pine Trees<br>Pencil<br>19,3 x 12,2 cm";
var caption7 = "Woman in front of Setting Sun<br>Oil on canvas<br>22 x 30,5 cm<br>Acquired in 1937";
var captions = {1:caption1, 2:caption2, 3:caption3, 4:caption4, 5:caption5, 6:caption6, 7:caption7};
var current = 4;

    function changeImage () {
        if (current > 1) {
            current-=1
        } else {
            current = 7
        }
        var one = document.getElementById('img1').src;
        var two = document.getElementById('img2').src;
        var three = document.getElementById('img3').src;
        var four = document.getElementById('img4').src;
        var five = document.getElementById('img5').src;
        var six = document.getElementById('img6').src;
        var seven = document.getElementById('img7').src;

        document.getElementById('img1').src = seven;
        document.getElementById('img2').src = one;
        document.getElementById('img3').src = two;
        document.getElementById('img4').src = three;
        document.getElementById('img5').src = four;
        document.getElementById('img6').src = five;
        document.getElementById('img7').src = six;

        var newHeading = headings[current];
        document.getElementById('heading').innerHTML = newHeading;
        var newCaption = captions[current];
        document.getElementById('caption').innerHTML = newCaption;


    }
    function slideShow() {
        if (timer_on == false) {
            return;
        }
        changeImage();
        setTimeout("slideShow()",2000);

    }