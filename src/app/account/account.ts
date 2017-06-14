export interface IToken {
    access_token: string;
    token_type: string;
    expires_in: string;
    userName: string;
    error: string;
    error_description: string;
}
export interface ILogin {
    UserName: string;
    Password: string;
    grant_type: string;
}
export interface IRegister {
    Email: string;
    Password: string;
    ConfirmPassword: string;
}