import csv

f = open('./covid19_articles.csv', 'r')

rdr = csv.reader(f)
cnt = 0
for row in rdr:
    if '[속보]' in row[2]:
        print(row[2])
        cnt += 1
print("속보 기사 개수 : ",cnt)

f.close()