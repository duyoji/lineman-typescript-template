/**
 * Created by Tsuyoshi on 2014/08/31.
 */
class Greeter {

    private greetString:string;

    constructor(greeting: string) {
        this.greetString = greeting;
    }

    public getGreetString() : string {
        return this.greetString;
    }

    public greet() {
        return "<h1>" + this.greetString + "</h1>";
    }
}