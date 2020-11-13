// Create the Class
class student {
    constructor (name,family,age,bornIn) {
        this.name = name
        this.family = family
        this.age = age
        this.bornIn  = bornIn
    }
    showDetails () {
        let id = this.id = Date.now()
        console.log("Student ID : " + id)
        console.log("Full name is : " + this.name + " " + this.family)
        console.log("Age is : " + this.age)
        console.log("Born in : " + this.bornIn)
    }
}
// Initialize
var myStudent = new student ("Kaveh","Rezaei",29,"Tehran")

//Call the class method
myStudent.showDetails()

//Class Inheritance
class studentGrade extends student {
    constructor(name,family,age,bornIn,grade) {
        super(name,family,age,bornIn);
        this.grade = grade
    }
    showGrade() {
        return this.showDetails() + console.log("Your grade is :" + " " + this.grade)

    }

}
var newStudent = new studentGrade ("Kaveh","Rezaei",29,"Tehran","A+")
newStudent.showGrade()

// Another Initialize for Class
var newPerson = class person {
    constructor (firstname,lastname,age) {
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
    }
    showPersonInfo () {
        console.log("My full name is : " + this.firstname + " " + this.lastname
                    + " and I am " + this.age + " years old!")

    }

}