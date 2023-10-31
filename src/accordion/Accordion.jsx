import { useState } from "react"

const Accordion = ({
    controllerElement,
    contentDescription,
    size = "sm",
    children,
}) => {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <div
            className={
                size === "sm"
                    ? "w-28"
                    : "" + size === "md"
                    ? "w-40"
                    : "" + size === "lg"
                    ? "w-80"
                    : ""
            }
        >
            <div
                aria-expanded={isExpanded}
                aria-controls={contentDescription}
                aria-label={
                    (isExpanded ? "hide " : "show ") + contentDescription
                }
                onClick={() =>
                    setIsExpanded((prevIsExpanded) => !prevIsExpanded)
                }
            >
                {controllerElement(isExpanded)}
            </div>
            {isExpanded && (
                <div id={contentDescription} className="w-full">
                    {children}
                </div>
            )}
        </div>
    )
}

export default Accordion