import { useEffect, useState } from "react";
import axios from 'axios';



const useGetNoticias = () => {
    const [noticias, setNoticias] = useState([])

  
    useEffect(() => {
        const url = 'https://dashboard.tecmm.edu.mx/dashboardScript.php'
        axios.get(url, {params:{action:"getNoticias"}}).then(response => response.data)
        .then((data) => {
          var noticiasFinal=[]

          //console.log('noticias hook: ', data)

          setNoticias(data)
    
        //   for(var i=data.length-1; i>=0;){
    
        //     noticiasFinal.push(data[i])
    
        //     this.setState({ noticiasArray: noticiasFinal })
    
        //     i--
        //   }
    
          //console.log(noticiasFinal)
        })
    }, [])
  
    return {
      noticias,
    };
  };
  
  export default useGetNoticias;