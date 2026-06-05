# ============================================
# KOREA EDUCATION BACKEND - DOCKERFILE
# ============================================

FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY backend/package.json .
COPY backend/server.js .

# Install dependencies
RUN npm install

# Expose port
EXPOSE 3001

# Environment
ENV NODE_ENV=production

# Start application
CMD ["npm", "start"]
