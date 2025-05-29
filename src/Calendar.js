import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const artistName = "BergamoReggaeSunfest";

export default function Calendar() {
  useEffect(() => {
    window.FB.XFBML.parse();
  }, []);

  return (
    <>
      
      <div
        className="fb-page"
        data-href={`https://www.facebook.com/${artistName}`}
        data-tabs="events"
        data-width=""
        data-height=""
        data-small-header="true"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <div className="fb-xfbml-parse-ignore">
          <blockquote cite={`https://www.facebook.com/${artistName}/events`}>
            <a
              href={`https://www.facebook.com/${artistName}/events`}
              target="_blank"
            >
              {artistName} - coming events
            </a>
          </blockquote>
        </div>
      </div>
    </>
  );
}
