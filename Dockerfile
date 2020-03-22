# use latest Node LTS (Erbium)
FROM node:erbium
# install Firebase CLI
RUN npm install -g firebase-tools
RUN npm run build

ENTRYPOINT ["/usr/local/bin/firebase"]