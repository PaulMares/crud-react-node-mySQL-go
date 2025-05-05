# Start your image with a node base image
FROM node:18-alpine

# The /app directory should act as the main application directory
WORKDIR /frontend

# Copy local directories to the current local directory of our docker image (/app)
COPY ./ ./

# Install node packages, install serve, build the app, and remove dependencies at the end
RUN npm install

ENV VITE_PROTO=http \
    VITE_BACKEND_HOST=backend.qa.svc.cluster.local \
    VITE_BACKEND_PORT=8800 \
    VITE_API1_HOST=api-1.qa.svc.cluster.local \
    VITE_API1_PORT=8802 \
    VITE_API2_HOST=api-2.qa.svc.cluster.local \
    VITE_API2_PORT=8804

EXPOSE 80

CMD ["npm", "run", "dev"]