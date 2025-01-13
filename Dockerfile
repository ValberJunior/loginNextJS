# Use the official Node.js 16 image.
FROM node:16-alpine

# Set the working directory.
WORKDIR /app

# Copy the package.json and package-lock.json files.
COPY package.json package-lock.json ./

# Install dependencies.
RUN npm install

# Copy the rest of the application code.
COPY . .

# Build the application.
RUN npm run build

# Expose the port the app runs on.
EXPOSE 3000

# Start the application.
CMD ["npm", "start"]