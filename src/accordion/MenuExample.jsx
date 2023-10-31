import Accordion from "./Accordion"
import triangle_down from "../assets/image.jpg";

export default function MenuExample() {
    return (
        <Accordion
            controllerElement={(isExpanded) => (
                <button className="w-full flex flex-row bg-gradient-to-tr from-red-400 to-orange-400 p-2 rounded-lg cursor-pointer">
                    {isExpanded ? "Hide" : "Show"} Content
                    <img
                        src={triangle_down}
                        alt="triangle"
                        className={isExpanded ? "rotate-180" : ""}
                    />
                </button>
            )}
            contentDescription="menu example items"
            size="sm"
        >
            <ul className="flex flex-col gap-1 bg-slate-300 px-4">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </Accordion>
    )
}