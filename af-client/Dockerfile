FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
WORKDIR /usr/share/nginx/html
COPY dist/af-client .

CMD ["nginx", "-g", "daemon off;"]
