/**
 * Socket.io 接口配置
 * Author：Yui
 * Create time：2022年08月11日
 * Modified on：2022年08月11日
 */
export interface ServerToClientEvents {
    basicEmit: (type: number, user: string, data: Buffer) => void;
}

export interface ClientToServerEvents {
    handshake: () => void;
    basicInfo: (type: number, user: string, data: Buffer) => void;
}

export interface InterServerEvents {
    ping: () => void;
}

export interface SocketData {
    msg: string,
    data: object,
}