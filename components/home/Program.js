import React, { useEffect, useState } from 'react'

const Program = () => {
    const [allProgram,setAllProgram] = useState([])

    async function getAllProgram () {
        try {
            const response = await Axios.get("http://localhost:5000/api/programs");
            const data = response.data;
            setAllProgram(data);
          } catch (err) {
            console.log(err);
          }
    }
    useEffect (()=> {
        getAllProgram();
    },[])

  return (
    <div>
      
    </div>
  )
}

export default Program
