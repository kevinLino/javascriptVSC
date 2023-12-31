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


let student1 = new User({name: 'Rafael', surname: 'Fife', email: 'rfife@rhyta.com', role: 'student'});
let student2 = new User({name: 'Kelly', surname: 'Estes', email: 'k_estes@dayrep.com', role: 'student'});
let teacher1 = new User({name: 'Paula', surname: 'Thompkins', email: 'PaulaThompkins@jourrapide.com', role: 'teacher'});

student1.addCourse('maths', 2);
student1.removeCourse('physics');
teacher1.addCourse('biology', 3);
teacher1.editCourse('biology', 4);
console.log(`${student1.name}: ${student1.courses.length} courses`); // -> Rafael: 1 courses
console.log(`${teacher1.name}: ${teacher1.courses.length} courses`); // -> Paula: 1 courses
teacher1.sendMessage(student1, 'test message');
teacher1.sendMessage(student1, 'another message');
student1.sendMessage(teacher1, `Prueba de mensaje`);
teacher1.showMessagesHistory();