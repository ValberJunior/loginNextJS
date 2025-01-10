# Use Node.js LTS version
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy remaining application code
COPY . .

# Build the application
RUN yarn build

# Specify command to run the application
CMD ["yarn", "start"]