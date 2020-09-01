# BalanceManagerRestReact_v1

_Balance Manager Application v.1.0_

Application will have a Spring backend and React front end.

## Backend (Spring)

This project is a web app wrapper for the Balance Manager java project, which is being embadded (in build.gradle) as

	dependencies {
		compile group: 'ma.glasnost.orika', name: 'orika-core', version: '1.5.4'
		implementation files("libs/BalanceManagerJava-all-1.0.jar")

* https://start.spring.io
* Database config:
	* H2 database for the development stage http://localhost:8080/h2-console/login.do
	* spring.flyway.enabled=false Disabled flyway for now
	* imported the BalanceManager java app and using some of its functionality
		* read the transactions from the source and pass them to the API

### Lombok in Eclipse
* install Lombok to Eclipse: https://www.journaldev.com/18124/java-project-lombok

## Frontend (React)

* to start the app: npm start

