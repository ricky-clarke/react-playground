import { useState } from "react";
import "./accordion-item.styles.scss";
import { Arrow } from "../svgs/arrow.svg";

const AccordionItem = ({ accordionItems }) => {
  const { id, title, copy } = accordionItems;

  const [accordionDisplay, accordionToggle] = useState("collapsed");

  const accordionDisplayHandler = (event) => {

    const get_button_attr_data = event.target.getAttribute("data");
    const button_attr_data = document.getElementById(
      "accordion__copy-" + get_button_attr_data
    );

    const button_id = document.getElementById(
      "accordion__button-" + get_button_attr_data
    );

    accordionDisplay === "collapsed"
      ? accordionToggle("expanded")
      : accordionToggle("collapsed");

    accordionDisplay === "collapsed"
      ? button_id.classList.add("accordion__button--selected")
      : button_id.classList.remove("accordion__button--selected");

    accordionDisplay === "collapsed"
      ? button_attr_data.classList.add("accordion__copy--expanded")
      : button_attr_data.classList.remove("accordion__copy--expanded");
  };

  return (
    <>
      <div className="accordion__container">
        <button
          data={id}
          id={`accordion__button-${id}`}
          className="accordion__button"
          onClick={accordionDisplayHandler}
        >
          {title} <Arrow />
        </button>

        <div id={`accordion__copy-${id}`} className="accordion__copy">
          <div>
            <p>{copy}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccordionItem;
