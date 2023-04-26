import { useState } from "react";
// import PageHeader from "../../components/page-header/page-header.component";
// import Introduction from "../../components/Introduction/introduction.component";
import './to-do-list.styles.scss';

const ToDoList = () => {

    const [items, setItems] = useState([]);

    const onFormSubmit = (event) => {

        event.preventDefault();
        const form = event.target;
        const input = form.to_do_list_input.value;

        const newItems = [...items, input];

        if(input) {
            setItems(newItems);
            form.reset();
        }
        else {
            alert('Please enter a task');
        }

    }


    const taskCompleteHandler = (event) => {

        const item_id = event.target.value;
        const button_id = document.getElementById(item_id);

       if( button_id.classList.contains('to_do_list__item--complete')) {
            button_id.classList.remove("to_do_list__item--complete");
       }
       else {
            button_id.classList.add("to_do_list__item--complete");
       }

    }

    const removeTaskHandler = (index) => {
        // Filter through items, return all expect given index number
        return setItems(
            items.filter((item, i) => {
              return i !== index;
             })
            );
    }

    return(
            <div className="container">
               {/* <PageHeader pageTitle={'To Do list'} />
               <Introduction pageIntroduction={'TDL page intro'} /> */}
                <h1>To do list</h1>
               <div className="to_do_list">
                    <div>
                        <form onSubmit={onFormSubmit}>
                            <input type="text" name="to_do_list_input" placeholder="Add task" />
                            <button>Add task</button>
                        </form>

                    </div>

                    <div className="to_do_list__checked">

                    <h3>{ !items.length ? 'No tasks added' : 'Your task list' }</h3>

                        {items.map((item, index) => {
                            return (
                            <div id={index} key={index} className="to_do_list__item">
                                <p><span>{item}</span></p>
                                <div>
                                    <div><input required onClick={taskCompleteHandler} type="checkbox" value={index} /></div>
                                    <div><button onClick={ () => removeTaskHandler(index)}>X</button></div>
                                </div>
                            </div>
                            )
                            })
                            }

                    </div>
                </div>
            </div>
    )

}

export default ToDoList