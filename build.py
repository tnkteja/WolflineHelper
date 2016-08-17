import json
f=open("manifest.json","r")
x=json.loads(f.read())
lst=x["icons"].values() + x["background"]["scripts"] + [x["browser_action"]["default_popup"],"popup.js"]
from zipfile import ZipFile

with ZipFile('wolflinehelper.xpi', 'w') as myzip:
	for l in lst:
		print l
		myzip.write(l)