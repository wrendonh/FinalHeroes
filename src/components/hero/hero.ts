export interface IHero{
    _name: string;
    _height: number;
    _picture: string;
    _nickname: string;    
}

export class Hero implements IHero {
    _id;
    _name;
    _height;
    _picture;
    _nickname;
}