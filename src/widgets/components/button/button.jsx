import icons from "../../../assets/icons/sprite.svg";
import React from "react";
import CV from "../../../assets/CV.pdf";


const linkButton = ({
    className,
    linkButtonStyle,
    linkButtonRef,
    linkIcon,
    svgClassName,
    label
                    }) => {

return <a href={linkButtonRef} download className={className} style={linkButtonStyle}> {label}</a>




}



const iconLinkButton = (
    {
        iconLink,
        iconClassName,
        iconLinkHref
    }) => {

    console.log('one',iconLink )
    console.log('two', iconClassName)
    console.log('three', iconLinkHref)

    return <a href={iconLink}>
        <svg className={iconClassName}>
            <use xlinkHref={iconLinkHref} />
        </svg>
    </a>
}

export {linkButton,iconLinkButton}