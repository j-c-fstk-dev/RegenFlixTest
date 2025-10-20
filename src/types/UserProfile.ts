
export interface UserProfile {
  id: string;
  username: string;
  name: string;
  avatar_url: string;
  website: string;
  preferences: {
    theme: "light" | "dark";
    notifications: {
      new_course: boolean;
      review_reminder: boolean;
    };
  };
}
