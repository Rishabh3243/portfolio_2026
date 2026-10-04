# ==========================================
# Stage 1: Build Stage
# ==========================================
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency definition files
COPY package.json ./
# If package-lock.json exists, it will be used
COPY package*.json ./

# Install dependencies cleanly
RUN npm install

# Copy application source code
COPY . .

# Build the production bundle
RUN npm run build

# ==========================================
# Stage 2: Production Nginx Server
# ==========================================
FROM nginx:1.25-alpine AS runner

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy built static assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx configuration for SPA routing & caching
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose standard web port
EXPOSE 80

# Healthcheck to ensure Nginx is healthy
HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

# Start Nginx server in foreground
CMD ["nginx", "-g", "daemon off;"]
