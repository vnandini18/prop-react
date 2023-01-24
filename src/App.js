//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import UseInfo from './UseInfo';
function App() {
  const [firstName, setFirstName] = useState('');
  const [showData, setShowData] =useState(false);
  console.log(firstName);
  const handleSubmit = () => {
    setShowData(data => {
      console.log('state data', data);
      return data;
    })
  }
  return ( 
    <div className="App">
      <div className="Form">
      <table width="80%" align="center" border="2">            
<tr>                
<th colSpan="2">Addmision Form</th>            
</tr>            
<tr>                
<td>Select Your Gender</td>                
<td><input type="radio" checked name="Gender" value="Male" /> Male 
<input type="radio" name="Gender" value="Female" /> Female
</td>            
</tr>            
<tr>                
<td>Full Name: </td>                
<td><input type="text" placeholder="Enter your Full name" required name="firstName" onChange={(event)=> setFirstName(event.target.value)} />
</td>            
</tr>            
<td>Select Course</td>            
<td>
<select>                
<option value="0">--Select Course--</option>                
<option value="CSE">CSE</option>                
<option value="ECE">ECE</option>                
<option value="EEE">EEE</option>                
<option value="BiPC">BiPC</option>                
<option value="MPC">MPC</option>            
</select>
</td>            
<tr>                
<td>Qualifications</td>            
<td><input type="checkbox" name="qly" /> 10
<sup>th</sup> 
<input type="checkbox" name="qly" /> 12
<sup>th</sup>
<input type="checkbox" name="qly" /> ITI 
<input type="checkbox" name="qly" /> Diploma
</td>            
</tr>            
<td>Enter Your Email</td>            
<td><input type="email" name="email" placeholder=" " /></td>            
           
<tr>
  <button type="submit" class="submit1"  onClick={()=>setShowData(true)}>Submit </button>
  {
          showData && <UseInfo firstName={firstName} ></UseInfo>
        }
  
  </tr>       
</table>
        
        </div>
    </div>
  );
}
export default App;