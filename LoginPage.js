"use client";
import React, { useState } from 'react';
import {useRouter} from 'next/navigation'
function LoginComponeent() {
    const router = useRouter()
    const [route, setRoute] = useState()
    const [itemName, setItemName] = useState('');
const [itemAddress, setItemAddress] = useState('');
const [successMessage, setSuccessMessage] = useState('');
const [errorMessage, setErrorMessage] = useState('');

const handleSubmit = (e) => {

    router.push("/Create-Cust")
}
    const Login =async() =>{
        const resp = await fetch(
          `https://sandbox.weavr.io/multi/login_with_password`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'api-key': 'JRsXx4zY2ikBgKhX7awBCw=='
            },
            body: JSON.stringify({
              email: itemName,
              password: {value: itemAddress}
            })
          }
        );
      
        console.log("testdata");
        const data1 = await resp.json();
handleSubmit();


      
      }
    
    return (
        <div>
            <label>
        Email :
            <input
                type="text"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                placeholder="Enter Customer name"
            />
            </label>
            <label>
        Passowrd:
            <input
                type="text"
                value={itemAddress}
                onChange={(e) => setItemAddress(e.target.value)}
                placeholder="Enter Customer Password"
            />
            </label>
            
            <button  onClick={Login}>Login</button><br></br>
           
            
            
            {successMessage && <p>{successMessage}</p>}
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    );
    }

export default LoginComponeent;

