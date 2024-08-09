export class Employee {
    id:number=0;
    name:string="";
    salary:number=0;
    constructor(eid:number,ename:string,esalary:number){
        this.id = eid;
        this.name = ename;
        this.salary=esalary;
    }
}
