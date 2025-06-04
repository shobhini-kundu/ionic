import { IonContent, IonPage } from '@ionic/react';
import React from 'react'

const JsBasic:React.FC = () => {
  const user ={
    name:"amit",
    age:24
  };
// console.log("user",user)
const users =[
  {
    name:"amit",
    age: 24
  },
{
    name:"sumit",
    age: 24
  }

]
// console.log("users",users)
for(const data in user)
{
  console.log ("for-in data",data);
}
for(const data of users)
{
  console.log (data);
  console.log(data.name);
}
users.forEach((user)=>{
  console.log("forEach:",user);
}
)
if (user.name==="sumit"){
  user.name="ankit";
}
console.log("new user",user);
const newUser =users.map((user)=>{
  return user;
})
console.log(newUser);
const updatedUser =users.map((user)=>{
  if(user.age===26)
  {
    return{...user,name:"Akash"}
  }
  return user;
})
console.log(updatedUser)
const newUsersData = [
    { name: "amit", age: 24 },
    { name: "sumit", age: 26 },
    { name: "aniket", age: 24 },
    { name: "subham", age: 26 },
    { name: "amit", age: 24 },
    { name: "ashish", age: 26 },
  ];
const filteredUser=newUsersData.filter((user)=>{
  return user.age===26;
});
console.log(filteredUser);
const latestUser = newUsersData.find((user)=>{
  return user.age ===26;
});
console.log(latestUser);


const fun1=()=>{
const a=10;
const b=20;
console.log(a+b);
};
fun1();
const fun2=(a:number, b:number)=>{
  return a+b
}
const newData =fun2(10,30);
console.log(newData);
//   const abc = 20;
// const bac = abc;
// console.log("bac value",bac);
// console.log("abc value:",abc);
// if(abc===bac){
//   console.log("hello");

// }
  return (<IonPage>
    <IonContent>

<div>name:{user.name}</div>
<div>age:{user.age}</div>

{/* 
/** <div>abc:{abc}</div>
{bac===abc&&
  <div> bac:{bac}</div>
}
<div>bac: {abc== 20 ? "Hi":"Bye"}
</div>*/ }
{users.map((user, index)=>{

return(<div key={index}>

<div>user name : {user.name}</div>

<div>user age: {user.age}</div>

</div>)

})}
    </IonContent>
  </IonPage>
    
  )
}

export default JsBasic