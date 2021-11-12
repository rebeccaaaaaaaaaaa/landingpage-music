import style from './Social.module.css'
import FacebookIcon from '../../assets/facebook.png'
import InstagramIcon from '../../assets/instagram.png'
import TwitterIcon from '../../assets/twitter.png'
import YoutubeIcon from '../../assets/youtube.png'



const Social = () => {
    return (
        <div className={style.social}>
          <ul className={style.social__ul}>
              <li> <a href="https://www.facebook.com/mariliamendoncaoficial" rel="nofollow noopener noreferrer" target="_blank"> <img src={FacebookIcon} alt="Logo FacebookIcon"/></a> </li>
              <li> <a href="https://www.instagram.com/mariliamendoncacantora/" rel="nofollow noopener noreferrer"> <img src={InstagramIcon} alt="Logo InstagramIcon"/></a> </li>
              <li> <a href="https://twitter.com/MariliaMReal" rel="nofollow noopener noreferrer"><img src={TwitterIcon} alt="Logo TwitterIcon"/></a></li>
              <li> <a href="https://www.youtube.com/channel/UCwfEOn0O1DWcyTgzVVu28ig" rel="nofollow noopener noreferrer"><img src={YoutubeIcon} alt="Logo YoutubeIcon"/></a> </li>
          </ul>
        </div>
    );
}

export default Social;