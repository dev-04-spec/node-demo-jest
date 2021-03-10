const functions = require('./functions');

// beforeAll(()=>initDatabase());
// afterAll(()=>closeDatabase());

// const initDatabase=()=>console.log(`Database initialized...`);
// const closeDatabase=()=>console.log(`Database closed...`);
const nameCheck = () => console.log('Checking Name....');
describe('checking Names', () => {

    beforeEach(() => nameCheck());

    test('User is manoj', () => {
        const user = 'manoj';
        expect(user).toBe('manoj')
    });

    test('User is Kiran', () => {
        const user = 'Kiran';
        expect(user).toBe('Kiran')
    });
})
//toBe
test('Adds 2+2 to equal 4', () => {
    expect(functions.add(2, 3)).toBe(5);
});
//toBe
test('Adds 2+2 to NOT equal 5', () => {
    expect(functions.add(2, 3)).not.toBe(6);
});
//toBeNull
test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});
//toBeUndefined
test('Should be undefined', () => {
    expect(functions.isUndefined()).toBeUndefined();
});
//toBeFalsy
test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
});
test('User should be Manoj Kale object', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Manoj',
        lastName: 'Kale'
    });
});

// Less than and greater than
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1550)
});

// Regex
test('There is no "I" alphabet in team', () => {
    expect('team').not.toMatch(/I/i)
});

//Array
test('Admin should be in username', () => {
    let usernames = ['kiran', 'manoj', 'admin'];
    expect(usernames).toContain('manoj');

});

// Working with async data

//Promise
test('User fetched name should be Leanne Graham', () => {
    expect.assertions(1);
    return functions.fetchUser()
        .then(data => {
            expect(data.name).toEqual('Leanne Graham');
        })
});

// Async/Await
test('User fetched name should be Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
});