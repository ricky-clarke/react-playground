
import AccordionItem from "../accordion-item/accordion-item.component";

import { questions } from "../../utils/accordion-questions";

const AccordionList = () => {

    const [ id ] = questions;

    return (
        <>
             { questions.map((accordion, i) => {

                return (
                    <>
                        <AccordionItem key={questions[i].id}  accordionItems={accordion}/>
                    </>
                )
            })}
        </>
    )

}

export default AccordionList