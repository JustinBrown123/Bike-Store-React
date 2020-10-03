import React, { Component } from 'react';
import logo from '../logo.svg'
import {StyledTextContainer} from './StyledTextContainer';
import styled from 'styled-components';

export default class Home extends Component {
    render() {
        return (
            <div>
                <HomeLogo>
                    <img src={logo} className='logo' alt='logo'/>      
                </HomeLogo>
                <StyledTextContainer>
                <div className="row">
                    <div className="col-lg-12 text-center article-title pb-4">
                        Here at Trailside Bicycle:
                    </div>
                </div>
                <div className="row  w-95 text-center m-auto article-text">
                info:"Croke xanatos shmi desann mantell. Glymphid cody jax orus togorian ord. Billaba felucia jerec h'nemthean. Jerjerrod yuzzem amidala joh ewok piell billaba leia shaak. Cordé yavin bria mandell lars. Senex lytton darth iktotchi wilhuff zannah geonosis saurin dressellian. Olié jabba nute qui-gon golda kit evocii bespin. Stele habassa senex mara. Yoda chirrpa kwi chistori jubnuk. Ansuroer naberrie evocii lars sio whiphid. K-3po sullustan yuzzem zann reach qui-gonn chewbacca joelle durge. Asajj thennqora yaddle ors ferroans ewok firrerreo jar solo.Mustafar yaka utapaun keyan sikan wyl organa bren jamillia. Maul gen'dai pavan antilles. Skywalker habassa padmé antonio whaladon obi-wan qel-droma. Kenobi qrygg moor derek orus darth. Iktotchi gonk devaronian san iridonian kit mace rahn. Tib h'nemthean calamari secura besalisk kal trioculus. Watto axmis zekk nass mara. Gamorr darth yoda adi. Talz aka zorba solo beru. Geonosis antonio plo allie brak omwati. Celegian lars mustafar gossam stereb nien derlin. Moddell wesell ubese kel tierce dodonna miraluka nilgaard."
                </div>
                <div className="row">
                    <div className="col p-2 text-center m-auto main-pic">
                        <img src="../images/CyclingCuyahoga.jpg" alt=''className="HomeImages" />
                    </div>
                    <div className="col p-2 text-center m-auto main-pic">
                        <img src="../images/kidsCycling.jpg" alt=""className="HomeImages"/>
                    </div>
                    
                </div>
               
                <h5 className="text-center pl-5 article-title"> - BikeStore Owner </h5>
                </StyledTextContainer>
            </div>
            
        )
    }
}
const HomeLogo = styled.div`
    text-align: center;
    padding-top: 2rem;
    .logo{
        width: 10vw;
       
    }
    

`
