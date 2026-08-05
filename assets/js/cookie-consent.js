const KEY_OVERLAY_SHOWN = 'cookieOverlayShown';
const KEY_COOKIES_ACCEPTED = 'cookiesOverlayAccepted';

function getFlag(key) {
    return localStorage.getItem(key) === '1' ? 1 : 0;
}

function setFlag(key, value) {
    localStorage.setItem(key, value ? '1' : '0');
}

function getAcceptedFlag() {
    return getFlag(KEY_COOKIES_ACCEPTED) === 1 ? 1 : 0;
}

function setAcceptedFlag(value) {
    setFlag(KEY_COOKIES_ACCEPTED, value);
}

export default function cookieConsent() {
    const overlay = document.querySelector('[data-data="cookie-consent"]');
    const body = document.body;

    if (!overlay) {
        return;
    }

    const declineButton = overlay.querySelector('[data-data="cookies-decline"]');
    const acceptButton = overlay.querySelector('[data-data="cookies-accept"]');
    const toggle = document.querySelector('.cookie-consent-overlay-toggle');
    const status = document.querySelector('[data-data="cookie-consent-status"]');

    const statusAllowedLabel = toggle?.dataset.cookieAllowed || 'allowed';
    const statusDeclinedLabel = toggle?.dataset.cookieDeclined || 'declined';

    const updateStatus = () => {
        if (!status) {
            return;
        }

        status.textContent = getAcceptedFlag() === 1
            ? ` (${statusAllowedLabel})`
            : ` (${statusDeclinedLabel})`;
    };

    const showOverlay = () => {
        overlay.classList.remove('d-none');
        if (declineButton) {
            declineButton.focus();
        }
    };

    const hideOverlay = () => {
        overlay.classList.add('d-none');
    };

    const declineConsent = () => {
        setAcceptedFlag(0);
        setFlag(KEY_OVERLAY_SHOWN, 1);
        updateStatus();
        hideOverlay();
    };

    const acceptConsent = () => {
        setAcceptedFlag(1);
        setFlag(KEY_OVERLAY_SHOWN, 1);
        if (typeof window.loadAnalytics === 'function') {
            window.loadAnalytics();
        }
        updateStatus();
        hideOverlay();
    };

    if (getFlag(KEY_OVERLAY_SHOWN) === 0) {
        showOverlay();
    }

    if (toggle) {
        toggle.addEventListener('click', (event) => {
            event.preventDefault();
            showOverlay();
        });
    }

    if (declineButton) {
        declineButton.addEventListener('click', declineConsent);
    }

    document.addEventListener('keydown', (event) => {
        if (overlay.classList.contains('d-none')) {
            return;
        }

        if (event.key === 'Escape') {
            hideOverlay();
            return;
        }
    });

    if (acceptButton) {
        acceptButton.addEventListener('click', acceptConsent);
    }

    updateStatus();

    if (getAcceptedFlag() === 1 && typeof window.loadAnalytics === 'function') {
        window.loadAnalytics();
    }
}