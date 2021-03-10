const axios=require('axios')
const functions ={
    
    add:function(num1,num2){
        return num1+num2
    },
    isNull:()=>null,
    isUndefined:()=>undefined,
    checkValue:(x)=>x,
    createUser:()=>{
        const user={ firstName:'Manoj'};
        user['lastName']='Kale';
        return user;
    },
    fetchUser:()=>{
        return axios.get(`https://jsonplaceholder.typicode.com/users/1`)
        .then(res=>res.data)
        .catch(err=>'error')
    }
}

module.exports=functions;