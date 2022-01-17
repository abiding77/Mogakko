import styles from './styles/css/Content.module.css';

function Content(){
    return (
        <div className={styles.index}>큐셀의 MBTI 검사 사이트입니다.<br>
        </br> 16가지 항목의 질문지가 있으며, 해당하는 항목에 체크해주시면 결과가 나타납니다.
        </div>
    );
}

export default Content;