import React from 'react'
import FormInput from './FormInput'

export default function Form ({handleSubmit, children}) {

    return (
        <form action={handleSubmit}>
            {children}
            <button>Add Client</button>
      </form>
    )
    }