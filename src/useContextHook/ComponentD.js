import React,{useContext} from "react";
import { SakilContext, ChannelContext } from "../App";

function ComponentD() {

  const user = useContext(SakilContext)
  const channel = useContext(ChannelContext)
  return (
    // <div>
    //   <SakilContext.Consumer>
    //     {(user) => {
    //       return (
    //         <ChannelContext>
    //           {(channel) => {
    //             return <div>User Context value : {user};Channel Context Value : {channel}</div>;
    //           }}
    //         </ChannelContext>
    //       );
    //     }}
    //   </SakilContext.Consumer>
    // </div>


    <div>{user} ; {channel}</div>
  );
}

export default ComponentD;
