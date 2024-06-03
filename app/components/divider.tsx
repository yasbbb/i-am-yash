interface DividerProps {
    primaryMode?: boolean
}

const Divider = ({ primaryMode }: DividerProps) => {
    const [primary, secondary] = getColorStyle();

    return (
        <div className={`flex justify-center items-center w-full h-2 ${primary ? (primary) : (secondary)}`}>
            <div className={`w-5/6 h-full ${primaryMode ? (secondary) : (primary)}`}/>
        </div>
    )
}

/**
 * get the tailwind css color for a given status.
 *
 * NOTE: doing this to ensure tailwind knows at build time css classes.
 *
 * @returns tailwind css for background color
 */
function getColorStyle() {
    return ["bg-black", "bg-gray-100"];
}

export default Divider;