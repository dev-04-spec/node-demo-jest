const reverseString=require('./reverseString');

test('reverseString function exists',()=>{
  expect(reverseString).toBeDefined();  
});

test('String reverses',()=>{
    expect(reverseString('manoj')).toEqual('jonam');
});

test('String reverses with upperCase',()=>{
    expect(reverseString('Manoj')).not.toEqual('jonam');
})