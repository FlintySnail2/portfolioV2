import React from 'react'
import CV from '../../assets/CV.pdf';
import './Home.css'
import icons from "../../assets/icons/sprite.svg";
import {linkButton, iconLinkButton} from '../../widgets/components/button'

export default function  CTA() {

    console.log('ICONS', icons )

    return (
      <div>
          <div className={'cta'} >
              <linkButton className={'btn btn-cv'} linkButtonHref={CV}>View Resume</linkButton>
              <linkButton className={'btn btn-contact'} linkButtonHref={CV}>Contact Me</linkButton>
          </div>

              <div className={'social__links'}>
                  <iconLinkButton
                      iconLink={"https://www.linkedin.com/in/harry-mclean-98b216154/"}
                      iconClassName={"icon-linkedin"}
                      iconLinkHref={`${icons}#icon-linkedin`}
                  ></iconLinkButton>

                  <iconLinkButton
                      iconlink={"https://github.com/Flintysnail2/"}
                      iconclassname={"icon-github"}
                      iconlinkhref={`${icons}#icon-github`}
                  ></iconLinkButton>
              </div>

      </div>
  )
}
