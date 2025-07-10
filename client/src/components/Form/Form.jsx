import React from 'react'
import FormInput from './FormInput'

export default function Form ({getFormData, children}) {

    return (
        <form action={getFormData}>
            {children}
            <button>Add Client</button>
      </form>
    )
    }