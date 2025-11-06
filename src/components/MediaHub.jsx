import React, { useRef, useState } from 'react';
import { Image as ImageIcon, Video, Upload, X } from 'lucide-react';

export default function MediaHub() {
  const [images, setImages] = useState([]);
  const [videoURL, setVideoURL] = useState('');
  const imgInput = useRef(null);
  const vidInput = useRef(null);

  const handleAddImages = (files) => {
    const newImgs = Array.from(files).map((file) => ({
      name: file.name,
      url: URL.createObjectURL(file),
    }));
    setImages((prev) => [...prev, ...newImgs]);
  };

  const handleRemoveImage = (url) => {
    setImages((prev) => prev.filter((img) => img.url !== url));
  };

  const handleAddVideo = (file) => {
    const url = URL.createObjectURL(file);
    setVideoURL(url);
  };

  return (
    <section id="media" className="rounded-3xl bg-white/70 backdrop-blur-sm border border-white/60 shadow-sm p-6 sm:p-8">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-rose-500 to-purple-600 text-transparent bg-clip-text">Gallery & Video</h2>
        <div className="flex gap-2">
          <button onClick={() => imgInput.current?.click()} className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition text-sm">
            <Upload className="w-4 h-4" /> Add Images
          </button>
          <button onClick={() => vidInput.current?.click()} className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition text-sm">
            <Video className="w-4 h-4" /> Add Video
          </button>
          <input ref={imgInput} type="file" accept="image/*" multiple className="hidden" onChange={(e) => handleAddImages(e.target.files)} />
          <input ref={vidInput} type="file" accept="video/*" className="hidden" onChange={(e) => e.target.files && e.target.files[0] && handleAddVideo(e.target.files[0])} />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {images.length === 0 && (
          <div className="col-span-full text-center text-sm text-slate-500">
            No images yet — upload your favorite Kaoruko looks!
          </div>
        )}
        {images.map((img) => (
          <div key={img.url} className="relative group rounded-xl overflow-hidden border border-white shadow-sm">
            <img src={img.url} alt={img.name} className="w-full h-40 object-cover" />
            <button aria-label="Remove" onClick={() => handleRemoveImage(img.url)} className="absolute top-2 right-2 p-1 rounded-full bg-white/80 text-rose-600 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition">
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8">
        {videoURL ? (
          <div className="aspect-video w-full rounded-xl overflow-hidden border border-white shadow">
            <video controls src={videoURL} className="w-full h-full object-cover" />
          </div>
        ) : (
          <div className="flex items-center justify-center aspect-video w-full rounded-xl bg-gradient-to-br from-purple-50 to-rose-50 border border-purple-100 text-slate-500 text-sm">
            <div className="flex items-center gap-2">
              <ImageIcon className="w-4 h-4" /> Upload a video to feature a memorable moment
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
