import Item from './Item.js'

function List(){
  return(
    <>
      <h1>My List</h1>
      <ul>
        <Item marca='Honda' ano_lancamento={1985} />
        <Item marca='Fiat' ano_lancamento={1964} />
        <Item marca='Jaguar' ano_lancamento={1964} />
        <Item />
      </ul>
    </>
  )
}

export default List;