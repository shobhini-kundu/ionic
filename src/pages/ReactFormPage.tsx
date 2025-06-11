import { IonCard, IonContent,IonPage } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import "./ReactFormPage.scss"
import { useForm } from 'react-hook-form'
import { IUser } from '../interfaces/user'
const ReactFormPage:React.FC = () => {
    const[userData,setUserData]=useState<IUser[]>([]);
    const {register,handleSubmit,reset,formState:{errors}}=useForm<IUser>({mode:"all"})
    useEffect(()=>{
console.log(userData);

    },[userData])
    const handleCreateUser=(user:IUser)=>{
        console.log("UserData",user);
    setUserData((prevUser)=>[...prevUser,user])  
    reset();
           }
return (
<IonPage>
<IonContent>
    <div className='form_container'>
    <IonCard><form onSubmit={(event)=>{
            void handleSubmit(handleCreateUser)(event)
        }}>
        <div>
        <label htmlFor='name'>Name</label>
        <input type='text'{...register("name",{required:{
        value:true,
        message:"Enter your name"
        }})}/>
        <div className='error_message'>{errors.name?.message}</div>
        </div>
        
        <div>
        <label htmlFor='age'>Age</label>
        <input type='number' {...register("age",{required:{
        value:true,
        message:"Enter your age"
        }})}/>
        <div className='error_message'>{errors.age?.message}</div>
        </div>
        <div>
        <label htmlFor='email'>Email</label>
        <input type='text' {...register("email",{required:{
        value:true,
        message:"Enter your email"
        },valueAsNumber:true})}/>
        <div className='error_message'>{errors.email?.message}</div>
        </div>
        <button type='submit'>Submit</button>
        </form>
    </IonCard>
    </div>
    </IonContent>
    </IonPage>
    )
}
export default ReactFormPage