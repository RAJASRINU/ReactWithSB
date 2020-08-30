# It's a sample crud operations app using React hooks + spring boot + hibernate + mysql
1. Open application.properties file from src\main\resources and update schema name , mysql schema name and password
2. Navigate to frontend folder and run npm install
3. Run a maven command clean install, which will generate war file with react component and spring boot code
4. Deploy the war file in tomcat

# To run locally
1. Run spring boot application(by running SpringbootApplication java file)
2. Update spring boot service url in react components , where ever we find server call prefix localhost:portno( Ex : http:localhost:8080/)
3. Run npm install then npm start in froendend folder
4. Application will launch in localhost:3000 port
