export interface TeamMember {
    id: number;
    name: string;
    description: string;
    image: string;
    social: {
      facebook?: string;
      twitter?: string;
      linkedin?: string;
      youtube?: string;
    };
}
