import AccordionList from "../../components/accordion-list/accordion-list.component"

const Accordion = () => {

    return (
        <>
            <div className="container">
                <h1>Accordion</h1>
                <p>Accordion items pulled in via json</p>
                <br></br><br></br>
                <AccordionList />
            </div>
        </>
    )

}

export default Accordion