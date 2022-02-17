import requests
import bs4

while True:
    keyword = input("검색을 원하는 키워드를 입력하세요. ( 0을 입력하면 종료 )")
    if keyword == "0":
        break

    print("< G마켓의", keyword, "상품 정보 >")
    sortList = [["7","G마켓 랭크 순"], ["8","판매 인기 순"], ["1","낮은 가격 순"], ["2","높은 가격 순"],
                ["13","상품평 많은 순"],["3","신규 상품 순"]]

    for index in sortList:
        URL = "https://browse.gmarket.co.kr/search?keyword="+keyword+"&s="+index[0] 
        raw = requests.get(URL)
        html = bs4.BeautifulSoup(raw.text, 'html.parser')
        box = html.find('div', {'class' : 'section__module-wrap', 'module-design-id' : '15'})
        items = box.find_all('div', {"class" : 'box__item-container'})
        print("<", index[1] , ">")
        for item in items[:5]:
            title = item.find('span', {'class' : 'text__item'})
            price = item.find('strong', {'class' : 'text__value'})
            print("이름 : ", title.text)
            print('가격 : ', price.text)
        print()