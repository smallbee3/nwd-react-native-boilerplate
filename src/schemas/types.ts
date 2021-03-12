export interface User {
  id: string;
  email?: string;
  name?: string;
  ip?: string;
  userAgent?: string;
  userAgreement?: boolean;
  verified?: boolean;
  lastSignedIn?: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
}
