FROM ghcr.io/biodiversity-cz/php-fpm-noroot-socket:main
LABEL org.opencontainers.image.source=https://github.com/pladias-cz/fvd-public-web
LABEL org.opencontainers.image.description="FloraVltavaDonau"
ARG GIT_TAG
ENV GIT_TAG=$GIT_TAG

COPY  --chown=www:www htdocs /app
