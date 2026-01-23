# build stage
FROM node:20-alpine AS build
WORKDIR /app

# deps
COPY package.json package-lock.json* pnpm-lock.yaml* ./
RUN if [ -f pnpm-lock.yaml ]; then corepack enable && pnpm install --no-frozen-lockfile; \
    elif [ -f package-lock.json ]; then npm ci; \
    else npm install; fi

# build
COPY . .
RUN if [ -f pnpm-lock.yaml ]; then pnpm run build; else npm run build; fi

# runtime stage
FROM node:20-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production

# install prod deps only
COPY package.json package-lock.json* pnpm-lock.yaml* ./
RUN if [ -f pnpm-lock.yaml ]; then corepack enable && pnpm install --no-frozen-lockfile; \
    elif [ -f package-lock.json ]; then npm ci; \
    else npm install; fi

# copy build artifacts
COPY --from=build /app/dist ./dist
COPY --from=build /app/public ./public
COPY --from=build /app/index.html ./index.html

# some servers may load env files themselves, but compose will pass env anyway
EXPOSE 80

# IMPORTANT: server must bind to 0.0.0.0 and port 80 internally
ENV PORT=80
ENV HOST=0.0.0.0

CMD ["node", "dist/server/node-build.mjs"]
