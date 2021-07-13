import styled from "styled-components"
const MainGrid = styled.main`
  display: grid;
  gap: 10px;
  grid-template-areas: "profile welcome profileRelations";
  grid-template-columns: 150px 1fr 160px;
  width: 90vw;
  margin: 0 auto;
  padding: 10px 0;
  .welcomeArea{
    min-width: 250px;
  }
  @media(min-width: 720px){
    grid-template-areas: "profile welcome profileRelations";
    grid-template-columns: 150px 1fr 260px;
  }
`
export default MainGrid