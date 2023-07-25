class User{
    // Constructor de la clase
    constructor({name, surname, email, role}){
        this.name=name;
        this.surname=surname;
        this.email=email;
        this.role=role;
        //addUser se agrega método
        this.courses=[];
        this.messageCache=[];
        this.receivedMessageCache=[];
        
    };
    
    // Se recuperan datos del usuario
    get  usuario(){
        return {
            name: this.name,
            surname: this.surname,
            email: this.email,
            role: this.role,
            course: this.courses
        };
    };

    addCourse(course, level){
        this.courses.push({course, level}); // agregamos el nuevo curso al array
        console.log(`Se ha agregado correctamente el curso: ${course}, con el nivel: ${level}`);
    };
    removeCourse({course}){
        const index = this.courses.findIndex((c)=>c.course===course);
        if(index !== -1){
            this.courses.splice(index, 1);
            console.log(`El curos: ${course} ha sido eliminado correctamente`);
        }else{
            console.log(`No se ha encontrado el curso: ${course}, por favor ingrese un curso registrado para el ${this.role}`);
        }
    };
    editCourse(course, level){
       const index = this.courses.findIndex((c)=> c.course === course);
       if(index !== -1){
        this.courses[index].level=level; // Actualizamos el nivel del curso
        console.log(`Se ha modificado el nivel del curso: ${course} correctamente`);
       }else{
        console.log(`El curso: ${course}, no ha sido encontrado o no existe para este ${this.role}`);
       }
    };
   sendMessage(to, message){
        to.receivedMessage(this,message);
        this.messageCache.push({to:to,message:message});
        console.log(`El mensaje ha sido enviado a ${to.name} correctamente.`);

   }
   receivedMessage(from, message){
        this.receivedMessageCache.push({from:from,message:message});
        console.log(`El mensaje de ${from.name} ha sido recibido correctamente.`);
   }
   showMessagesHistory(){
        this.messageCache.forEach((msg)=>{
            console.log(`Mensaje de ${this.name} a ${msg.to.name}: ${msg.message}`);
        });
        this.receivedMessageCache.forEach((msg)=>{
            console.log(`Mensaje recibido de ${msg.from.name} a ${this.name}: ${msg.message}`);
        });
   }

}

//////////////////////////// HERENCIA ///////////////////////////////

class Student extends User{
constructor({name, surname, email, role}){
    super(name, surname, email, role);
    
}

}
let student1 = new Student({name: 'Rafael', surname: 'Fife', email: 'rfife@rhyta.com'});
console.log(student1.name);
