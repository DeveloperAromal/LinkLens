import React, { useEffect, useState } from "react";
import { getPreviewData } from "./utils/previewFetcher";
import { extractLink } from "./utils/LinkExtractor";
import { highlightLinks as  highlightLinkfn} from "./utils/linkHighlighter";

import "../index.css"

export default function LinkLens({content, highlightLink = true, previewCard = false, linkColor = "#1d4ed8", classname}) {

    const [previewData, setPreviewData] = useState(null);

    const highlightedLinkContent = content ? highlightLinkfn(content, linkColor, highlightLink) : "";

    const url = extractLink(content)



    useEffect(() => {
        if (!previewCard || !url) {
            setPreviewData(null);
            return;
        }

        (async () => {
            try {
                const data = await getPreviewData(url);
                setPreviewData(data);
            } catch (err) {
                console.error("Failed to fetch preview:", err);
                setPreviewData(null);
            }
        })();
    }, [url, previewCard]);



    const renderPreviewCard = () => {
        if (!previewData) return null;

        return (
        <div className="preview-card">
            <div className="preview-image">
            <img src={previewData.image} alt={previewData.title} />
            </div>
            <div className="preview-text">
            <h3>{previewData.title}</h3>
            <p>{previewData.description}</p>
            </div>
        </div>
        );
    };
    
    return  (
        <div className={`${classname}`}>
            <div
                dangerouslySetInnerHTML={{ __html: highlightedLinkContent }}
            >
            </div>
            {previewCard && renderPreviewCard()}
        </div>
    )
}