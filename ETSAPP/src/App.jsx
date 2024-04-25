import { useState } from 'react'
import './App.css'

 function App() {
   const[name, setName] = useState('');
  const [datetime, setDatetime] = useState('');
  const [description, setDescription] = useState('');
  function addNewTransaction(newTransaction) {
   const apiUrl = 'https://localhost:5713/api' + '/transactions';
   fetch(apiUrl, {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify(newTransaction),
   })
   .then(response => {
     if (!response.ok) {
       throw new Error('Network response was not ok');
     }
     return response.json();
   })
   .then(data => {
     console.log('Transaction added successfully:', data);
     // Handle successful response
   })
   .catch(error => {
     console.error('Error adding transaction:', error);
     // Handle fetch error
   });
 }
 
 
  
  return (
    <main>
      <h1><span className="WebRupee">&#x20B9;</span>10000</h1>
      <form   onSubmit={addNewTransaction}>
        <div className='basicInfo'>
          <input type="text"
          value = {name}
          onChange = {ev => setName(ev.target.value)}
          
          placeholder="+20000 new LG tv"/>

          <input value={datetime}
          onChange={ev => setDatetime(ev.target.value)} 
          type="datetime-local"/>
          
        </div>
        <div className='description'>
           <input type= "text"
           value={description}
           onChange={ev => setDescription(ev.target.value)}
           placeholder= "description"/>
        </div>
        <button type='submit'>Add new transaction</button>
        
        <div className="transactions">
            <div className="transaction">
               <div className="left">
                  <div className="name">New LG tv</div>
                  <div className="description">it was time for new tv</div>
               </div>
               <div className="right">
                  <div className="price red">20000<span className="WebRupee">&#x20B9;</span>
</div>
                  <div className="datetime">8 - 4 - 2024 7.30</div>
               </div>
               
            </div>
        </div>
        <div className="transactions">
            <div className="transaction">
               <div className="left">
                  <div className="name">New phone</div>
                  <div className="description">new phone purchased</div>
               </div>
               <div className="right">
                  <div className="price red">-23000<span className="WebRupee">&#x20B9;</span></div>
                  <div className="datetime">8 - 4 - 2024 7.30</div>
               </div>

            </div>
        </div>
        <div className="transactions">
            <div className="transaction">
               <div className="left">
                  <div className="name">salary cerdited</div>
                  <div className="description">salary credited</div>
               </div>
               <div className="right">
                  <div className="price green">+50000<span className="WebRupee">&#x20B9;</span></div>
                  <div className="datetime">8 - 4 - 2024 7.30</div>
               </div>

            </div>
        </div>
      </form>
    </main>
  )
}

export default App
