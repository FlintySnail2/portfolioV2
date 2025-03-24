// import icons from "../../../assets/icons/sprite.svg";
import React from "react";
// import CV from "../../../assets/CV.pdf";


const linkButton = ({
    className,
    linkButtonStyle,
    linkButtonRef,
    linkIcon,
    svgClassName,
    label
}) => {

return <a href={linkButtonRef} download className={className} style={linkButtonStyle}>{label}</a>

}

const iconLinkButton = ({
        IconLink,
        IconClassName,
        IconLinkHref
    }) => {

    console.log('one',IconLink )
    console.log('two', IconClassName)
    console.log('three', IconLinkHref)

    return <a href={IconLink}>
        <svg className={IconClassName}>
            <use xlinkHref={IconLinkHref} />
        </svg>
    </a>
}

export {linkButton,iconLinkButton}