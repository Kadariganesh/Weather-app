import React,{useState} from 'react'


const App = () => {
  const[city,setCity]=useState("");
  const[result,setResult]=useState("");
  const changeHandler = e =>{
    setCity(e.target.value);
  }

  const submitHandler = e =>{
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5862680b49e0eaa266fc60ea466439ee`).then(
      response => response.json()
    ).then(data => {
      const kelvin=data.main.temp;
      const celsius=kelvin-273.15;
      setResult("Temperature at"+" "+city+" "+'\n'+Math.round(celsius)+"°C");
      setCity("");
    }).catch(error => console.log(error));
  }
  return (
    <div>
      <center>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Weather App</h4>
            <form onSubmit={submitHandler}>
              <input type="text" value={city} onChange={changeHandler} name="city"/>
              <br/>
              <br/>
              <input   type='submit' value="Get Temperature"/>
            </form>
            <h1>{result}</h1>
          </div>
        </div>
      </center>
    </div>
  )
}

export default App
