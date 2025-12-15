# Use official Nginx image as the base image
FROM nginx:alpine

# Copy static assets to the Nginx web root directory
COPY . /usr/share/nginx/html

# Configure Nginx to listen on 8080 (Cloud Run default) instead of 80
RUN sed -i 's/listen       80;/listen       8080;/' /etc/nginx/conf.d/default.conf

# Expose port 8080
EXPOSE 8080

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
