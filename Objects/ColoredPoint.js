let cuadros=[["Monalisa","Leonardo da Vinci",1994], ["The Last Supper","Leonardo da vinci",1828], ["Starry Night","Vicent van Gogh",1792], ["The Scream","Edvard Munch",1722], ["Guernica","Pablo Picasso",1830], ["The Kiss", "Johannes Vermeer",1923]];

    
////////////////////////// CONSTRUCTOR //////////////////////////////////////
let Image = function(title, artist, date){

    this.title=title;
    this.artist=artist;
    this.date=date;
};

let image = new Image("Don Quijote", "M. Cervantes", "1930");


for(var key in image){
    console.log(`${key}: ${image[key]}`);
}



/////////////////////// FABRICA  //////////////////////////////////////////
let GetImage = function(title, artist, date){

    var img=[];
    img.title=title;
    img.artist=artist;
    img.date=date;

    return img;
};





let imagen2 = GetImage("La Iliada", "Homero", "420 ac");

    for (var key in imagen2){

        console.log(`${key}: ${imagen2[key]}`);
    };

///////////////////// IMPRESIÓN A TRAVÉS DEL CONSTRUCTOR  ////////////////////////////
let imagen1 = cuadros.map(function(data){

    return new Image(data[0], data[1], data[2]);
});

imagen1.forEach((data)=>{

    console.log(data);
});

//////////////////// IMPRESIÓN A TRAVÉS DEL FACTORY //////////////////////////////////////

let imagen3 = imagen1.map(function(data){

    return GetImage(data.title, data.artist, data.date);
});

console.log("aquí se imprime por factory");
imagen3.forEach((data)=>{
    console.log(data);
});

/////////// AGREGAMOS ELEMENTOS AL ARRAY Y NOS TIENE QUE DECIR SI EXISTE O NO ////////////

let images=[["Monalisa","Leonardo da Vinci",1994], ["The Last Supper","Leonardo da vinci",1828], ["Starry Night","Vicent van Gogh",1792], ["The Scream","Edvard Munch",1722], ["Guernica","Pablo Picasso",1830], ["The Kiss", "Johannes Vermeer",1923]];



//////// PROTOTIPOS/////
  //  ADD  //
Array.prototype.add=function(title, artist, date){

    let exists = this.some(function(data){ //Some devuelve true o false en base a una comparación
        return data[0]===title && data[1]===artist && data[2]===date;
    });

    if(!exists){ // validamos si existe para o no para agregar los nuevos elementos al Array
        this.push(title, artist, date);
        console.log(`Se agrega el nuevo registro a la lista : (${title}, ${artist}, ${date})`);
    }else{
        console.log(`El registro: ${title}, ${artist}, ${date} EXISTE! por lo tanto no se agregará a la lista.`);
    }
};

  //  SHOW  //

Array.prototype.show = function(){

    this.forEach((data)=>{
        console.log(data);
    });
};
  //  CLEAR //

Array.prototype.clear = function(){

    this=[];
};


images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.add('The Last Supper', 'Leonardo da Vinci', 1495);
images.add('The Starry Night', 'Vincent van Gogh', 1889);
images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.show();
// -> Mona Lisa (Leonardo da Vinci, 1503)
// -> Last Supper (Leonardo da Vinci, 1495)
// -> The Starry Night (Vincent van Gogh, 1889)
images.clear();
images.show();