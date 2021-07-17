import styled from "styled-components"
const MainGrid = styled.main`
  gap: 10px;
  width: 90vw;
  margin: 0 auto;
  padding: 10px 0;
  .profileArea {
    display: none;
    @media(min-width: 860px) {
      display: block;
    }
  }
  @media(min-width: 860px){
    display: grid;
    max-width: 1110px;
    grid-template-areas: "profileArea welcomeArea profileRelationsArea";
    grid-template-columns: 150px 1fr 300px;
  }
`
export default MainGrid