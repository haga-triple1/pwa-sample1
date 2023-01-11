import { useEffect } from "react";

export const useWebAppManifest = (manifestUrl: string) => {
    useEffect(() => {
        const link = document.createElement("link");
        link.rel = "manifest";
        link.href = manifestUrl;
        document.head.appendChild(link);
        return () => {
          document.head.removeChild(link);
        }
    },[manifestUrl])
}