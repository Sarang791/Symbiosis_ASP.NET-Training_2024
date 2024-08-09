import { Keyboard } from "./keyboard";
import { Cpu } from "./cpu";
import { Monitot } from "./monitot";
export class Computer {
    public monitor: Monitot;
    public cpu :Cpu;
    public keyboard : Keyboard;
    public discription:string="";
    
    constructor(a:string,b:string,c:string){
        this.monitor = new Monitot(a);
        this.cpu = new Cpu(b);
        this.keyboard = new Keyboard(c);
    }

    public giveData():string{
        return `My Computer has ${this.cpu.cou_no} Cpu ${this.keyboard.keyboard} Keyboards ${this.monitor.monitor_no} Monitors`
    }


}
