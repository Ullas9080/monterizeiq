import React from 'react'
import { useSelector } from 'react-redux'

const DashBoard = () => {
const {data,loading,error}=useSelector((state)=>state.channelName)

  return (
    <div >
      {loading && <p>loading</p> }
      {error && <p>{error}</p>}
      
      {data?.data && <div>{data?.data.map((i)=>(
        <ul key={i.channelId}>
          <li><img src={i.logo} height={100} width={100}/></li>
<li>{i.title}</li>
<li>{i.subscriberCount}</li>

        </ul>
      ))}</div>}
      
    </div>
  )
}

export default DashBoard
