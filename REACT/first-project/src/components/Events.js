function Events({numero}){

  function myEvent(){
    console.log(`Oh ! I"m here to make u happy ! ${numero}`);
  }

  return(
    <>
      <p>Click here to shot an event :</p>
      <button onClick={myEvent}>Active !</button>
    </>
  )
}
export default Events;