class Stack {
    constructor() {
        this.top = -1;
        this.items = {};
    }

    get peek() {
        return this.items[this.top];
    }

    push(value) {
        this.top+=1;
        this.items[this.top] = value;
    }
}

describe('My Stack', () => {
    let stack;

    beforeEach(() => {
        stack = new Stack();
    });
    it('is created empty', () => {
        const stack = new Stack();
        expect (stack.top).toBe(-1);
        expect (stack.items).toEqual({});
    });

    it('can push to the top', () => {
        stack.push('melon')
        expect(stack.top).toBe(0);
        expect(stack.peek).toBe('melon')
        
        stack.push('flower');
        expect(stack.top).toBe(1);
        expect(stack.peek).toBe('flower');
    });
    // it.todo('is created empty');
    // it.todo('can push to the top');
    it.todo('can pop off');
});
