import { Message, MessageType } from "model/Request";

export class AuthErrorResponse extends Message {
    error = true as const;
    errorText: string;

    constructor(errorText: string) {
        super(MessageType.Registration);
        this.errorText = errorText;
    }
}

export class AuthResponse extends Message {
    name: string;
    index: number | string;
    error = false as const;


    constructor(name: string, index: number | string) {
        super(MessageType.Registration);
        this.name = name;
        this.index = index;
    }

    static serialize(data: unknown) {
        if (data && typeof data === 'object' && 'login' in data && typeof data.login === 'string' &&
            'password' in data && typeof data.password === 'string') {
            return new AuthResponse(data.login, data.password)
        }
        throw new Error('No such fields as login or password with type string');
    }
}