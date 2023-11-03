# Install dependencies only when needed
FROM node:18-alpine3.15 AS dependencies
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Build the application with cache dependencies
FROM node:18-alpine3.15 AS builder
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
RUN yarn build

#Production image, copy all the files and run nest
FROM node:18-alpine3.15 AS runner
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install --prod
COPY --from=builder /app/dist ./dist
CMD [ "node", "dist/main" ]
