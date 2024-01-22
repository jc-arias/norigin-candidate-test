# norigin-candidate-test
Technical development test for Norigin Media as part of the recruitment process fir the position of TV Frontend developer.
Basically, it consists of a simple SPA developed using React. It shows an EPG for the data provided by the [Norigin Candidate-Tester](https://github.com/NoriginMedia/candidate-tester)

## System requirements:
- [Nodejs](https://nodejs.org/en)

## Launch
- Clone repo via http
```
git clone https://github.com/jc-arias/norigin-candidate-test.git
```
- Open the cloned folder on a terminal
```
cd norigin-candidate-test
```

### Backend
```
cd backend
npm install
npm start
```
The api will be serving on http://localhost:1337

### Frontend
On the root folder of the repo:
```
cd ..
npm install
npm start
```
App will launch on http://localhost:8080 and should open a browser tab automatically

## Notes
- This application is specifically designed with a focus on Smart TVs. As a result, it is **not responsive**, and is intended for being used on Full HD resolutions.
- Navigation is managed through the keyboard arrows, emulating a TV controller.

