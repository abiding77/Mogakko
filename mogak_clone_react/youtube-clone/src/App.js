import youtubeData from './data/youtubeData.json';

function App(){
  console.log('아이디[id] : ',youtubeData['data'][0]['id']);
  console.log('채널아이디[channelId] : ',youtubeData['data'][0]['channelId']);
  console.log('업로드날짜[date] : ',youtubeData['data'][0]['date']);
  console.log('제목[title] : ',youtubeData['data'][0]['title']);
  console.log('썸네일[thumbnail] : ',youtubeData['data'][0]['thumbnail']);
  console.log('설명[description] : ',youtubeData['data'][0]['description']);
  console.log('채널명[channelTitle] : ',youtubeData['data'][0]['channelTitle']);
  console.log('카테고리[category] : ',youtubeData['data'][0]['category']);
  console.log('조회수[viewCount] : ',youtubeData['data'][0]['viewCount']);
  console.log('좋아요수[likeCount] : ',youtubeData['data'][0]['likeCount']);
  console.log('채널주소[channelUrl] : ',youtubeData['data'][0]['channelUrl']);
  console.log('채널썸네일[channelThumbnail] : ',youtubeData['data'][0]['channelThumbnail']);

  return<div>JSON 데이터 살펴보기</div>;
}

export default App;