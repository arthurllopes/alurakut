import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import {AlurakutMenu, OrkutNostalgicIconSet} from '../src/lib/AluraKutCommons'
import {ProfileRelationsBoxWrapper} from '../src/components/ProfileRelations'

function ProfileSideBar(props){
  return (
    <Box>
        <img src={`https://github.com/${props.githubUser}.png`} alt="Profile picture" style={{borderRadius: '50%;'}} />
    </Box>
  )
}

export default function Home() {
  const usuario = 'arthurllopes'
  const pessoasFavoritas = ['juunegreiros', 'omariosouto', 'peas', 'marcobrunodev']
  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profile' }}>
          <ProfileSideBar githubUser={usuario} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcome' }}>
          <Box>
            <h1>Bem vindo</h1>
            <OrkutNostalgicIconSet />
          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelations' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Meus Amigos ({pessoasFavoritas.length})
            </h2>
            <ul>
              {pessoasFavoritas.map((pessoa) =>{
                return (
                  <li>
                    <a href={`/users/${pessoa}`} key={pessoa}>
                    <img src={`https://github.com/${pessoa}.png`} alt="" />
                    <span>{pessoa}</span>
                  </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
}
