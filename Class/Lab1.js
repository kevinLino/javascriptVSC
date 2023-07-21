class User{

    constructor({name, surname, email, role}){
        this.usuario={name, surname, email, role};
    };
    set usuario({name, surname, email, role}){
        this.name=name;
        this.surname=surname;
        this.email=email;
        this.role=role;
        //addUser se agrega método
        this.course=course;
        this.level=level;
    };
    get  usuario(){
        return {
            name: this.name,
            surname: this.surname,
            email: this.email,
            role: this.role
        };
    };

    addUser({course, level}){
        this.course = course;
        this.level = level;
    };
    removeCourse({course}){
        this.course = this.course===course ? "":course;
    };
    editCourse({course, level}){
        if(this.course === course){
            this.level=level;
        }
    };
    #sendMessage({student, message}){
        
    };

}
let user = new User({name: "Kevin",surname:"Lino", email:"kev.lino.limas@gmail.com", role:"estudiante"});
console.log(user.usuario);