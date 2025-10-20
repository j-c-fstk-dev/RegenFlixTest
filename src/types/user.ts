// --- Core User Profile ---
export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar_url?: string;
  role: 'user' | 'admin';
  created_at: string;
  last_login?: string;
  login_device?: string;
  preferences: UserPreferences;
  progress?: UserProgress;
  achievements?: UserAchievements;
  library?: UserLibrary;
  commerce?: UserCommerce;
}

// --- Preferences ---
export interface UserPreferences {
  preferred_language: 'en' | 'pt' | 'es';
  theme_mode: 'light' | 'dark' | 'system';
  timezone?: string;
  notification_opt_in: boolean;
  content_language?: string;
}

// --- Learning Progress ---
export interface UserProgress {
  completed_lessons: string[];
  course_progress: Record<string, number>; // courseId -> percentage
  current_video_time: Record<string, number>;
  last_opened_pdf?: string;
  last_page_pdf?: number;
}

// --- Achievements ---
export interface UserAchievements {
  badges: string[];
  certificates: string[];
  total_hours_watched: number;
  streak_days: number;
}

// --- Library ---
export interface UserLibrary {
  favorites: string[];
  saved_courses: string[];
  notes: Record<string, string>; // docId -> note content
  bookmarks: Record<string, number>; // videoId -> timestamp
}

// --- Commerce / Subscription ---
export interface UserCommerce {
  plan_id?: string;
  plan_status: 'active' | 'inactive' | 'trial' | 'expired';
  plan_expiration?: string;
  payment_history: PaymentRecord[];
  orders: OrderRecord[];
}

export interface PaymentRecord {
  id: string;
  amount: number;
  date: string;
  method: 'pix' | 'credit' | 'boleto';
  status: 'success' | 'pending' | 'failed';
}

export interface OrderRecord {
  id: string;
  product_id: string;
  quantity: number;
  date: string;
  total: number;
  status: 'delivered' | 'processing' | 'cancelled';
}
