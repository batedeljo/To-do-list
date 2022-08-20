import React from "react";
import InputTasks from "../InputTasks/InputTasks";
import ListTasks from "../ListTasks";
import ButtonContainer from "../ButtonContainer/ButtonContainer";

const ToDoListContainer = () => {
    return ( 
        <div>
            <h1>TO DO</h1>
            <InputTasks/>
            <ListTasks/>
            <ButtonContainer/>
        </div>
     );
}
 
export default ToDoListContainer;