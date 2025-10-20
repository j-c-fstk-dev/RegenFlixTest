
import { useState, useEffect, useCallback } from "react";
import { useAuth } from "@/contexts/AuthContext";

interface VideoProgress {
  current_video_time: Record<string, number>;
}

export const useVideoProgress = (videoId: string) => {
  const { user } = useAuth();
  const [progress, setProgress] = useState<VideoProgress | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProgress = useCallback(async () => {
    if (!user) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `/api/progress?content_id=${videoId}&user_id=${user.id}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch video progress");
      }
      const data = await response.json();
      setProgress(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, [videoId, user]);

  useEffect(() => {
    fetchProgress();
  }, [fetchProgress]);

  const updateVideoProgress = async (currentTime: number) => {
    if (!user) return;

    try {
      const response = await fetch("/api/progress", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content_id: videoId,
          content_type: "video",
          user_id: user.id,
          current_video_time: { [videoId]: currentTime },
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update video progress");
      }

      const data = await response.json();
      setProgress(data);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return { progress, isLoading, error, fetchProgress, updateVideoProgress };
};
