import style from './PlaylistText.module.css'

const PlaylistText = () => {
    return (
        <div className={style.playlistText}>
            <h1 className={style.title__playlistText}> playlist </h1>
            <p className={style.paragraph__playlistText}> top 10 songs</p>
            <a href="https://open.spotify.com/artist/1KCSPY1glIKqW2TotWuXOR" target="_blank" rel="noopener noreferrer"className={style.button_playlistText}> listen now </a>
        </div>
    );
}

export default PlaylistText;