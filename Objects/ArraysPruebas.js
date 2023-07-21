let images=[["Monalisa","Leonardo da Vinci",1994], ["The Last Supper","Leonardo da vinci",1828], ["Starry Night","Vicent van Gogh",1792], ["The Scream","Edvard Munch",1722], ["Guernica","Pablo Picasso",1830], ["The Kiss", "Johannes Vermeer",1923]];

//////// PROTOTIPOS/////
  //  ADD  //
Array.prototype.add=function(title, artist, date){

    let exists = this.some(function(data){ //Some devuelve true o false en base a una comparación
        return data[0]===title && data[1]===artist && data[2]===date;
    });

    if(!exists){ // validamos si existe para o no para agregar los nuevos elementos al Array
        this.push([title, artist, date]);
        console.log(`Se agrega el nuevo registro a la lista : (${title}, ${artist}, ${date})`);
    }else{
        console.log(`El registro: ${title}, ${artist}, ${date} EXISTE! por lo tanto no se agregará a la lista.`);
    }
};

  //  SHOW  //

Array.prototype.show = function(){

console.log(`//////// SE MUESTRAN LOS DATOS DE LA LISTA //////////////`);
    this.forEach((data)=>{
        console.log(`${data[0]}: (${data[1]}, ${data[2]})`);
    });
};
  //  CLEAR //

Array.prototype.clear = function(){

   while(this.length>0){
    this.pop();
   }
   console.log(`Elementos eliminados..`);
};
  //  EDIT  //
Array.prototype.edit = function(title, artist, date) {
    this.forEach((data)=>{
      if(data[0]===title){
        data[1]=artist;
        data[2]=date;
        console.log(`datos actualizados: ${data}`);
      }
    });
};

images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.add('The Last Supper', 'Leonardo da Vinci', 1495);
images.add('The Starry Night', 'Vincent van Gogh', 1889);
images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.show();
// -> Mona Lisa (Leonardo da Vinci, 1503)
// -> Last Supper (Leonardo da Vinci, 1495)
// -> The Starry Night (Vincent van Gogh, 1889)
//images.clear();
images.edit('Mona Lisa', 'Leonardo da Vinci', 1994);
images.show();