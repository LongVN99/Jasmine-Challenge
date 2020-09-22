describe("My fizzBuzz function", function () {
  beforeEach(function () {
    num = new fizzBuzz();
  });

  describe("Calculation", function () {
    it("12 should be divived by 3 but not by 5", function () {
      result = fizzBuzz(12);
      expect(result).toBe("Fizz");
    });

    it("10 should be divived by 5 but not by 3", function () {
      result = fizzBuzz(10);
      expect(result).toBe("Buzz");
    });

    it("15 should be divived by 3 and by 5", function () {
      result = fizzBuzz(15);
      expect(result).toBe("FizzBuzz");
    });

    it("13 should not be divived by 3 nor by 5", function () {
      result = fizzBuzz(13);
      expect(result).toBe(13);
    });
  });
});
