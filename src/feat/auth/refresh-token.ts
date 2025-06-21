import jwt from 'jsonwebtoken';

const REFRESH_SECRET = process.env.REFRESH_TOKEN_SECRET!;

export const generateRefreshToken = (payload: object): string => {
  return jwt.sign(payload, REFRESH_SECRET, { expiresIn: '7d' });
};

export const verifyRefreshToken = (token: string): any => {
  return jwt.verify(token, REFRESH_SECRET);
};
