import requests
import bs4

URL = 'https://sports.news.naver.com/kbaseball/record/index?category=kbo'
raw = requests.get(URL)

html = bs4.BeautifulSoup(raw.text, 'html.parser')

target = html.find('div', {'class' : 'tbl_box'})
baseball = target.find_all("tbody", {'id' : 'regularTeamRecordList_table'})
information = target.find_all("span", {'class' : 'blind'})
for informations in information:
    print(informations.text)
for baseballs in baseball:
    print(baseballs.text)