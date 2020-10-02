import styled from 'styled-components'

export const StyledTextContainer = styled.div`
text-align: center;
margin: 1rem auto;
padding: 3vw;
width: 80%;
min-width: 280px;
text-transform: capitalize;
font-size: 1.4rem;
border: .25rem solid var(--darkColor);
border-radius: 10px;
@media (max-width: 768px){
    padding: 8vw;
}
`
