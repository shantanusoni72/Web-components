import endermanImage from '../../images/enderman.png'
import './style.css'

export default function Hero() {
  return (
    <div className='container'>
      <div className="row">
        <h1>Hello Enderman!</h1>
        <img src={endermanImage} alt='enderman' />
        <p>
          The Enderman is a tall neutral mob found in all three dimensions. Endermen normally ignore players and lazily amble
          about, but they will swiftly walk to attack those that damage it or look directly at its face. Endermen teleport to
          avoid water (which harms them), projectiles and some other damage sources, and they occasionally pick up certain blocks.
          They will also teleport more rapidly in sunlight.
        </p>
        <p>
          Unlike any other mobs, which cannot hold blocks except as items, endermen have a unique ability to pick up, carry and
          set down certain blocks. They silently pick up blocks in a 4×3×4 region horizontally centered on the enderman
          and vertically encompassing it. An enderman cannot pick up blocks in a completely flat area. Endermen drop the block
          they are holding upon death as an item, although they do not visually let go of the block when dying. It does
          not despawn while holding a block. Endermen cannot place blocks onto bedrock or entities.
        </p>
        <a href='https://minecraft.fandom.com/wiki/Enderman'>Learn More</a>
      </div>
    </div>
  )
}
