import { Message, MessageType } from "model/Request";

export class AuthRequest extends Message {
    name: string;
    password: string;

    constructor(name: string, password: string) {
        super(MessageType.Registration);
        this.name = name;
        this.password = password;

    }

    static serialize(data: unknown) {
        if (data && typeof data === 'object' && 'name' in data && typeof data.name === 'string' &&
            'password' in data && typeof data.password === 'string') {
            return new AuthRequest(data.name, data.password)
        }
        console.error('Input fields:', data)
        throw new Error(`No such fields as name or password with type string`);
    }
}