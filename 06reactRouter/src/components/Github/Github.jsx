import React, { useEffect, useState } from 'react'

function Github() {
    const [data , setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/approved-apoorv')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setData(data)
        })
    }, [])
  return (
    <div className='text-center m-4 bg-gray-700 rounded-3xl text-white p-4 text-3xl'>Github Followers: {data.followers}
    <img className='object-center' src={data.avatar_url} alt="gitpic" width={300}/>
    </div>
  )
}

export default Github