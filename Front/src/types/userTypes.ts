export interface User {
    _id: string;
    email: string;
    password?: string; 
    avatar?: string;
    firstName?: string;
    lastName?: string;
    middleName?: string;
    gender?: 'male' | 'female' | 'other';
    birthDate?: string;
    createdAt?: string;
    role: 'user' | 'admin';
    resetPasswordToken?: string;
    resetPasswordExpires?: string;
  }
  

export interface RegisterRequest {
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
    middleName?: string;
    gender?: 'male' | 'female' | 'other';
    birthDate?: string;
}
  

export interface RegisterResponse {
    message: string;
}
  

export interface LoginRequest {
    email: string;
    password: string;
}
  

export interface LoginResponse {
    token: string;
    userId: string;
    email: string;
    avatar?: string;
}
  

export interface ForgotPasswordRequest {
    email: string;
}
  

export interface ResetPasswordRequest {
    token: string;
    password: string;
}
  

export interface MessageResponse {
    message: string;
}
  