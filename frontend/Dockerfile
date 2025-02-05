# Start your image with a node base image
FROM node:18-alpine

# The /app directory should act as the main application directory
WORKDIR /frontend

# Copy local directories to the current local directory of our docker image (/app)
COPY ./ ./

# Install node packages, install serve, build the app, and remove dependencies at the end
RUN npm install

EXPOSE 5173

CMD ["npm", "run", "dev"]