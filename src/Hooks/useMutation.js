import { useState } from "react"

const useMutation = ({url, method ="POST"})=>{
    const [state,setState] =useState({
        isLoading:false,
        error:'',
    })
    const fn = async (data)=>{
        setState(prev =>({
            ...prev,
            isLoading:true,
        }))
        axiosClien
    }
    return state
}