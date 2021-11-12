import style from './Social.module.css'
import FacebookIcon from '../../assets/facebook.png'
import InstagramIcon from '../../assets/instagram.png'
import TwitterIcon from '../../assets/twitter.png'
import YoutubeIcon from '../../assets/youtube.png'
import SoundCloudIcon from '../../assets/soundcloud.png'


const Social = () => {
    return (
        <div className={style.social}>
          <ul className={style.social__ul}>
              <li> <a href="/" rel="nofollow noopener noreferrer" target="_blank"> <img src={FacebookIcon} alt="Logo FacebookIcon"/></a> </li>
              <li> <a href="/" rel="nofollow noopener noreferrer"> <img src={InstagramIcon} alt="Logo InstagramIcon"/></a> </li>
              <li> <a href="/" rel="nofollow noopener noreferrer"><img src={TwitterIcon} alt="Logo TwitterIcon"/></a></li>
              <li> <a href="/" rel="nofollow noopener noreferrer"><img src={YoutubeIcon} alt="Logo YoutubeIcon"/></a> </li>
              <li> <a href="/" rel="nofollow noopener noreferrer"><img src={SoundCloudIcon} alt="Logo SoundCloudIcon"/> </a></li>
          </ul>
        </div>
    );
}

export default Social;