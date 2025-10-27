# Use Node 20 Alpine for a lightweight base
FROM node:20-alpine AS base
WORKDIR /app

# Copy and install dependencies (common for both dev and prod)
COPY package*.json ./
RUN npm install

# Copy source
COPY . .

# ========== Development ==========
FROM base AS dev
ENV NODE_ENV=development
EXPOSE 4000
CMD ["npm", "run", "dev"]

# ========== Production ==========
FROM base AS prod
ENV NODE_ENV=production
RUN npm run build
EXPOSE 4000
CMD ["npm", "start"]
