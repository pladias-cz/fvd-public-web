FROM ghcr.io/biodiversity-cz/php-fpm-noroot-socket:main@sha256:d8daed20770bd77583a27b29a135a7ee409129fea6d7b161d1511bc98f67b77f
LABEL org.opencontainers.image.source=https://github.com/pladias-cz/fvd-public-web
LABEL org.opencontainers.image.description="FloraVltavaDonau"
ARG GIT_TAG
ENV GIT_TAG=$GIT_TAG

COPY htdocs /var/www/html
