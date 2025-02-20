import crypto from 'crypto';

const formatAuthHeader = (key, value) => {
    if (!key || !value) return null;

    const pair = `${key}=${value}`;
    const hash = crypto.createHash('sha256').update(pair, 'utf-8').digest();
    const encoded = Buffer.from(hash).toString('base64');
    return `${key}=${encoded}`;
};

export { formatAuthHeader };