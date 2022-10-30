import React,{useEffect,useState} from 'react'

const Product = () => {
    const [list, setList] = useState([])
    let url = " https://jsonplaceholder.typicode.com/photos"
    const getData = async ()=>{
        const res = await fetch(url,{
            method:"GET",
            headers:{
                accept:"application/json",
                "content-type":"applictaion/json"
            },
            credentials:'include'
        })
        const data = await res.json();
        const array = await data.splice(0,100);
        await setList(array);
    }
    useEffect(() => {
      getData();
    }, [])
    

  return (
    <div id='products'>
        {list.map((item,ind)=>(
            <div className='productItem'>
                <div>{item.id}</div>
                <div>{item.title}</div>
                <img src={item.url} alt="" />
                <br /><hr />
            </div>
        ))}
    </div>
  )
}

export default Product