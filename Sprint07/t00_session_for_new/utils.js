export const getSession = (req) => req.session.showAd;

export const hasSession = (req) => (
    req.session.showAd ? true : false
);

