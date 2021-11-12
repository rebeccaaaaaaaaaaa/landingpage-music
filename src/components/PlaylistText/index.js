import style from './PlaylistText.module.css'

const PlaylistText = () => {
    return (
        <div className={style.playlistText}>
            <h1 className={style.title__playlistText}> playlist </h1>
            <p className={style.paragraph__playlistText}> as melhores</p>
            <a href="https://open.spotify.com/artist/1yR65psqiazQpeM79CcGh8" target="_blank" rel="noopener noreferrer"className={style.button_playlistText}> ouça agora </a>
        </div>
    );
}

export default PlaylistText;