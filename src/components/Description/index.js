import style from './Description.module.css'

const Description = () => {
    return (
        <div className={style.description}>
            <h1 className={style.title__description}> Marília Mendonça </h1>
            <p className={style.paragraph__description}> Marília Dias Mendonça foi uma cantora, compositora e instrumentista brasileira, um dos nomes de maior repercussão e influência na música nacional nas décadas de 2010 e 2020 </p>
        </div>
    );
}

export default Description;