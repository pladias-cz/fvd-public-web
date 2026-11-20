FROM ghcr.io/biodiversity-cz/php-fpm-noroot-socket:main@sha256:ff81e43a5f926ae7fe4b939e0890a77c3c06e1d9f3c9795f55267efeb8cf9059
LABEL org.opencontainers.image.source=https://github.com/pladias-cz/fvd-public-web
LABEL org.opencontainers.image.description="FloraVltavaDonau"
ARG GIT_TAG
ENV GIT_TAG=$GIT_TAG

COPY  --chown=www:www htdocs /app
