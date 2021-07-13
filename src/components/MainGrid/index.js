import styled from "styled-components"
const MainGrid = styled.main`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr;
  width: 90vw;
  margin: 0 auto;
  padding: 10px 0;
  .profileArea{
    display: none;
    @media(min-width: 660px){
      display: block;
    }
  }

  @media(min-width: 660px){
    grid-template-areas: "profile welcome profileRelations";
    grid-template-columns: 2fr 6fr 3fr;
  }
`
export default MainGrid