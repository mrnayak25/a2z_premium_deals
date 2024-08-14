import React from "react"; //, { useState }
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "./accordion";
import image from "../images/value.png";

function Value() {
  return (
    <section id="value" className="flex flex-col items-center justify-center w-full px-4 py-12">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-6xl">
        {/* --- Left Side ---*/}
        <div className="w-full md:w-1/2">
          <div className="w-full overflow-hidden rounded-t-[15rem] border-8 sm:w-full sm:h-[35rem]border-[8px] border-[rgba(232,232,232,0.93)]">
            <img src={image} alt="" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* --- Right Side ---*/}
        <div className="flex flex-col gap-3 w-full md:w-1/2">
          <div>
            <span className="text-orange-500">Our Value</span><br/>
            <span className="text-2xl font-bold text-gray-800">Value We Give to You</span>
          </div>
          <span className="text-gray-600">
            We always ready to help by providing the best services for you.
            <br />
            We believe a good place to live can make your life better
          </span>

          <Accordion className="w-full mt-8" allowMultipleExpanded={false} preExpanded={[0]}>
            {data.map((item, i) => {
              return (
                <AccordionItem
                  className="rounded-lg border border-gray-300 shadow-sm overflow-hidden mb-1"
                  key={i}
                  uuid={i}>
                  <AccordionItemHeading>
                    <AccordionItemButton className="flex items-center justify-between w-full p-2 bg-white cursor-pointer">
                      <AccordionItemState>
                        {({ expanded }) => (
                          <div
                            className={`flex items-center justify-between w-full p-2 bg-white cursor-pointer ${
                              expanded ? "shadow-lg rounded-md" : ""
                            }`}>
                            <div className="flex items-center justify-center p-1 bg-gray-100 rounded-md">
                              {item.icon}
                            </div>
                            <span className="text-lg font-semibold">{item.heading}</span>
                            <div className="flex items-center justify-center p-1 bg-gray-100 rounded-md">
                              <MdOutlineArrowDropDown size={20} />
                            </div>
                          </div>
                        )}
                      </AccordionItemState>
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p className="text-gray-600 p-4">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default Value;
