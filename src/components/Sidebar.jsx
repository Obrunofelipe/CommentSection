import { Avatar } from './Avatar'
import styles from './Sidebar.module.css'
import {PencilLine} from 'phosphor-react'

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
        <img 
            className={styles.cover}
            src="https://plus.unsplash.com/premium_photo-1666824468749-3ce4c85dc2e3?q=40&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        />
        <div className={styles.profile}>
            <Avatar 
                src='https://media.licdn.com/dms/image/v2/D4E03AQH69fI_x8dgnA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1698954946772?e=1732147200&v=beta&t=2EnW3cPY78YrScl5VvVeeLNEUOdak-NqlTvQNtXQzHE'
            />
            <strong>Bruno Felipe</strong>
            <span>Web Developer</span>
        </div>

        <footer>
            <a href="#">
                <PencilLine size={20}/>
                Editar seu perfil
            </a>
        </footer>
    </aside>
  )
}
