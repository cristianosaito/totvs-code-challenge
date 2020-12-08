
export interface Message {
  type?: string;
  text?: string;
  date?: Date;
  username?: MessageUser;
  companyName?:string;
  evaluation?: number,
  offerSharesPercent?: number,
  offerSharesPrice?:string,
  avatar?:string
}

export interface MessageUser {
  name: string;
  username: string;
  avatar: string;
}



