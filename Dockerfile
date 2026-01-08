FROM ghcr.io/biodiversity-cz/php-fpm-noroot-socket:main@sha256:8d605df26d8c884e8e767f9bef16ea2fbb8795f6e83a02a1e4aa2c7f978241a3
LABEL org.opencontainers.image.source=https://github.com/pladias-cz/fvd-public-web
LABEL org.opencontainers.image.description="FloraVltavaDonau"
ARG GIT_TAG
ENV GIT_TAG=$GIT_TAG

COPY  --chown=www:www htdocs /app
