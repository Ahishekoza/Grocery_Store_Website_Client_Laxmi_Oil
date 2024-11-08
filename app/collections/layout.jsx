import React from 'react'

export const metadata = {
    title: "Collections ",
    description: "all collections of groceries items",
  };

const CollectionLayout = ({children}) => {
  return (
    <div className=' px-5 sm:px-10 lg:px-20  py-5'>{children}</div>
  )
}

export default CollectionLayout