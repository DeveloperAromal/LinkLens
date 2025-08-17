import React, { useState, useEffect } from "react";

export const HighlightedContent = ({
  content,
  linkColor = "#1d4ed8",
  highlightLink = true,
  hoverPreview,
}) => {
  const [previewData, setPreviewData] = useState(null);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hasHydrated, setHasHydrated] = useState(false);
  useEffect(() => {
    setHasHydrated(true);
  }, []);

  const handleMouseEnter = async (url) => {
    if (!hoverPreview) return;
    setHoveredLink(url);
    try {
      const res = await fetch(
        `https://api.microlink.io?url=${encodeURIComponent(url)}`
      );
      const json = await res.json();
      setPreviewData({
        title: json.data.title,
        description: json.data.description,
        image: json.data.image?.url,
      });
    } catch (err) {
      setPreviewData(null);
    }
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
    setPreviewData(null);
  };

  const renderPreviewCard = () => {
    if (!previewData || !hoveredLink) return null;
    return (
      <div
        className="preview-card"
        style={{
          position: "absolute",
          top: "30px",
          left: 0,
          background: "white",
          border: "1px solid #e5e7eb",
          borderRadius: "10px",
          boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
          padding: "12px 18px",
          zIndex: 1000,
          minWidth: "320px",
          maxWidth: "400px",
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
        {previewData.image && (
          <div
            className="preview-image"
            style={{
              flex: "0 0 80px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={previewData.image}
              alt={previewData.title}
              style={{
                width: "70px",
                height: "70px",
                objectFit: "cover",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              }}
            />
          </div>
        )}
        <div className="preview-text" style={{ flex: 1, minWidth: 0 }}>
          <h3
            style={{
              fontSize: "1rem",
              fontWeight: 600,
              margin: 0,
              color: "#1d4ed8",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {previewData.title}
          </h3>
          {previewData.description && (
            <p
              style={{
                fontSize: "0.92rem",
                color: "#374151",
                margin: "6px 0 0 0",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {previewData.description}
            </p>
          )}
        </div>
      </div>
    );
  };

  const pattern = /\bhttps?:\/\/[^\s/$.?#].[^\s]*/gi;
  const parts = content.split(pattern);
  const matches = content.match(pattern);
  const elements = [];
  parts.forEach((part, i) => {
    elements.push(part);
    if (matches && matches[i]) {
      elements.push(
        <span
          key={i}
          style={{ position: "relative" }}
          onMouseEnter={() => handleMouseEnter(matches[i])}
          onMouseLeave={handleMouseLeave}
        >
          <a
            href={matches[i]}
            target="_blank"
            rel="noopener noreferrer"
            style={highlightLink ? { color: linkColor } : {}}
          >
            {matches[i]}
          </a>
          {hasHydrated && hoveredLink === matches[i] && renderPreviewCard()}
        </span>
      );
    }
  });
  return <div className="highlighted-content">{elements}</div>;
};
