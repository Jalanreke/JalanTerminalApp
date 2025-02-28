export interface Trainer {
  id: number;
  name: string;
  description: string;
  age: number;
  active: boolean;
  birthdate: Date;
  image_url: string;
  role: Role;
  hobbies: string[];
  hometown: Hometown;
}

export interface Hometown {
  id: number;
  name: string;
  region: Region;
  famous_for: string;
}

export enum Region {
  Kanto = "Kanto",
  Unova = "Unova",
}

export enum Role {
  GymLeader = "Gym Leader",
  Trainer = "Trainer",
}
