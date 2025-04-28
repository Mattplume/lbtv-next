"use client";

import { useState, useEffect, useRef } from "react";
import VideoHeader from "@/app/components/VideoHeader";
import { useMediaQuery } from "react-responsive";

interface NewsPageClientProps {
  embedHtml: string;
  naturalRatio: number; // Ratio naturel calculé côté serveur
  description: string;
  views: string;
  createdTime: string;
}

export default function NewsPageClient(props: NewsPageClientProps) {
  const { embedHtml, naturalRatio, description, views, createdTime } = props;
  const viewsInK = Math.round(Number(views) / 1000);

  // Pour la détection desktop (minWidth >= 1024px)
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  // Référence pour le conteneur vidéo.
  // Ce conteneur aura un ratio fixe de 16:9, c’est-à-dire un padding-bottom de 56.25%.
  const containerRef = useRef<HTMLDivElement>(null);
  // État pour stocker le style calculé pour l’iframe
  const [iframeStyle, setIframeStyle] = useState<React.CSSProperties>({});
  // Pour l’espace restant en haut/bas ou gauche/droite
  const [barStyles, setBarStyles] = useState<{
    top?: React.CSSProperties;
    bottom?: React.CSSProperties;
    left?: React.CSSProperties;
    right?: React.CSSProperties;
  }>({});

  // Calcul du padding-bottom fixe pour le conteneur (16:9)
  const containerPaddingBottom = "56.25%";

  // Extraction de l'URL de l'iframe depuis embedHtml (le markup initial reste inchangé)
  const extractIframeSrc = (html: string): string => {
    const match = html.match(/src="([^"]+)"/);
    return match ? match[1] : "";
  };
  const iframeSrc = extractIframeSrc(embedHtml);

  // useEffect pour recalculer, après montage, les dimensions optimales de l'iframe
  useEffect(() => {
    if (!containerRef.current) return;
    // Mesurer le conteneur
    const containerWidth = containerRef.current.clientWidth;
    const containerHeight = containerRef.current.clientHeight; // déterminé par le padding-bottom fixe (16:9)
    let videoWidth: number, videoHeight: number;
    let gapTop = 0,
      gapBottom = 0,
      gapLeft = 0,
      gapRight = 0;

    // On souhaite que l’iframe affiche la vidéo en conservant son aspect ratio naturel (naturalRatio).
    // Si naturalRatio < 16/9, la vidéo est plus portrait ou carrée : la hauteur sera limitée par containerHeight,
    // et la largeur idéale est containerHeight * naturalRatio. Le gap horizontal est la différence.
    // Sinon, si naturalRatio >= 16/9, la largeur sera limitée par containerWidth, et la hauteur idéale est containerWidth / naturalRatio.
    if (naturalRatio < 16 / 9) {
      videoHeight = containerHeight;
      videoWidth = containerHeight * naturalRatio;
      gapLeft = (containerWidth - videoWidth) / 2;
      gapRight = gapLeft;
    } else {
      videoWidth = containerWidth;
      videoHeight = containerWidth / naturalRatio;
      gapTop = (containerHeight - videoHeight) / 2;
      gapBottom = gapTop;
    }

    // Mise à jour du style de l'iframe pour qu'elle soit centrée
    setIframeStyle({
      width: `${videoWidth}px`,
      height: `${videoHeight}px`,
      position: "absolute",
      top: gapTop,
      left: gapLeft,
      border: "none",
      objectFit: "contain",
    });

    // Préparer des styles pour les barres (facultatif, si vous souhaitez afficher des éléments séparés)
    setBarStyles({
      top:
        gapTop > 0
          ? {
              height: `${gapTop}px`,
              width: "100%",
              backgroundColor: "#010c1a",
              position: "absolute",
              top: 0,
              left: 0,
            }
          : undefined,
      bottom:
        gapBottom > 0
          ? {
              height: `${gapBottom}px`,
              width: "100%",
              backgroundColor: "#010c1a",
              position: "absolute",
              bottom: 0,
              left: 0,
            }
          : undefined,
      left:
        gapLeft > 0
          ? {
              width: `${gapLeft}px`,
              height: "100%",
              backgroundColor: "#010c1a",
              position: "absolute",
              top: 0,
              left: 0,
            }
          : undefined,
      right:
        gapRight > 0
          ? {
              width: `${gapRight}px`,
              height: "100%",
              backgroundColor: "#010c1a",
              position: "absolute",
              top: 0,
              right: 0,
            }
          : undefined,
    });
  }, [naturalRatio, iframeSrc]);

  // On conserve le calcul de l'espace restant sous le conteneur pour la barre horizontale en desktop
  const [remainingHeight, setRemainingHeight] = useState<number | null>(null);
  useEffect(() => {
    if (!isDesktop || !containerRef.current) return;
    const calculateRemainingHeight = () => {
      const rect = containerRef.current!.getBoundingClientRect();
      const spaceBelow = window.innerHeight - (rect.top + rect.height);
      setRemainingHeight(spaceBelow > 0 ? spaceBelow : 0);
    };
    calculateRemainingHeight();
    window.addEventListener("resize", calculateRemainingHeight);
    return () => window.removeEventListener("resize", calculateRemainingHeight);
  }, [isDesktop]);

  return (
    <div className="news-id-page md:fixed inset-0 z-[1000] flex flex-col lg:flex-row bg-white pb-4">
      {/* Bloc vidéo */}
      <div className="w-full lg:w-[75%]">
        <VideoHeader />
        <div
          id="video-container"
          ref={containerRef}
          className="relative flex justify-center items-center bg-black overflow-hidden"
          style={{ height: 0, paddingBottom: containerPaddingBottom }}
        >
          {iframeSrc ? (
            <iframe
              src={iframeSrc}
              title="Vidéo"
              allow="fullscreen"
              className="absolute"
              style={iframeStyle}
            />
          ) : (
            <p className="text-center text-gray-500">
              Erreur : Impossible de charger la vidéo
            </p>
          )}
          {/* Affichage des barres si nécessaires (optionnel) */}
          {barStyles.top && <div style={barStyles.top} />}
          {barStyles.bottom && <div style={barStyles.bottom} />}
          {barStyles.left && <div style={barStyles.left} />}
          {barStyles.right && <div style={barStyles.right} />}
        </div>
        {isDesktop && remainingHeight !== null && remainingHeight > 0 && (
          <div
            className="w-full bg-darkColor text-white px-4 py-2"
            style={{ height: `${remainingHeight}px` }}
          />
        )}
      </div>

      {/* Bloc infos */}
      <div className="news-id-infos w-full lg:w-[25%] bg-white text-grey-600 px-4 pt-4 flex flex-col">
        <div className="bg-background rounded-lg h-full md:mb-4 p-4">
          <div className="text-darkColor text-sm flex items-center mb-1 font-semibold">
            <span className="mr-2">{viewsInK}k vues</span>
            <span>{createdTime}</span>
          </div>
          <p className="text-gray-600 text-sm mb-2">{description}</p>
        </div>
      </div>
    </div>
  );
}
