export class Profile{
    subDistrict:any|subdistrict;
    birthDate:Date|undefined;
    phoneNumber:number|undefined;
    fullname:string|undefined;
    picture:string|undefined;
}

export enum subdistrict {
    "kelapa gading",
    "jelambar",
    "kemang",
    "klender"
}

export class update {
    fullname:string|undefined;
    picture:string|undefined;
}