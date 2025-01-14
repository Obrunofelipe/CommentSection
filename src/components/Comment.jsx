import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'



export const Comment = ({content, onDeleteComment}) => {
    const [likeCount, setLikeCount] = useState(0)
    function handleDeleteComment(){
        onDeleteComment(content)
    }

    function handleLikeComment(){
        setLikeCount(likeCount+1)
    }
  return (
    <div className={styles.comment}>
        <Avatar hasBorder={false} src="https://github.com/diego3g.png" alt="" />
        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Diego Fernandes</strong>
                        <time title='18 de Setembro as 18:08' dateTime="2024-09-18 18:08">Cerca de 1h atrás</time>
                    </div>

                    <button onClick={handleDeleteComment} title='Deletar Comentário'>
                        <Trash size={24}/>
                    </button>
                </header>

                <p>{content}</p>
            </div>

            <footer>
                <button onClick={handleLikeComment}>
                    <ThumbsUp/>
                    Aplaudir <span>{likeCount}</span>
                </button>
            </footer>
        </div>
    </div>
  )
}
