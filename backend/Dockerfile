# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /backend
# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port your backend application listens on
EXPOSE 3001

# Specify the command to run your backend application
CMD ["cd database", "prisma format", "prisma generate", "prisma db push", "cd ..", "node", "app.js"]
