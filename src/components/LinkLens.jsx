import React, { useEffect, useState } from "react";
import { getPreviewData } from "./utils/previewFetcher.js";
import { extractLink } from "./utils/LinkExtractor";
import { HighlightedContent } from "./utils/linkHighlighter";
import { applyCustomRegex } from "./utils/CustomRegex.js";

import "../index.css"

export default function LinkLens({content, highlightLink = true, previewCard = false, linkColor = "#1d4ed8", classname, hoverPreview = false, pattern, tag, customRegex = false, customTagColor}) {

    const [previewData, setPreviewData] = useState(null);

    const url = extractLink(content)

    const customContent = applyCustomRegex(content, pattern, tag, customTagColor)

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
            <div style={{ marginBottom: "10px" }}>
                {content &&
                (customRegex ? (
                    <div
                    className="custom-regex-content"
                    dangerouslySetInnerHTML={{ __html: customContent }}
                    />
                ) : (
                    <HighlightedContent
                    content={content}
                    linkColor={linkColor}
                    highlightLink={highlightLink}
                    hoverPreview={hoverPreview}
                    />
                ))}
            </div>

      {previewCard && renderPreviewCard()}
    </div>
    )
}