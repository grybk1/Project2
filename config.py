import os

dbusr = "postgres"
dbpwd = "Your DB PW Here"
dbhost = "localhost"
dbengine = "postgresql"
db = "monsters"
cxnstring = (os.environ["DATABASE_URL"] if os.getenv("DATABASE_URL")
else f"{dbengine}://{dbusr}:{dbpwd}@{dbhost}/{db}")