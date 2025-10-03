export interface Tangent {
  id: string;
  title?: string;
  content: string;
  user_id: string;
  created_at: string;
  updated_at: string;
  last_saved_at: string;
  last_accessed_at?: string;
}

export interface User {
  id: string;
  email: string;
  user_metadata?: {
    name?: string;
    account_type?: string;
  };
  created_at: string;
  updated_at: string;
}

export interface TangentConnection {
  id: string;
  from_tangent_id: string;
  to_tangent_id: string;
  strength: number;
  type?: string;
  created_at: string;
}
