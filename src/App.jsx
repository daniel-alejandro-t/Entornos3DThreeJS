import { Canvas } from '@react-three/fiber'
import { Sky, useGLTF } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import { Ground } from './components/Ground'
import { FPV as Fpv } from './components/FPV'
import { Player } from './components/Player'
import { Cubes } from './components/Cubes.jsx'
import { TextureSelector } from './components/TextureSelect.jsx'

function MiniMundo_AulaClases(props) {
  const { scene } = useGLTF('src/models/MiniMundo_AulaClases.glb')
  
  return (
    <primitive object={scene} {...props} />
  )
}

function MiniMundoAsianTower(props) {
  const { scene } = useGLTF('src/models/MiniMundo_AsiaticTower.glb')
  
  return (
    <primitive object={scene} {...props} />
  )
}


function MiniMundoLake(props) {
  const { scene } = useGLTF('src/models/MiniMundo-Lake.glb')
  
  return (
    <primitive object={scene} {...props} />
  )
}

function MiniMundoCampingConRio(props) {
  const { scene } = useGLTF('src/models/MiniMundo-CampingConRio.glb')
  
  return (
    <primitive object={scene} {...props} />
  )
}

function Fuente(props) {
  const { scene } = useGLTF('src/models/fuente.glb')
  
  return (
    <primitive object={scene} {...props} />
  )
}

function App() {
  
  return (
      <>
        <Canvas>
          <Sky sunPosition={[100, 100, 20]}></Sky>
          <ambientLight intensity={0.4} />
          <Fpv />
          <Physics>
            <MiniMundo_AulaClases   position = {[-0.200, 0.490, -0.20]} />
            <MiniMundoAsianTower    position = {[-0.201, 0.490, -0.20]} />
            <MiniMundoLake          position = {[-0.202, 0.490, -0.20]} />
            <Fuente                 position = {[-0.203, 0.490, -0.20]} />
            
            <MiniMundoCampingConRio position = {[-0.200, 0.490, -0.20]} />
            
            <Cubes />
            <Player />
            <Ground />          
          </Physics>
        </Canvas>

        <div className='pointer'>+</div>
        <TextureSelector />
      </>
  )
}

export default App