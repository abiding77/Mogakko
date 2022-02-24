from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
import time

chrome_driver = ChromeDriverManager().install()
service = Service(chrome_driver)
driver = webdriver.Chrome(service=service)

baseball_url = "https://sports.news.naver.com/kbaseball/record/index?category=kbo"
driver.get(baseball_url)

time.sleep(3)

pitcher = driver.find_element(By.ID,"_pitcherRecord").text
print(pitcher)

xpath = "/html/body/div[2]/div[2]/div/div[1]/div/div[5]/div/ul/li[2]/a/span"
button = driver.find_element(By.XPATH,xpath)
button.click()
time.sleep(3)

batter = driver.find_element(By.ID,"_batterRecord").text
print(batter)
driver.close()
#button = driver.find_element(By.CLASS_NAME, "")
