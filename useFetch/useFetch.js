import React, { useEffect, useState } from 'react'

const localCache= {}

export const useFetch = (url) => {
    const [state, setstate] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null
    });

    useEffect(() => {
      getFetch(url);
    
    }, [url])
    
    const setLoadingState= () => {
        setstate( {
            data:null,
            isLoading:true,
            hasError:false,
            error: null

        });
    }
    const getFetch= async (url) => {
        if(localCache[url]){
            console.log('usando Caché');
        setstate( {
            data:localCache[url],
            isLoading:false,
            hasError:false,
            error: null

        });
        return;

        }
        
        
        setLoadingState();
        const resp = await fetch(url);
        
        //esperar 1 segundo
        await new Promise(resolve => setTimeout(resolve,1000)); 
        if(!resp.ok){
            setstate({
                data:null,
                isLoading:false,
                hasError:true,
                error: resp.statusText
            })
            return;            
        }
        
        const data = await resp.json();

        console.log({data});
        setstate({
            data:data,
            isLoading:false,
            hasError:false,
            error:null
        })
        //Manejo del caché
        localCache[url]=data;
    }
    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError:state.hasError

    }
}
