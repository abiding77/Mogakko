import Layout from '../components/shared/Layout';
import ContentsLayout from '../components/shared/ContentsLayout';
import youtubeData from '../data/youtubeData.json';
import HorizontalCard from '../components/shared/HorizontalCard';
import styles from './Explore.module.css';
import { useState } from 'react';

function Explore() {

  const filterArray = ['전체', 'BTS','NCT','라디오스타'];
  const [filterIndex, setFilter] = useState(0);
  function setUp(data){
    let filterWord = filterArray[filterIndex];
    if(filterWord == '전체'){
      filterWord = '';
    }
    return data.title.includes(filterWord) || data.description.includes(filterWord);
  }
  return (
    <Layout activeMenu="explore">
      <div className={styles.filterArray}>
        {filterArray.map((filter,index) => (
          <button className={filterIndex == index ? styles.selectindex : ''}
            onClick={() => setFilter(index)} key={index}>{filter}</button>
        ))}
      </div>
      <ContentsLayout>
        {youtubeData['data'].map(function (data, index) {
          if(setUp(data))
            return <HorizontalCard key={`explore-card-${index}`} data={data} />;
        })}
      </ContentsLayout>
    </Layout>
  );
}

export default Explore;