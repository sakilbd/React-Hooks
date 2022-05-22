import React from "react";

function Columns() {
  const items = [];
  return (
    //   react frammetns can be used with empth tags
    <> 
      {
      items.map( item =>(
        <React.Fragment key={item.id}>
            <h1>Title</h1>
            <p>{item.title}</p>
        </React.Fragment>
        
      ))
      }
      <td>Name</td>
      <td>Sakil</td>
    </>
  );
}

export default Columns;
