import style from './Description.module.css'

const Description = () => {
    return (
        <div className={style.description}>
            <h1 className={style.title__description}> P!nk </h1>
            <p className={style.paragraph__description}> Alecia Beth Moore Hart, conhecida profissionalmente como Pink, é uma cantora, e compositora estadunidense, vencedora de três Grammys. Lançou o seu primeiro single, "There You Go", e seu primeiro álbum, Can't take Me Home, em 2000 pela LaFace Records </p>
        </div>
    );
}

export default Description;