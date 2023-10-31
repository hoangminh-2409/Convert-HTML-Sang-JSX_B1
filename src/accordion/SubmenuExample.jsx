import Accordion from "./Accordion"
import triangle_down from "../assets/image.jpg";


export default function SubmenuExample() {
    console.log("123", triangle_down)
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
            contentDescription="submenu example list"
            size="lg"
        >
            <ul className="flex flex-col gap-1 bg-slate-300 px-4">
                <Accordion
                    controllerElement={(isExpanded) => (
                        <li>
                            <button className="flex">
                                Item 1
                                <img
                                    src={triangle_down}
                                    alt="triangle"
                                    className={isExpanded ? "rotate-180" : ""}
                                />
                            </button>
                        </li>
                    )}
                    contentDescription="submenu example list subitem 1"
                    size="lg"
                >
                    <ul>
                        <li>Sub item 1.1</li>
                        <li>Sub item 1.2</li>
                        <li>Sub item 1.3</li>
                    </ul>
                </Accordion>
                <Accordion
                    controllerElement={(isExpanded) => (
                        <li>
                            <button className="flex">
                                Item 2
                                <img
                                    src={triangle_down}
                                    alt="triangle"
                                    className={isExpanded ? "rotate-180" : ""}
                                />
                            </button>
                        </li>
                    )}
                    contentDescription="submenu example list subitem 2"
                    size="lg"
                >
                    <ul>
                        <li>Sub item 2.1</li>
                        <li>Sub item 2.2</li>
                        <li>Sub item 2.3</li>
                    </ul>
                </Accordion>
                <Accordion
                    controllerElement={(isExpanded) => (
                        <li className="flex cursor-pointer">
                            <button className="flex">
                                Item 3
                                <img
                                    src={triangle_down}
                                    alt="triangle"
                                    className={isExpanded ? "rotate-180" : ""}
                                />
                            </button>
                        </li>
                    )}
                    contentDescription="submenu example list subitem 3"
                    size="lg"
                >
                    <ul>
                        <li>Sub item 3.1</li>
                        <li>Sub item 3.2</li>
                        <li>Sub item 3.3</li>
                    </ul>
                </Accordion>
            </ul>
        </Accordion>
    )
}