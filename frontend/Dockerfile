# Use an official Node.js runtime as the base image for building
FROM node:18 as build

# Set the working directory in the container
WORKDIR /frontend

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the React app
RUN npm run build

# Use a lightweight nginx image to serve the built app
FROM nginx:alpine

# Copy the built app from the previous stage to the nginx web root directory
COPY --from=build /front/build /usr/share/nginx/html

# Expose the port that nginx listens on
EXPOSE 80

# The default command for the nginx image is to start nginx automatically
CMD ["nginx", "-g", "daemon off;"]
