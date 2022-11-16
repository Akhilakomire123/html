class student{
    constructor(name,age,marks){
        this.name=name;
        this.age=age;
        this.marks=marks;
    }
    setPlacementAge(minPlacementAge){
        console.log(this);
        return(minMarks)=>{
            console.log('inside eligible current campus',this)
            if(this.marks>minMarks && this.age>minPlacementAge){
                console.log(this.name+"is ready for placements");
            }
            else{
                console.log(this.name+"is not ready for palcements")
            }
        }
    }

}
const Akhi=new student('Akhi',25,75);
const siri=new student('siri',13,35);

Akhi.setPlacementAge(18)(40);
siri.setPlacementAge(18)(40);

