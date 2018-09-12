import copy from "../src/copier"
import * as destination from "../src/destination"
import * as source from "../src/source"


test("should copy one char from source to destination", () => {
    // create mock functions
    destination.setChar = jest.fn();
    // create stub for getChar
    source.getChar = jest.fn();
    source.getChar
        .mockReturnValueOnce('a')
        .mockReturnValueOnce('\n')

    copy()

    expect(destination.setChar).toHaveBeenCalledWith('a');
});

test("should copy two chars from source to destination", () => {
    // create mock functions
    destination.setChar = jest.fn();
    // create stub for getChar
    source.getChar = jest.fn();
    source.getChar
        .mockReturnValueOnce('a')
        .mockReturnValueOnce('b')
        .mockReturnValueOnce('\n')

    copy()

    // the function must be called with a and b
    expect(destination.setChar).toHaveBeenCalledWith('a');
    expect(destination.setChar).toHaveBeenCalledWith('b');
});

test("should copy three chars from source to destination and terminate copy on newline", () => {
    // create mock functions
    destination.setChar = jest.fn();
    // create stub for getChar
    source.getChar = jest.fn();
    source.getChar
        .mockReturnValueOnce('a')
        .mockReturnValueOnce('b')
        .mockReturnValueOnce('c')
        .mockReturnValueOnce('\n')

    copy()

    expect(destination.setChar).toHaveBeenCalledWith('a');
    expect(destination.setChar).toHaveBeenCalledWith('b');
    expect(destination.setChar).toHaveBeenCalledWith('c');
    expect(destination.setChar).not.toHaveBeenCalledWith('\n');
});

test("should copy two chars from source to destination in the correct order", () => {
    // create mock functions
    destination.setChar = jest.fn();
    // create stub for getChar
    source.getChar = jest.fn();
    source.getChar
        .mockReturnValueOnce('a')
        .mockReturnValueOnce('b')
        .mockReturnValueOnce('\n')

    copy()

    // first call must be a, then next call must be b
    // https://jestjs.io/docs/en/mock-functions
    expect(destination.setChar.mock.calls[0][0]).toBe('a');
    expect(destination.setChar.mock.calls[1][0]).toBe('b');
});