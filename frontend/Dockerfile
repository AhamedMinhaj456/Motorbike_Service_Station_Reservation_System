# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Use nginx as the production server
FROM nginx:alpine

# Copy built files from the previous stage to nginx directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 (this is optional as the EXPOSE directive is informational)
EXPOSE 80

# Start nginx server (this command is the default CMD for the nginx image)
CMD ["nginx", "-g", "daemon off;"]
