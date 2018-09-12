import copy from "../src/copier"
import * as destination from "../src/destination"
import * as source from "../src/source"


test("copier copies one char from source to destination", () => {
    // create mock functions
    destination.setChar = jest.fn();
    // create stub for getChar
    source.getChar = jest.fn(() => 'a');

    copy()

    expect(destination.setChar).toHaveBeenCalledWith('a');
});
