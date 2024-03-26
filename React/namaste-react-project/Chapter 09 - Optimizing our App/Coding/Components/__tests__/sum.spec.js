import {sum} from '../sum';

test('Sum of two numbers',() => {
    expect(sum(5,2)).toBe(7);
})

describe('useCounter custom hook', () => {
    it('should initialize counter with initial value', () => {
        const res = 0;
        expect(res).toBe(0);
    })
})