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

    addCourse({course, level}){
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
    editCourse({course, level}){
       const index = this.courses.findIndex((c)=> c.course === course);
       if(index !== -1){
        this.courses[index].level=level; // Actualizamos el nivel del curso
        console.log(`Se ha modificado el nivel del curso: ${course} correctamente`);
       }else{
        console.log(`El curso: ${course}, no ha sido encontrado o no existe para este ${this.role}`);
       }
    };
   sendMessage({to, message}){
        to.receivedMessageCache(this,message);
        this.messageCache.push({to:to,message:message});

   }

}
let user = new User({name: "Kevin",surname:"Lino", email:"kev.lino.limas@gmail.com", role:"estudiante"});
console.log(user.usuario);
user.addCourse({course:"Maths",level:2});
console.log(user.usuario);
user.editCourse({course:"Maths", level: 3});
console.log(user.usuario);
user.removeCourse({course:"Maths"});
console.log(user.usuario);