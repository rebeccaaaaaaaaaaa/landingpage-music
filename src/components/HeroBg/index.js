import style from './HeroBg.module.css'
import Description from '../Description';
import PlaylistText from '../PlaylistText';
import Social from '../Social';


const HeroBg = () => {
    return (
        <div className={style.bg}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-xs-12">
                        <Description />
                    </div>
                    <div className="col-lg-6 col-md-12 col-xs-12">
                        <PlaylistText />
                    </div>
                </div>
                <Social />
            </div>
        </div>
    );
}

export default HeroBg;