from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
import time
import csv


chrome_driver = ChromeDriverManager().install()
service = Service(chrome_driver)
driver = webdriver.Chrome(service=service)

papago_url = "https://papago.naver.com/"
driver.get(papago_url)

time.sleep(3)

f = open("./my_papago.csv", "r")
rdr = csv.reader(f)
next(rdr)

ko_button = driver.find_element(By.CSS_SELECTOR, "button.btn_switch___x4Tcl").click()

keyword = list()
for row in rdr:
    keyword.append(row[1])

for i in keyword:
    form = driver.find_element(By.CSS_SELECTOR, "textarea#txtSource").send_keys(i)
    button = driver.find_element(By.CSS_SELECTOR, "button#btnTranslate").click()
    time.sleep(1)
    output = driver.find_element(By.CSS_SELECTOR, "div#txtTarget").text
    print(output, ":", i)
    driver.find_element(By.CSS_SELECTOR, "textarea#txtSource").clear()

f.close()