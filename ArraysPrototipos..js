let images = {

    imagesList: [],
    contains: function(index){
        this.imagesList.forEach((data)=>{
            if(index === this.imagesList[data[0]]){
                console.log(true);
            }else{console.log(false);}
        });
    },
    add:function(title, artist, date){
        const newImage ={
            title: title,
            artist: artist,
            date: date  
        }
        this.imagesList.push(newImage);
        console.log(`La imagen ${title} ha sido generada`);
        
    },
    show: function(){
        console.log(`MOSTRANDO ELEMENTOS DE IMAGES.........`)
        this.imagesList.forEach((show)=>{console.log(`${show.title}: (${show.artist}, ${show.date})`)});
    },
    clear: function(){
        this.imagesList = [];
        console.log('ELEMENTOS ELIMINADOS..........')
    },
    delete: function(title){
        this.imagesList.forEach((data,index)=>{
            if(data.title === title){
                this.imagesList.splice(index,1);
            }
        });
    },
    edit: function(title, artist, date){
        this.imagesList.forEach((element)=>{

            if(title===element.title){
                element.artist=artist;
                element.date=date;
            }
        });
    }

}



images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.add('The Last Supper', 'Leonardo da Vinci', 1495);
images.add('The Starry Night', 'Vincent van Gogh', 1889);
images.edit('Mona Lisa', 'Leonardo da Vinci', 1504);
images.delete('The Last Supper');
images.show();
// -> Mona Lisa (Leonardo da Vinci, 1504)
// -> The Starry Night (Vincent van Gogh, 1889)
