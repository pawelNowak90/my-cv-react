import React from 'react';
import H1 from '../utils/H1';
import './Section.css';
import styled from 'styled-components';
import banner from '../../img/pawel-gory.jpg';

const SectionBannerWrapper = styled.section`
position: relative;
margin: 0;
height: 90vh;
background: url(${banner});
background-size: cover;
background-position: 0 33%;
background-repeat: no-repeat;

@media (max-width: 575px) {
  background-position: 25% 0%;
}
`

const SectionBanner = () => {
    return ( 
        <SectionBannerWrapper>
            <section>
                <H1 number={-1} header={"Paweł Nowak Front-end Developer"} />
            </section>
        </SectionBannerWrapper>
     );
}
 
export default SectionBanner;