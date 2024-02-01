"use client";

import { useEdgeStore } from "@/app/edgestore";
import { useState } from "react";

const Form = () => {
  const [file, setFile] = useState<File>();
  const [error, setError] = useState<Error | null>(null);
  const [progress, setProgress] = useState(0);
  const [Showprogress, setShowProgress] = useState(false);
  const { edgestore } = useEdgeStore();
  console.log(progress, "...", Showprogress);
  return (
    <div>
      {Showprogress && (
        <progress className="progress w-36" value={progress} max="100" />
      )}
      <form
        action={async (e) => {
          setShowProgress(true);
          if (file) {
            try {
              const res = await edgestore.publicFiles.upload({
                file,
                onProgressChange: (progress) => {
                  setProgress(progress);
                },
              });
              console.log(res.url);
            } catch (error) {}
          }
        }}
      >
        <input
          type="file"
          name="pic"
          className="file-input"
          onChange={(e) => {
            setFile(e.target.files?.[0]);
          }}
        />
        <button className="btn btn-secondary btn-outline">send</button>
      </form>
      {error && <p className="text-error">{error.message}</p>}
    </div>
  );
};

export default Form;
