export interface User {
  firstName: string;
  lastName: string;
  email: string;
  isActive?: boolean;
  registered?: any;
  hide?: boolean;
  age?: number;
  address?: {
    street?: string;
    city?: string;
    state?: string
  };
}
