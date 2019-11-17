import requests, time, json
from bs4 import BeautifulSoup

BASE_URL = 'https://countrycode.org/'

req = requests.get(BASE_URL)
soup = BeautifulSoup(req.content, 'html.parser')
rows = soup.find('tbody')

newsApiCountries = 'ae ar at au be bg br ca ch cn co cu cz de eg fr gb gr hk hu id ie il in it jp kr lt lv ma mx my ng nl no nz ph pl pt ro rs ru sa se sg si sk th tr tw ua us ve za'

countryMap = {}

for row in rows:
  try:
    elements = row.find_all('td')
    name = elements[0].get_text()
    countryCode = elements[1].get_text()
    abbr = elements[2].get_text().split(' ')[0].lower()
    if abbr in newsApiCountries:
      countryMap[countryCode] = {
        'name': name,
        'abbr': abbr,
        'code': countryCode
      }
  except:
    pass

print(json.dumps(countryMap))