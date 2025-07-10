import React, { useState } from 'react'

export const useForm = (initiaForm={} ) => {
    const [formState, setformState] = useState(initiaForm);
    
    const onResetForm = () => {
        setformState(initiaForm);
    }

    const onInputChange = ({target}) => {
        const {name,value} = target;

        ///console.log(name,value);
        setformState({
            ...formState,
            [name]: value
        })


    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
  }
}
