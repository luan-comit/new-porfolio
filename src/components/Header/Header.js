import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = () => {
  const { avatar } = header

  return (
    <header className='header center'>
      <h3>
        <div className='avatar'>
          <img
            src = {avatar}
            alt='avatar'
          />
        </div>
      </h3>
      <Navbar />
    </header>
  )
}

export default Header
