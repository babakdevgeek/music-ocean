"use client";
import React, { useState } from "react";
import { artistCreationAction } from "./adminActions";
import { useEdgeStore } from "../edgestore";

const ArtistForm = () => {
  const [file, setFile] = useState<File>();
  const [url, seturl] = useState("");
  const [showProgress, setShowProgress] = useState(false);
  const [progress, setProgress] = useState(0);
  const [toast, setToast] = useState(false);
  const { edgestore } = useEdgeStore();
  const actionWithUrl = artistCreationAction.bind(null, url);
  return (
    <div className="card shadow-md shadow-secondary max-w-md p-4 my-4">
      <form action={actionWithUrl} className="mt-12 w-full">
        <label className="form-control gap-4 m-auto w-full">
          <div className="label p-0 m-0 ">
            <span className="label-text">
              نام خواننده به فارسی جهت نمایش در سایت
            </span>
          </div>
          <input type="text" className="w-full input-primary input input-sm" />
          <div className="label p-0 m-0 ">
            <span className="label-text">
              نام خواننده به انگلیسی جهت نمایش در url
            </span>
          </div>
          <input type="text" className="w-full input-primary input input-sm" />
          <div className="label p-0 m-0">
            <span className="label-text">فایل تصویر خواننده</span>
          </div>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files?.[0])}
            className="w-full file-input file-input-primary "
          />
          {showProgress && (
            <progress
              className="progress w-full progress-success"
              value={progress}
            />
          )}

          <button
            className="btn btn-primary self-center"
            onClick={async () => {
              if (file) {
                setShowProgress(true);
                const res = await edgestore.publicImages.upload({
                  file,
                  onProgressChange: (progress) => {
                    setProgress(progress);
                  },
                });
                seturl(res.url);
                setShowProgress(false);
                setToast(true);
                setTimeout(() => {
                  setToast(false);
                }, 2000);
              }
            }}
          >
            افزودن
          </button>
        </label>
      </form>
      {toast && (
        <div className="toast toast-middle">
          <div className="alert alert-info">
            <span>خواننده افزوده شد</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtistForm;
