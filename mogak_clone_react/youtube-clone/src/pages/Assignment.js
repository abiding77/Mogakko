import Layout from '../components/shared/Layout';
import { useState } from 'react';
import styles from '../App.module.css';
function Assignment() {

    const [check,setSub]=useState(false);

    function subScribe(){
        setSub(check=>!check);
    }
  return (
    <Layout>
    {check?
    <button className={styles.sub2} onClick={subScribe}>구독중</button>:<button className={styles.sub1} onClick={subScribe}>Subscribe</button>}
    </Layout>
  );
}

export default Assignment;