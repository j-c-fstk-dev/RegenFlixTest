
import { useState, useEffect, useCallback } from "react";
import { useAuth } from "@/contexts/AuthContext";

interface Progress {
  percentage_complete: number;
  completed_lessons: string[];
}

export const useCourseProgress = (courseId: string) => {
  const { user } = useAuth();
  const [progress, setProgress] = useState<Progress | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProgress = useCallback(async () => {
    if (!user) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `/api/progress?content_id=${courseId}&user_id=${user.id}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch progress");
      }
      const data = await response.json();
      setProgress(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, [courseId, user]);

  useEffect(() => {
    fetchProgress();
  }, [fetchProgress]);

  const updateProgress = async (newProgress: Partial<Progress>) => {
    if (!user) return;

    try {
      const response = await fetch("/api/progress", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content_id: courseId,
          content_type: "course",
          user_id: user.id,
          ...newProgress,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update progress");
      }

      const data = await response.json();
      setProgress(data);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return { progress, isLoading, error, fetchProgress, updateProgress };
};
