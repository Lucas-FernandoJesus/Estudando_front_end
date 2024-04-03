function People ({name, age, prof, photo}){

  return (
    <div>
      <img src={photo} alt={photo} />
      <h2>Name : {name}</h2>
      <p>Age : {age} </p>
      <p>Profission : {prof}</p>
    </div>
  )
}
export default People;