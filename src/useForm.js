import React, { useState} from 'react';

export function UseForm(initialValues) {

    const [values, setValues] = React.useState(initialValues);

    const handleInputChange = e => {
        const {name, value} = e.target
        setValues({
            ... values,
            [name]: value
        })
    }

  return {
      values,
      setValues,
      handleInputChange,
  }
}


// export function Form(props) {
//   return (
//     <form>
// [props.children]
//     </form>
//   )
// }


