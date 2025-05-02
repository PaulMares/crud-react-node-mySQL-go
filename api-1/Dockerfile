# Start your image with a node base image
FROM node:18-alpine

# The /app directory should act as the main application directory
WORKDIR /api-1

# Copy the app package and package-lock.json file
COPY package*.json ./
COPY index.js ./

# Install node packages, install serve, build the app, and remove dependencies at the end
RUN npm install \
	&& npm install -g nodemon

EXPOSE 8802

# Starts the backend
CMD ["npm", "start"]