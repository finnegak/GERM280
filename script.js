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
        setTimeout("slideShow()",4000);

    }

    /*
    Museum Folkwang is a prominent art museum located in Essen, Germany. It is known for its impressive collection of art spanning various periods and styles, with a strong focus on modern and contemporary art. The museum is widely regarded as one of the most important cultural institutions in Germany and has a rich history. Here are some key aspects of Museum Folkwang:

History: Museum Folkwang was founded in 1902 by Karl Ernst Osthaus, a prominent art collector and patron of the arts. It initially began as a museum of the arts and crafts but soon expanded its collection to include a wide range of visual arts, from paintings and sculptures to graphic art, photography, and design.

Collection: Museum Folkwang's collection is extensive and diverse. It includes works from various art movements, including Impressionism, Expressionism, Cubism, and Surrealism. Notable artists in the collection include Vincent van Gogh, Edvard Munch, Ernst Ludwig Kirchner, and Pablo Picasso. The museum also boasts a significant collection of photography, making it a valuable resource for photography enthusiasts.

Renowned Exhibitions: The museum regularly hosts temporary exhibitions featuring artworks from its collection and loans from other institutions. These exhibitions often explore various aspects of modern and contemporary art, attracting art enthusiasts from around the world.

Architecture: Museum Folkwang underwent a significant architectural transformation in the early 21st century. In 2010, a new building designed by the British architect David Chipperfield was inaugurated. This modern and minimalist structure was built to house the museum's expanding collection and provide state-of-the-art facilities for visitors.

Location: Museum Folkwang is situated in the city of Essen, in the Ruhr area of Germany. The museum is easily accessible and is part of a cultural complex that includes the Ruhr Museum and the Zollverein Coal Mine Industrial Complex, which is a UNESCO World Heritage Site.

Educational and Cultural Programs: In addition to its exhibitions, the museum offers educational programs, lectures, and workshops for visitors of all ages. It plays an active role in promoting art and culture in the region.

Cultural Significance: Museum Folkwang is considered a cultural and artistic treasure in Germany. Its extensive collection and commitment to showcasing a broad spectrum of artistic styles and periods make it a vital institution in the world of art.

Museum Folkwang's dedication to collecting, preserving, and exhibiting significant works of art from various periods and movements has solidified its reputation as a leading institution in the global art community. It continues to be a must-visit destination for art enthusiasts and scholars interested in the rich tapestry of modern and contemporary art.
*/

/*
Caspar David Friedrich (1774–1840) was a prominent German Romantic painter known for his contemplative and symbolic landscapes. He is considered one of the most important figures in the development of 19th-century European art. Friedrich's work is often associated with the Romantic movement due to its emphasis on emotions, nature, and spirituality.

Here are some key aspects of Caspar David Friedrich's life and art:

Early Life: Friedrich was born on September 5, 1774, in Greifswald, Pomerania, which is now part of Germany. He displayed artistic talent from a young age and studied art at the University of Greifswald.

Influence of Romanticism: Friedrich's work is a prime example of the Romantic art movement. His paintings often explore themes of human isolation, the sublime power of nature, and the spiritual connection between humanity and the natural world.

Landscape Painting: Friedrich is best known for his landscape paintings, which typically feature awe-inspiring natural settings, such as mountains, forests, and the sea. These landscapes often serve as backdrops for smaller, contemplative figures, emphasizing the insignificance of humanity in the face of nature's grandeur.

Symbolism: Friedrich's paintings are laden with symbolism and hidden meanings. Common motifs in his works include solitary figures, crosses, ruins, and the use of light to convey spiritual and emotional significance.

Relationship with Religion: Friedrich's work often reflects his deep religiosity. His paintings convey a sense of spirituality and a connection between the human soul and the divine, even when religion is not explicitly portrayed.

Major Works: Some of Friedrich's most famous paintings include "Wanderer above the Sea of Fog," "The Monk by the Sea," "The Sea of Ice," and "The Abbey in the Oakwood." These works are celebrated for their emotional intensity and breathtaking scenery.

Decline in Popularity: Friedrich's work fell out of favor in the mid-19th century but saw a resurgence in the 20th century when it influenced various modern and contemporary artists. His work had a significant impact on the development of German Romanticism and later art movements, such as Symbolism and Expressionism.

Later Life: Friedrich struggled with his mental and physical health later in life, particularly during his final years. He suffered a stroke in 1835, which left him partially paralyzed and unable to paint. He spent his last years in near obscurity and poverty, passing away in Dresden on May 7, 1840.

Caspar David Friedrich's legacy endures through his timeless and evocative landscape paintings, which continue to inspire artists and captivate art enthusiasts to this day. His ability to convey deep emotions and spirituality through the portrayal of the natural world has solidified his place as one of the most important artists of the Romantic era.
*/