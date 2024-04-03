import {useState} from 'react'

function Form (){

  function RegisterUser(e){
    e.preventDefault();
    console.log(`User : ${name}, registred with password : ${password}`)
  }

  const[name, setName] = useState();
  const[password, setPassword] = useState();
  return (
    <>
      <h1>My Register</h1>
      <form onSubmit={RegisterUser}>
        <div>
          <label htmlFor="name">Name :</label>
          <input type="text" id="name" name="name" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="password">Password :</label>
          <input type="Password" id="Password" name="Password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </>
  )
}

export default Form;