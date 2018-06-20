var Image = require("nativescript-image").Image;
var image = new Image();

describe("greet function", function() {
    it("exists", function() {
        expect(image.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(image.greet()).toEqual("Hello, NS");
    });
});