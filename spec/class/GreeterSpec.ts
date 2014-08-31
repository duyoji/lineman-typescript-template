/**
 * Created by Tsuyoshi on 2014/08/31.
 */

/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../../app/js/class/Greeter.ts" />

describe("Greeter Class Test", () => {
    beforeEach(()=> {
        this.greeter = new Greeter("greeter test");
    });

    it("greeterString should be string is 'greeter test", () => {
        expect( this.greeter.getGreetString() ).toEqual("greeter test");
    });
});