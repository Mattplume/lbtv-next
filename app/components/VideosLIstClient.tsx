"use client";

import { useState, useEffect } from "react";
import VideoCard from "./VideoCard";
import { VideoNews } from "@/app/types";
import { timeAgo } from "../utils";

interface VideosListClientProps {
  playlistId: string;
}

export default function VideosListClient({
  playlistId,
}: VideosListClientProps) {
  const LIMIT = 30; // On s'attend à recevoir 30 vidéos par appel de l'API
  // Vidéos déjà affichées (toujours en multiples de 4)
  const [displayedVideos, setDisplayedVideos] = useState<VideoNews[]>([]);
  // Vidéos restantes qui ne complètent pas une rangée
  const [leftoverVideos, setLeftoverVideos] = useState<VideoNews[]>([]);
  const [nextCursor, setNextCursor] = useState<string | null>(null);
  // Pour vérifier le nombre de vidéos récupérées dans le dernier appel (depuis l'API, non fusionnées)
  const [lastChunkCount, setLastChunkCount] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Chargement initial des vidéos
  useEffect(() => {
    const fetchInitialVideos = async () => {
      try {
        const res = await fetch(`/api/videos/${playlistId}`);
        if (!res.ok) {
          setErrorMessage("Erreur lors du chargement initial des vidéos");
          return;
        }
        const data = await res.json();
        const batch: VideoNews[] = data.data;
        const completeCount = Math.floor(batch.length / 4) * 4;
        const completeVideos = batch.slice(0, completeCount);
        const leftovers = batch.slice(completeCount);
        setDisplayedVideos(completeVideos);
        setLeftoverVideos(leftovers);
        setLastChunkCount(batch.length); // nombre total d'éléments dans ce lot
        setNextCursor(data.paging?.cursors?.after || null);
      } catch {
        setErrorMessage("Impossible de récupérer les vidéos");
      } finally {
        setLoading(false);
      }
    };

    fetchInitialVideos();
  }, [playlistId]);

  const loadMoreVideos = async () => {
    if (!nextCursor) return;
    setLoadingMore(true);
    setErrorMessage(null);

    try {
      const res = await fetch(`/api/videos/${playlistId}?after=${nextCursor}`);
      if (!res.ok) {
        setErrorMessage("Erreur lors du chargement des vidéos");
        return;
      }
      const data = await res.json();
      const newBatch: VideoNews[] = data.data;
      setLastChunkCount(newBatch.length); // on enregistre le nombre d'éléments dans ce nouveau lot

      // Fusionner les leftovers actuels avec le nouveau lot
      const merged = [...leftoverVideos, ...newBatch];
      const completeCount = Math.floor(merged.length / 4) * 4;
      const newCompleteVideos = merged.slice(0, completeCount);
      const newLeftovers = merged.slice(completeCount);

      // Ajouter les nouvelles rangées complètes aux vidéos affichées
      setDisplayedVideos((prev) => [...prev, ...newCompleteVideos]);
      setLeftoverVideos(newLeftovers);
      setNextCursor(data.paging?.cursors?.after || null);
    } catch {
      setErrorMessage("Erreur lors du chargement des vidéos");
    } finally {
      setLoadingMore(false);
    }
  };

  // Affichage du loader lors du chargement initial
  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-full py-10">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 mb-4"></div>
        <p className="text-gray-600">Chargement des vidéos...</p>
      </div>
    );
  }

  // Le bouton "Voir plus" s'affiche si nextCursor existe
  // ET que le dernier lot récupéré contenait exactement LIMIT vidéos (indiquant qu'il pourrait y avoir d'autres vidéos)
  const showLoadMore = nextCursor !== null && lastChunkCount === LIMIT;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {displayedVideos.map((video, i) => {
          const timeAgoCreated = timeAgo(video.created_time);
          return (
            <VideoCard
              key={video.id}
              video={video}
              index={i}
              createdTime={timeAgoCreated}
            />
          );
        })}
      </div>
      {errorMessage && (
        <div className="text-center text-red-500 mt-4">{errorMessage}</div>
      )}
      {showLoadMore && (
        <div className="flex justify-center mt-12">
          <button
            onClick={loadMoreVideos}
            disabled={loadingMore}
            className="bg-brandColor text-white text-sm font-bold px-4 py-2 rounded hover:opacity-90 transition duration-300"
          >
            {loadingMore ? (
              <span className="flex items-center gap-2">
                <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white"></div>
                Chargement...
              </span>
            ) : (
              "Voir plus"
            )}
          </button>
        </div>
      )}
    </>
  );
}
