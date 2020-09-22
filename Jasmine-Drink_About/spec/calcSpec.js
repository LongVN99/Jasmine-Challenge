describe("What drink to take", function () {
    beforeEach(function () {
        drink = new whatCanIDrink();
    })

    describe("Checks age", function() {

        it("Age is -5 should return 'Sorry. I can’t tell what drink because that age is incorrect!'", function () {
            var result = whatCanIDrink(-5);
            expect(result).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });

        it("Age is 10 should return 'Drink Toddy'", function() {
            var result = whatCanIDrink(10);
            expect(result).toBe("Drink Toddy");
        });

        it("Age is 15 should return 'Drink Coke'", function () {
            var result = whatCanIDrink(15);
            expect(result).toBe("Drink Coke");
        });

        it("Age is 19 should return 'Drink Beer'", function () {
            var result = whatCanIDrink(19);
            expect(result).toBe("Drink Beer");
        });

        it("Age is 50 should return 'Drink Whisky'", function () {
            var result = whatCanIDrink(50);
            expect(result).toBe("Drink Whisky");
        });
    })
});







