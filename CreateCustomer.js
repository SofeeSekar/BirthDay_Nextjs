
"use client";
import React, { useState } from 'react';


function CreateItemComponent() {
    const [itemName, setItemName] = useState('');
    const [itemAddress, setItemAddress] = useState('');
    const [itemDate, setItemDate] = useState('');
    const [AuthToken, SetAuthtoken] = useState('');
    const [NewCusId, SetCusID] = useState('');

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    

const OWT=async()=>{
  const resp = await fetch(
    `https://sandbox.weavr.io/multi/outgoing_wire_transfers`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'idempotency-ref': 'sssssaaaaaaaaaaaqatsa',
        Authorization: 'Bearer '+AuthToken,
        'api-key': 'JRsXx4zY2ikBgKhX7awBCw=='
      },
      body: JSON.stringify({
        profileId: '108271486731288587',
        tag: 'test',
        sourceInstrument: {
          type: 'managed_accounts',
          id: '112077557521186860'
        },
        transferAmount: {
          currency: 'GBP',
          amount: 10
        },
        description: 'string',
        destinationBeneficiary: {
          name: 'test',
          address: 'line1',
          bankName: 'string',
          bankAddress: 'string',
          bankCountry: 'GB',
          bankAccountDetails: {
            accountNumber: '55779911',
            sortCode: '200000'
          }
        }
      })
    }
  );

  const data = await resp.json();
  console.log(data);
};


    const CreateConsumer =async()=>  {
    const resp = await fetch(
          `https://sandbox.weavr.io/multi/consumers`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'api-key': 'JRsXx4zY2ikBgKhX7awBCw=='
            },
            body: JSON.stringify({
              profileId: '108271486661492747',
              tag: 'string',
              rootUser: {
                name: 'string',
                surname: 'string',
                email: 'test3@test.com',
                mobile: {
                  countryCode: '+44',
                  number: '9090909090'
                },
                dateOfBirth: {
                  year: 1900,
                  month: 1,
                  day: 1
                },
                occupation: 'ACCOUNTING',
                address: {
                  addressLine1: 'string',
                  addressLine2: 'string',
                  city: 'string',
                  postCode: 'string',
                  state: 'string',
                  country: 'GB'
                },
                placeOfBirth: 'string',
                nationality: 'GB'
              },
              ipAddress: 'string',
              acceptedTerms: true,
              baseCurrency: 'GBP',
              feeGroup: '',
              sourceOfFunds: 'PERSONAL_SAVINGS',
              sourceOfFundsOther: 'string'
            })
          }
        );
        if (resp.ok) {
        const data = await resp.json();
            
          SetCusID(data["id"]);
        }
      };
      
    const handleCreateItem = async () => {
        try {
            const response = await fetch('https://localhost:7266/api/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ Name: itemName, Address: itemAddress,Date:itemDate }) // Assuming your item model has a 'name' property
            });

            if (!response.ok) {
                throw new Error('Failed to create item');
            }

            const data = await response.json();
            setSuccessMessage('Item created successfully');
            setItemName('');
            setItemAddress('');
            setItemDate('');

        } catch (error) {
            setErrorMessage('Failed to create item: ' + error.message);
        }
    };
    const  SendTransact = async() => {
       
        const resp = await fetch(
          `https://sandbox.weavr.io/multi/sends`,
          {
            
            method: 'POST',
            mode:'cors',
            headers: {
              'Content-Type': 'application/json',
              Autorization:'Bearer '+AuthToken,
              'idempotency-ref': 'vvx',

              'api-key': 'JRsXx4zY2ikBgKhX7awBCw=='
            },
            body: JSON.stringify({
              profileId: '108747538917556234',
              tag: 'Test',
              source: {
                id: '112077557521186860',
                type: 'managed_accounts'
              },
              destination: {
                id: '111209975813111891',
                type: 'managed_accounts'
              },
              destinationAmount: {
                currency: 'GBP',
                amount: 10
              },
              description: 'Test',
              scheduledTimestamp: '9'
            })
          }
        );
      
        if (!resp.ok) {
            
            if(resp.status==401)
            {
                throw new Error('Failed to Authorize');
            }
        }
        const data = await resp.json();
        console.log(data);
      };
    const CreatePassword=async()=>
    {
        
            const userId = NewCusId["id"];
            console.log(userId);
            const resp = await fetch(
              `https://sandbox.weavr.io/multi/passwords/${userId}/create`,
              {

                method: 'POST',

                headers: {
                    "Access-Control-Allow-Origin":  "http://localhost:3000/",
                    "Host":"cors.redoc.ly",

                  'Content-Type': 'application/json',
                  'api-key': 'JRsXx4zY2ikBgKhX7awBCw=='
                },
                body: JSON.stringify({
                  password: {value: '3030'}
                }),
              }
            );
          
            const data = await resp.json();
            console.log(data);
          
    };
    const StartKYC=async()=>
    {
        const resp = await fetch(
            `https://sandbox.weavr.io/multi/consumers/kyc`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer '+AuthToken,
                'api-key': 'JRsXx4zY2ikBgKhX7awBCw=='
              },
              body: JSON.stringify({
                kycLevel: 'KYC_LEVEL_1',
                prefillDetails: [
                  {
                    name: 'test',
                    value: 'test'
                  }
                ]
              })
            }
          );
        
          const data = await resp.json();
          console.log(data);
    }
    const CreateManagedAccount=async()=>{
        DoStepup();

        const resp = await fetch(
            `https://sandbox.weavr.io/multi/managed_accounts`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'idempotency-ref': 'sssssaaaaaaaaaaaqatsa',
                Authorization: 'Bearer '+AuthToken,
                'api-key': 'JRsXx4zY2ikBgKhX7awBCw=='
              },
              body: JSON.stringify({
                profileId: '108747511722606602',
                friendlyName: 'test',
                currency: 'GBP',
                tag: 'test'
              })
            }
          );
        
          const data = await resp.json();
          console.log(data);
        }
    const VerifyStepup=async()=>
    {
        const channel = 'sms';
  const resp = await fetch(
    `https://sandbox.weavr.io/multi/stepup/challenges/otp/${channel}/verify`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer '+AuthToken,
        'api-key': 'JRsXx4zY2ikBgKhX7awBCw=='
      },
      body: JSON.stringify({
        verificationCode: '123456'
      })
    }
  );

  if (resp.status === 204) {
    console.log('success');
  } else {
    const data = await resp.json();
    console.log(data);
  }
    }
    const DoStepup=async()=>
    {
        const channel = 'sms';
  const resp = await fetch(
    `https://sandbox.weavr.io/multi/stepup/challenges/otp/${channel}`,
    {
      method: 'POST',
      headers: {
        Authorization: 'Bearer '+AuthToken,
        'api-key': 'JRsXx4zY2ikBgKhX7awBCw=='
      }
    }
  );

  if (resp.status === 204) {
    VerifyStepup();
    console.log('success');
  } else {
    const data = await resp.text();
    console.log(data);
  }
    }

    const Login =async() =>{
        const resp = await fetch(
          `https://localhost:7266/api/weaver`,
          {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ Name: itemName, Address: itemAddress,Date:itemDate }) // Assuming your item model has a 'name' property

          }
        );
      
        console.log("testdata");
        const data1 = await resp.json();


       SetAuthtoken(data1["token"]);
       console.log(AuthToken)
      
      }
    
    return (
        <div>
            <label>
        Name :
            <input
                type="text"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                placeholder="Enter Customer name"
            />
            </label>
            <label>
        Address 1:
            <input
                type="text"
                value={itemAddress}
                onChange={(e) => setItemAddress(e.target.value)}
                placeholder="Enter Customer Address"
            />
            </label>
            <label>
        Date of Birth :
            <input
                type="date"
                value={itemDate}
                onChange={(e) => setItemDate(e.target.value)}
                placeholder="Enter Customer Birthday"
            />
           </label>
            <button  onClick={handleCreateItem}>Create Item</button><br></br>
            <button  onClick={Login}>Login</button><br></br>
            <button  onClick={SendTransact}>Send Funds</button><br></br>
            <button  onClick={CreateConsumer}>Create Consumers</button><br></br>
            <button  onClick={CreatePassword}>Create Password</button><br></br>
            <button  onClick={StartKYC}>Start KYC</button><br></br>
           
            <button  onClick={CreateManagedAccount}>Create ManagedAccount</button><br></br>
            
            <button  onClick={OWT}>Create OWT</button>
            
            {successMessage && <p>{successMessage}</p>}
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    );
    }

export default CreateItemComponent;
