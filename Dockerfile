FROM node:18.19.1 

#Directory container
WORKDIR /app 

#The app on port 3000
COPY . .
EXPOSE 3000

CMD ["node", "app.js"]