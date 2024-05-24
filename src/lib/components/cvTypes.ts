// cvTypes.ts
export interface PersonalInfo {
    name: string;
    email: string;
  }
  
  export interface Education {
    institution: string;
    degree: string;
    date: string;
  }
  
  export interface WorkExperience {
    company: string;
    position: string;
    date: string;
    responsibilities: string[];
  }

  export interface FurtherEducation {
    institution: string;
    course: string;
    date: string;
    certificate: string;
  }