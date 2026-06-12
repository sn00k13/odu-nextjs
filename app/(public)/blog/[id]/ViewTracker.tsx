'use client';

import { useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';

export default function ViewTracker({ blogId }: { blogId: number }) {
  useEffect(() => {
    createClient().rpc('increment_views', { blog_id: blogId });
  }, [blogId]);

  return null;
}
