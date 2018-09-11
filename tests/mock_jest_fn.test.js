import * as app from "../src/app";
import * as destination from "../src/destination";

destination.setChar = jest.fn();
math.subtract = jest.fn();

test("calls math.add", () => {
    app.copy();
    expect(destination.SetChar).toHaveBeenCalledWith('a');
});

// test("calls math.subtract", () => {
//     app.doSubtract(1, 2);
//     expect(math.subtract).toHaveBeenCalledWith(1, 2);
// });